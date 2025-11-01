import PropTypes from 'prop-types';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Partner({ content }) {
  return (
    <section id="partners" className="partner">
      <div className="wrapper">
        <div className="partner-card">
          <div>
            <SectionHeader title={content.title} description={content.description} />
            <a className="button button-secondary" href={content.cta.href} target="_blank" rel="noreferrer">
              {content.cta.label}
            </a>
          </div>
          <div className="partner-logo-wrap">
            <img className="partner-logo" src={content.logo} alt="AdtechX logo" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

Partner.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    cta: PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }).isRequired,
    logo: PropTypes.string.isRequired,
  }).isRequired,
};

export default Partner;
