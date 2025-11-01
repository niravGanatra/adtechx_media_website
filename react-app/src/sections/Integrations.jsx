import { useMemo } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Integrations({ logos }) {
  const marqueeItems = useMemo(() => logos.concat(logos), [logos]);

  return (
    <section className="marquee-section">
      <div className="wrapper">
        <SectionHeader
          eyebrow="Integrations"
          title="Connected to your platforms"
          description="Sync learning data with the systems you rely on every day—HCM, LMS, LRS, skills platforms, and talent suites."
        />
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="marquee-item">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Integrations.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Integrations;
