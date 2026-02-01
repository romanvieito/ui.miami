import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Server-side Mixpanel tracking function
async function trackMixpanelEvent(eventName: string, properties: Record<string, any> = {}) {
  const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  if (!MIXPANEL_TOKEN) return;

  try {
    const response = await fetch(`https://api.mixpanel.com/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        data: JSON.stringify([{
          event: eventName,
          properties: {
            token: MIXPANEL_TOKEN,
            distinct_id: properties.distinct_id || 'server-user',
            time: Math.floor(Date.now() / 1000),
            ...properties,
          },
        }]),
      }),
    });

    if (!response.ok) {
      console.error('Failed to track Mixpanel event:', response.statusText);
    }
  } catch (error) {
    console.error('Error tracking Mixpanel event:', error);
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const data = await resend.emails.send({
      from: "InMiami <onboarding@resend.dev>", // Default testing domain
      to: ["romanvieito@gmail.com"],
      replyTo: email,
      subject: `New Lead from InMiami: ${name}`,
      html: `
        <h3>New Lead Contact Info</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (data.error) {
      console.error("Resend error:", data.error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    // Track successful lead in Mixpanel
    await trackMixpanelEvent("Lead Email Sent", {
      name: name,
      email: email,
      phone: phone,
      message: message,
      hasPhone: !!phone,
      hasMessage: !!message,
    });

    // Send push notification via ntfy.sh
    try {
      await fetch(`https://ntfy.sh/${process.env.NTFY_TOPIC}`, {
        method: "POST",
        body: `New Lead: ${name}\n${email}\n${phone}`,
        headers: {
          "Authorization": `Bearer ${process.env.NTFY_TOKEN}`,
          "Title": "New InMiami Lead",
          "Priority": "high",
          "Tags": "moneybag,partying_face",
        }
      });
    } catch (ntfyError) {
      console.error("Error sending notification:", ntfyError);
      // We don't fail the request if notification fails, since email was sent
    }

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
