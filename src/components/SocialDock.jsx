import { motion } from 'framer-motion';

function DockIcon({ name }) {
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

  if (name === 'Email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-.75 6.8 5.43L18.8 6H5.2Zm13.8 2.56-6.38 5.1a1 1 0 0 1-1.24 0L5 8.56v8.69c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75V8.56Z"
        />
      </svg>
    );
  }

  if (name === 'Call') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.49c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.19 2.2Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2Zm1 14.93V18h-2v-1.07A5.99 5.99 0 0 1 6.07 13H5v-2h1.07A5.99 5.99 0 0 1 11 6.07V5h2v1.07A5.99 5.99 0 0 1 17.93 11H19v2h-1.07A5.99 5.99 0 0 1 13 16.93ZM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Z"
      />
    </svg>
  );
}

function SocialDock({ personal, contact }) {
  const dockItems = [
    ...contact.social,
    { name: 'Call', href: `tel:${personal.phone.replace(/\s+/g, '')}` },
    { name: 'Email', href: `mailto:${personal.email}` },
  ];

  return (
    <motion.aside
      className="social-dock"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Quick connect links"
    >
      {dockItems.map((item, index) => {
        const isExternal = !['Email', 'Call'].includes(item.name);
        const itemClass = `social-dock-link social-dock-link-${item.name.toLowerCase()} interactive magnetic`;

        return (
          <motion.a
            key={item.name}
            className={itemClass}
            href={item.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            aria-label={item.name}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.18 + index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ x: -4 }}
          >
            <span className="social-dock-icon" aria-hidden="true">
              <DockIcon name={item.name} />
            </span>
            <span className="social-dock-tooltip" aria-hidden="true">
              {item.name}
            </span>
          </motion.a>
        );
      })}
    </motion.aside>
  );
}

export default SocialDock;
