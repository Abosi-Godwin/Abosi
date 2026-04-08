import * as React from "react";

interface ContactEmailProps {
    name: string;
    email: string;
    message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
    return (
        <div
            style={{
                fontFamily: "Arial, sans-serif",
                maxWidth: "600px",
                margin: "0 auto",
                backgroundColor: "#ffffff"
            }}
        >
            {/* Header */}
            <div style={{ backgroundColor: "#0f172a", padding: "32px 40px" }}>
                <h1
                    style={{
                        color: "#ffffff",
                        margin: 0,
                        fontSize: "22px",
                        fontWeight: 700,
                        letterSpacing: "-0.3px"
                    }}
                >
                    abosi.dev
                </h1>
                <p
                    style={{
                        color: "#94a3b8",
                        margin: "6px 0 0",
                        fontSize: "13px"
                    }}
                >
                    New message from your portfolio
                </p>
            </div>

            {/* Body */}
            <div style={{ padding: "36px 40px", backgroundColor: "#f8fafc" }}>
                <div
                    style={{
                        backgroundColor: "#ffffff",
                        borderRadius: "12px",
                        padding: "32px",
                        border: "1px solid #e2e8f0"
                    }}
                >
                    <h2
                        style={{
                            margin: "0 0 24px",
                            fontSize: "18px",
                            color: "#0f172a",
                            fontWeight: 600
                        }}
                    >
                        You've got a new inquiry 👋
                    </h2>

                    {/* Name */}
                    <div style={{ marginBottom: "20px" }}>
                        <p
                            style={{
                                margin: "0 0 4px",
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#94a3b8",
                                textTransform: "uppercase",
                                letterSpacing: "1px"
                            }}
                        >
                            From
                        </p>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "15px",
                                color: "#1e293b",
                                fontWeight: 500
                            }}
                        >
                            {name}
                        </p>
                    </div>

                    {/* Email */}
                    <div style={{ marginBottom: "20px" }}>
                        <p
                            style={{
                                margin: "0 0 4px",
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#94a3b8",
                                textTransform: "uppercase",
                                letterSpacing: "1px"
                            }}
                        >
                            Email
                        </p>
                        <a
                            href={`mailto:${email}`}
                            style={{
                                margin: 0,
                                fontSize: "15px",
                                color: "#6366f1",
                                textDecoration: "none"
                            }}
                        >
                            {email}
                        </a>
                    </div>

                    {/* Divider */}
                    <hr
                        style={{
                            border: "none",
                            borderTop: "1px solid #e2e8f0",
                            margin: "24px 0"
                        }}
                    />

                    {/* Message */}
                    <div>
                        <p
                            style={{
                                margin: "0 0 10px",
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#94a3b8",
                                textTransform: "uppercase",
                                letterSpacing: "1px"
                            }}
                        >
                            Message
                        </p>
                        <p
                            style={{
                                margin: 0,
                                fontSize: "15px",
                                color: "#334155",
                                lineHeight: "1.7",
                                whiteSpace: "pre-wrap"
                            }}
                        >
                            {message}
                        </p>
                    </div>

                    {/* CTA */}
                    <div style={{ marginTop: "32px" }}>
                        <a
                            href={`mailto:${email}`}
                            style={{
                                display: "inline-block",
                                backgroundColor: "#0f172a",
                                color: "#ffffff",
                                padding: "12px 24px",
                                borderRadius: "8px",
                                fontSize: "14px",
                                fontWeight: 600,
                                textDecoration: "none"
                            }}
                        >
                            Reply to {name}
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div style={{ padding: "24px 40px", textAlign: "center" as const }}>
                <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8" }}>
                    Sent via contact form at{" "}
                    <a
                        href="https://abosi.vercel.app"
                        style={{ color: "#6366f1", textDecoration: "none" }}
                    >
                        abosi.vercel.app
                    </a>
                </p>
            </div>
        </div>
    );
}
