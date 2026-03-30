function Footer({ data }) {
  return (
    <footer className="site-footer">
      <div className="container-shell footer-inner">
        <span>{data.left}</span>
        <div className="footer-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>{data.right}</span>
      </div>
    </footer>
  );
}

export default Footer;
