import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import Section from './Section.jsx';
import Reveal from './Reveal.jsx';
import { contact, CONTACT_FORM_ENDPOINT } from '../data/portfolioData.js';
import validateContactForm from '../utils/validateContactForm.js';
import './Contact.css';

// `website` is a honeypot: hidden from people, commonly auto-filled by bots.
const initialForm = { name: '', email: '', subject: '', message: '', website: '' };

export default function Contact() {
  const [values, setValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Honeypot tripped — pretend it worked and stop.
    if (values.website) {
      setStatus('success');
      setValues(initialForm);
      return;
    }

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!CONTACT_FORM_ENDPOINT) {
      // UI-only demo mode: open the user's mail client with the message.
      const body = encodeURIComponent(
        `${values.message}\n\n— ${values.name} (${values.email})`
      );
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        values.subject
      )}&body=${body}`;
      setStatus('success');
      setValues(initialForm);
      return;
    }

    try {
      setStatus('sending');
      const { website, ...payload } = values;
      void website;
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Request failed');
      setStatus('success');
      setValues(initialForm);
    } catch {
      setStatus('error');
    }
  };

  const details = [
    {
      icon: <FiMail aria-hidden="true" />,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: <FiPhone aria-hidden="true" />,
      label: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    contact.location && {
      icon: <FiMapPin aria-hidden="true" />,
      label: 'Location',
      value: contact.location,
    },
    contact.github && {
      icon: <FiGithub aria-hidden="true" />,
      label: 'GitHub',
      value: contact.github.replace('https://', ''),
      href: contact.github,
      external: true,
    },
    contact.linkedin && {
      icon: <FiLinkedin aria-hidden="true" />,
      label: 'LinkedIn',
      value: contact.linkedin.replace('https://', ''),
      href: contact.linkedin,
      external: true,
    },
  ].filter(Boolean);

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Connect"
      subtitle="Open to full-time software roles, collaboration and tech discussions. Let's build something together."
    >
      <div className="contact__grid">
        <Reveal className="contact__info">
          <ul>
            {details.map((item) => (
              <li key={item.label}>
                <span className="contact__icon">{item.icon}</span>
                <div>
                  <span className="contact__label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer noopener' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <h3 className="contact__form-title">Send a Message</h3>
            <div className="contact__honeypot" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={values.website}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p className="contact__error" id="name-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p className="contact__error" id="email-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p className="contact__error" id="subject-error" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p className="contact__error" id="message-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="btn btn--primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <>
                  <span className="contact__spinner" aria-hidden="true" />
                  Sending&hellip;
                </>
              ) : (
                'Send Message'
              )}
            </button>

            <p className="contact__status" role="status" aria-live="polite">
              {status === 'success' &&
                (CONTACT_FORM_ENDPOINT
                  ? 'Thank you — your message has been sent.'
                  : 'Your email app should now open with the message ready to send.')}
              {status === 'error' &&
                'Something went wrong. Please email me directly instead.'}
            </p>

            {!CONTACT_FORM_ENDPOINT && (
              <p className="contact__note">
                This form is not connected to a backend. It opens your email
                client with the details filled in. To enable direct sending, add
                a form endpoint (for example a Formspree URL) to{' '}
                <code>CONTACT_FORM_ENDPOINT</code> in{' '}
                <code>src/data/portfolioData.js</code>.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
