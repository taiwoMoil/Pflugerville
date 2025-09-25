import React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, message }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h1 style={{ fontSize: '24px', color: '#5843BD' }}>New Contact Form Submission</h1>
      <p>You have received a new message from the Pflugerville Venture Pfest contact form.</p>
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
      <h2 style={{ fontSize: '20px', color: '#FF6633' }}>Sender Details:</h2>
      <p><strong>Name:</strong> {name}</p>
            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
      <h2 style={{ fontSize: '20px', color: '#FF6633' }}>Message:</h2>
      <div style={{ background: '#f9f9f9', padding: '15px', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
        <p>{message}</p>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '20px 0' }} />
      <p style={{ fontSize: '12px', color: '#999' }}>This email was sent from the contact form on the Pflugerville Venture Pfest website.</p>
    </div>
  </div>
);
