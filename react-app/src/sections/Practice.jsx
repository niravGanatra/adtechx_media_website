import PropTypes from 'prop-types';
import SectionHeader from '../components/common/SectionHeader.jsx';

function Practice({ topics }) {
  return (
    <section id="concept" className="practice">
      <div className="wrapper">
        <SectionHeader
          eyebrow="Practice your craft"
          title="A playground for every business capability"
          description="From leadership and marketing to product launches and DEI, AdtechX provides a growing catalog of missions crafted with industry experts. Mix and match to create the perfect training series for your teams."
        />
        <div className="practice-tags">
          {topics.map((topic) => (
            <span key={topic} className="practice-tag">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

Practice.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Practice;
