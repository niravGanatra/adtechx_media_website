import PropTypes from 'prop-types';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Pillars({ items }) {
  return (
    <section id="product" className="pillars">
      <div className="wrapper">
        <SectionHeader
          eyebrow="Practice. Upskill. Play. Improve."
          title="A learning arc that mirrors your business reality"
          description="Each AdtechX mission is designed as an episodic adventure. Learners practice key skills, upskill with adaptive tips, play collaboratively, and improve through actionable feedback."
        />
        <div className="pillars-grid">
          {items.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
              <div className="pillar-media">
                <img src={pillar.image} alt={pillar.title} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Pillars.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Pillars;
