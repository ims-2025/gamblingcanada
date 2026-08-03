import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the OnlineGamblingCanada.com editorial team — feedback, corrections and partnership enquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Contact' }]} />
      <section className="section-tight">
        <div className="container prose">
          <div className="eyebrow">Contact</div>
          <h1>Get in touch</h1>
          <p className="lead">
            Questions, feedback or a correction on a review? We’d love to hear from you. Use the form below and
            our editorial team will respond.
          </p>
          <form className="card" style={{ padding: 24, maxWidth: 560 }} aria-label="Contact form">
            <div style={{ display: 'grid', gap: 14 }}>
              <label>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>Name</div>
                <input type="text" name="name" required style={inputStyle} />
              </label>
              <label>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>Email</div>
                <input type="email" name="email" required style={inputStyle} />
              </label>
              <label>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>Message</div>
                <textarea name="message" rows={5} required style={{ ...inputStyle, resize: 'vertical' }} />
              </label>
              <button type="submit" className="btn btn-primary" style={{ justifySelf: 'start' }}>
                Send message
              </button>
            </div>
          </form>
          <p className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>
            This is a front-end template form — connect it to your email or form provider (e.g. Formspree,
            Resend or a serverless function) before going live.
          </p>
        </div>
      </section>
    </>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '11px 13px',
  border: '1px solid var(--line)',
  borderRadius: 9,
  fontSize: '1rem',
  fontFamily: 'inherit',
};
