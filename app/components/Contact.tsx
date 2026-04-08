"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter, FaUpwork } from "react-icons/fa6";
import Heading from "../components/Heading";

type FormState = "idle" | "loading" | "success" | "error";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<FormState>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) return;

        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="py-20 px-4" id="contact">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left — copy */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <Heading text="Let's Work Together" />
                    <p className="text-gray-600 leading-relaxed">
                        Have a project in mind, need a website built, or just
                        want to talk? My inbox is open — I usually respond
                        within 24 hours.
                    </p>

                    <div className="space-y-3 pt-2">
                        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                            Find me on
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.linkedin.com/in/abosigodwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                            >
                                <FaLinkedinIn size={18} />
                            </a>
                            <a
                                href="https://github.com/Abosi-Godwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href="https://x.com/AbosiGodwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                            >
                                <FaTwitter size={18} />
                            </a>
                            <a
                                href="https://www.upwork.com/freelancers/~010c925ad55e60618b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-xl border border-gray-200 hover:border-primary hover:text-primary transition-colors"
                            >
                                <FaUpwork size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right — form */}
                <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                >
                    {/* Name */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            rows={5}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        onClick={handleSubmit}
                        disabled={status === "loading"}
                        className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {/* Feedback */}
                    {status === "success" && (
                        <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-green-600 font-medium text-center pt-1"
                        >
                            ✓ Message sent! I'll get back to you soon.
                        </motion.p>
                    )}
                    {status === "error" && (
                        <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500 font-medium text-center pt-1"
                        >
                            Something went wrong. Please try again.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
