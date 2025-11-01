import PropTypes from 'prop-types';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Experience({ highlights }) {
  return (
    <section className="experience">
      <div className="wrapper">
        <div className="experience-grid">
          <div>
            <SectionHeader
              eyebrow="Immersive storytelling"
              title="AI-powered characters that feel alive"
              description="Learners interact with autonomous characters that react to their decisions, tone, and strategy. Beneath the hood, our generative AI orchestrates branching narratives, real-time scoring, and personalized coaching nudges."
            />
            <div className="experience-highlights">
              {highlights.map((highlight) => (
                <div key={highlight} className="highlight">
                  {highlight}
                </div>
              ))}
            </div>
            <div className="experience-cta">
              <a className="button button-primary" href="https://adtechx.forms.app/sign-up" target="_blank" rel="noreferrer">
                Book a live demo
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-video">
              <video
                controls
                playsInline
                loop
                muted
                poster="https://cdn.prod.website-files.com/672a4022c04412b253b0ae88/672a4022c04412b253b0af44_buble-img%402x.avif"
              >
                <source
                  src="https://zajno-storage0.s3.us-west-1.amazonaws.com/dev/Gentel+rain/Stable+version/Gen-3+Alpha+Turbo+TABLET.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <p className="hero-caption">Scenario co-pilots provide just-in-time guidance and assessments.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Experience.propTypes = {
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Experience;
