import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const initialForm = {
  name: '',
  email: '',
  budget: '',
  message: '',
};

function SocialIcon({ name }) {
  if (name === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (name === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.6 9.7h2.67V18H5.6V9.7Zm4.35 0h2.56v1.13h.04c.36-.68 1.23-1.39 2.54-1.39 2.72 0 3.22 1.84 3.22 4.23V18h-2.67v-3.85c0-.92-.02-2.1-1.25-2.1-1.25 0-1.44.99-1.44 2.03V18H9.95V9.7Z"
        />
      </svg>
    );
  }

  if (name === 'WhatsApp') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.2A9.8 9.8 0 0 0 3.7 17.3L2.5 21.5l4.3-1.14A9.77 9.77 0 0 0 12 21.8c5.4 0 9.8-4.39 9.8-9.8S17.4 2.2 12 2.2Zm0 17.82c-1.54 0-3.03-.41-4.34-1.2l-.31-.18-2.56.68.69-2.5-.2-.33a8 8 0 1 1 6.72 3.53Zm4.39-5.97c-.24-.12-1.4-.69-1.62-.77-.22-.08-.38-.12-.54.12-.16.24-.62.77-.76.93-.14.16-.28.18-.52.06-.24-.12-1-.38-1.9-1.21-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.12-.54-1.33-.74-1.82-.2-.48-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.3.98 2.46c.12.16 1.69 2.64 4.1 3.71.57.25 1.02.4 1.37.51.58.19 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.11.2-.54.2-1.01.14-1.11-.06-.1-.22-.16-.46-.28Z"
        />
      </svg>
    );
  }

  return null;
}

function Contact({ data }) {
  const { personal, contact } = data;
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!formValues.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formValues.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formValues.budget.trim()) nextErrors.budget = 'Contact is required.';
    if (!formValues.message.trim() || formValues.message.trim().length < 20) {
      nextErrors.message = 'Share at least a few project details.';
    }
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast.error('Form service key missing. Add VITE_WEB3FORMS_ACCESS_KEY to enable submissions.');
      return;
    }

    try {
      setIsSubmitting(true);
      setErrors({});

      const payload = {
        access_key: accessKey,
        subject: `Portfolio inquiry from ${formValues.name}`,
        from_name: formValues.name,
        email: formValues.email,
        replyto: formValues.email,
        name: formValues.name,
        contact: formValues.budget,
        message: formValues.message,
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send message right now.');
      }

      setFormValues(initialForm);
      toast.success('Message sent successfully.');
    } catch (error) {
      toast.error(error.message || 'Something went wrong while sending the message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoRows = [
    {
      icon: '@',
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: 'PH',
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: 'PK',
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-block contact-section">
      <div className="container-shell">
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.07 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <span className="ghost-number">07</span>
          <div className="section-intro-copy">
            <p className="eyebrow-label">Contact</p>
            <h2>{contact.heading}</h2>
          </div>
        </motion.div>

        <div className="contact-grid">
          <motion.article
            className="contact-panel contact-left"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.07 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="contact-left-top">
              <h3>
                {contact.leftHeading.before} <span className="accent-italic">{contact.leftHeading.accent}</span>
                {contact.leftHeading.after}
              </h3>
              <p className="contact-lead-copy">{contact.leftCopy}</p>
            </div>

            <div className="contact-direct-card">
              <div className="contact-direct-head">
                <span className="contact-direct-badge">Direct Contact</span>
              </div>

              <div className="contact-info-list">
                {infoRows.map((row) => (
                  <div key={row.value} className="contact-info-row">
                    <span className="contact-icon-box">{row.icon}</span>
                    <div className="contact-info-copy">
                      <small>{row.label}</small>
                      {row.href ? (
                        <a className="interactive" href={row.href}>
                          {row.value}
                        </a>
                      ) : (
                        <span>{row.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-row">
                {contact.social.map((social) => (
                  <a
                    key={social.name}
                    className="social-button interactive"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="social-button-icon" aria-hidden="true">
                      <SocialIcon name={social.name} />
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            className="contact-panel contact-right"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.07 }}
            transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
          >
            <div className="contact-form-head">
              <p className="contact-form-title">{contact.formTitle}</p>
            </div>
            <form className="contact-form" onSubmit={submitForm} noValidate>
              <div className="contact-form-grid">
                {[
                  { label: 'Full Name', name: 'name', type: 'text' },
                  { label: 'Email Address', name: 'email', type: 'email' },
                  { label: 'Contact', name: 'budget', type: 'text' },
                ].map((field) => (
                  <label key={field.name} className={`field-shell ${errors[field.name] ? 'has-error' : ''}`}>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder=" "
                      value={formValues[field.name]}
                      onChange={handleChange}
                    />
                    <span>{field.label}</span>
                    {errors[field.name] && <small>{errors[field.name]}</small>}
                  </label>
                ))}
              </div>

              <label className={`field-shell field-shell-message ${errors.message ? 'has-error' : ''}`}>
                <textarea
                  name="message"
                  rows="6"
                  placeholder=" "
                  value={formValues.message}
                  onChange={handleChange}
                />
                <span>Project Details</span>
                {errors.message && <small>{errors.message}</small>}
              </label>

              <div className="contact-submit-row">
                <button type="submit" className="submit-button interactive" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
