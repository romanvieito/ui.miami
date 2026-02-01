import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    // Send push notification via ntfy.sh
    try {
      await fetch(`https://ntfy.sh/${process.env.NTFY_TOPIC}`, {
        method: "POST",
        body: `New Lead: ${name}\n${email}\n${phone}`,
        headers: {
          "Authorization": `Bearer ${process.env.NTFY_TOKEN}`,
          "Title": "🚀 New InMiami Lead",
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
