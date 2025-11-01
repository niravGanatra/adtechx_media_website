import PropTypes from 'prop-types';

function Hero({ content }) {
  return (
    <section id="top" className="hero">
      <div className="wrapper">
        <div className="hero-grid">
          <div>
            <p className="hero-eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <div className="hero-cta">
              <a className="button button-primary" href={content.primaryCta.href} target="_blank" rel="noreferrer">
                {content.primaryCta.label}
              </a>
              <a className="button button-secondary" href={content.secondaryCta.href} target="_blank" rel="noreferrer">
                {content.secondaryCta.label}
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-video">
              <video controls playsInline loop muted poster="https://cdn.prod.website-files.com/672a4022c04412b253b0ae88/672a4022c04412b253b0af39_4.png">
                <source src={content.video} type="video/mp4" />
              </video>
            </div>
            <p className="hero-caption">{content.videoCaption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  content: PropTypes.shape({
    eyebrow: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    primaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    secondaryCta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    video: PropTypes.string.isRequired,
    videoCaption: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
