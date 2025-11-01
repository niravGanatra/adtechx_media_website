import PropTypes from 'prop-types';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Tracks({ items }) {
  return (
    <section id="business" className="tracks">
      <div className="wrapper">
        <SectionHeader
          eyebrow="For business"
          title="Launch your own AdtechX experience"
          description="Configure the platform for internal academies or revenue-generating academies in a few clicks. Blend ready-to-go missions with your proprietary content, manage cohorts, and connect analytics to the systems you already use."
        />
        <div className="tracks-grid">
          {items.map((item) => (
            <article key={item.title} className="track-card">
              <div className="track-image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Tracks.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tracks;
