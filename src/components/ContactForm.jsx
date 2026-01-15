import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    // State to handle form status
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // This is where integration with Formspree or EmailJS would go.
        // For now, we simulate a submission.
        setStatus("sending");

        // Simulate network request
        setTimeout(() => {
            setStatus("success");
            form.reset();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-forest-bg-secondary p-8 rounded-xl shadow-lg border border-forest-bg-elevated">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest-text-secondary mb-2">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-forest-bg-elevated bg-forest-bg-primary text-forest-text-primary focus:border-forest-accent-main focus:ring-1 focus:ring-forest-accent-main outline-none transition-colors placeholder-forest-text-muted/50"
                    placeholder="Jane Doe"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-text-secondary mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-forest-bg-elevated bg-forest-bg-primary text-forest-text-primary focus:border-forest-accent-main focus:ring-1 focus:ring-forest-accent-main outline-none transition-colors placeholder-forest-text-muted/50"
                    placeholder="jane@example.com"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-text-secondary mb-2">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-forest-bg-elevated bg-forest-bg-primary text-forest-text-primary focus:border-forest-accent-main focus:ring-1 focus:ring-forest-accent-main outline-none transition-colors placeholder-forest-text-muted/50 resize-none"
                    placeholder="How can we help you?"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-forest-accent-main hover:bg-forest-accent-main/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-accent-main transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {status === "sending" ? (
                    "Sending..."
                ) : (
                    <>
                        Send Message <Send size={18} className="ml-2" />
                    </>
                )}
            </button>

            {status === "success" && (
                <div className="p-4 rounded-lg bg-green-900/30 text-green-300 text-sm font-medium border border-green-800">
                    Message sent successfully! I'll get back to you soon.
                </div>
            )}

            {/* Instructions for user */}
            <p className="text-xs text-forest-text-muted text-center mt-4">
                Powered by frontend submission (Configure Formspree/EmailJS in ContactForm.jsx)
            </p>
        </form>
    );
};

export default ContactForm;
