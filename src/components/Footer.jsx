function Footer({ personal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-shell footer-inner">
        <p className="footer-copyright">
          <span className="footer-copyright-icon" aria-hidden="true">
            &copy;
          </span>
          <span>{personal.name} {currentYear}. All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
