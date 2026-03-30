function Ticker({ items }) {
  const duplicated = [...items, ...items];

  return (
    <section className="ticker-wrap" aria-label="Technology ticker">
      <div className="ticker-intro">
        <span className="ticker-intro-label">Core Stack</span>
        <span className="ticker-intro-line" aria-hidden="true" />
      </div>
      <div className="ticker-track">
        {duplicated.map((item, index) => (
          <div key={`${item}-${index}`} className="ticker-item">
            <span>{item}</span>
            <span className="ticker-separator">+</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ticker;
