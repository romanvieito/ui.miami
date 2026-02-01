"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/mixpanel";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission attempt
    trackEvent("Contact Form Submitted", {
      hasName: !!formState.name.trim(),
      hasEmail: !!formState.email.trim(),
      hasPhone: !!formState.phone.trim(),
      hasMessage: !!formState.message.trim(),
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Track successful form submission
      trackEvent("Contact Form Success", {
        name: formState.name,
        email: formState.email,
        hasPhone: !!formState.phone.trim(),
        hasMessage: !!formState.message.trim(),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);

      // Track form submission failure
      trackEvent("Contact Form Error", {
        error: error instanceof Error ? error.message : "Unknown error",
      });

      alert("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-8 bg-white/5 rounded-2xl border border-white/10"
      >
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-white/60">
          We'll get back to you shortly to start your story.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1 pl-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-coral transition-colors"
          placeholder="Your name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1 pl-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-coral transition-colors"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1 pl-1">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-coral transition-colors"
            placeholder="(305) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1 pl-1">
          Message (Optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={formState.message}
          onChange={handleChange}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-coral transition-colors resize-none"
          placeholder="Tell us about your business..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-coral hover:bg-coral-light disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg py-4 rounded-full transition-all shadow-lg shadow-coral/20 flex items-center justify-center gap-2 mt-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Start Your Story
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
