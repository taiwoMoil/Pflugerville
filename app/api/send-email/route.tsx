import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'taiwo@moilapp.com';
const FROM_EMAIL = 'Pflugerville Pfest Contact Form <onboarding@resend.dev>'; // This must be a verified domain on Resend

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, message } = body;

        if (!name || !message) {
            return NextResponse.json({ error: 'Missing required fields: name, email, and message are required.' }, { status: 400 });
        }

        const emailComponent = await EmailTemplate({ name, message });
        const emailHtml = await render(emailComponent);

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            subject: `New Inquiry from ${name} via Pflugerville Pfest Site`,
                        html: emailHtml,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
        }

        console.log('Email sent successfully!', data);
        return NextResponse.json({ message: 'Email sent successfully!', data });
    } catch (err) {
        console.error('Server Error:', err);
        return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
    }
}
