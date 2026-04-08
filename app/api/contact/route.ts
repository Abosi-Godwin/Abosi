import { Resend } from "resend";
import { NextResponse } from "next/server";
import { ContactEmail } from "../../components/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: "bbnl6060@gmail.com",
        replyTo: email,
        subject: `New message from ${name}`,
        react: ContactEmail({ name, email, message })
    });

    if (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
}
