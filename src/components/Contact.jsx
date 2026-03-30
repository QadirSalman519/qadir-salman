import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const initialForm = {
  name: '',
  email: '',
  budget: '',
  message: '',
};

function Contact({ data }) {
  const { personal, contact } = data;
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!formValues.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formValues.email.trim()) {
      nextErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (!formValues.budget.trim()) nextErrors.budget = 'Project budget is required.';
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setFormValues(initialForm);
    toast.success('Message sent! ✦');
  };

  const infoRows = [
    { icon: '📧', value: personal.email, href: `mailto:${personal.email}` },
    { icon: '📱', value: personal.phone, href: `tel:${personal.phone.replace(/\s+/g, '')}` },
    { icon: '📍', value: personal.location, href: null },
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
          <span className="ghost-number">06</span>
          <div className="section-intro-copy">
            <p className="eyebrow-label">Contact</p>
            <h2>
              Let's build something that doesn't feel <span className="accent-italic">replaceable.</span>
            </h2>
          </div>
        </motion.div>

        <div className="contact-grid">
          <motion.article
            className="contact-panel contact-left"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.07 }}
            transition={{ duration: 0.65, delay: 0.08, ease: 'easeOut' }}
          >
            <p className="eyebrow-label">{contact.intro}</p>
            <h3>
              Have a project in <span className="accent-italic">mind?</span>
            </h3>

            <div className="contact-info-list">
              {infoRows.map((row) => (
                <div key={row.value} className="contact-info-row">
                  <span className="contact-icon-box">{row.icon}</span>
                  {row.href ? (
                    <a className="interactive" href={row.href}>
                      {row.value}
                    </a>
                  ) : (
                    <span>{row.value}</span>
                  )}
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
                  {social.name}
                </a>
              ))}
            </div>
          </motion.article>

          <motion.article
            className="contact-panel contact-right"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.07 }}
            transition={{ duration: 0.65, delay: 0.16, ease: 'easeOut' }}
          >
            <p className="contact-form-title">{contact.formTitle}</p>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {[
                { label: 'Full Name', name: 'name', type: 'text' },
                { label: 'Email Address', name: 'email', type: 'email' },
                { label: 'Project Budget', name: 'budget', type: 'text' },
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

              <label className={`field-shell ${errors.message ? 'has-error' : ''}`}>
                <textarea
                  name="message"
                  rows="4"
                  placeholder=" "
                  value={formValues.message}
                  onChange={handleChange}
                />
                <span>Message</span>
                {errors.message && <small>{errors.message}</small>}
              </label>

              <button type="submit" className="submit-button interactive">
                Send Message
              </button>
            </form>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

export default Contact;
