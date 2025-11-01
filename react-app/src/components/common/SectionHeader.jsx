import PropTypes from 'prop-types';

function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="section-header">
      {eyebrow && <p className="section-title">{eyebrow}</p>}
      {title && <h2 className="section-heading">{title}</h2>}
      {description && <p className="section-copy">{description}</p>}
    </header>
  );
}

SectionHeader.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

SectionHeader.defaultProps = {
  eyebrow: undefined,
  title: undefined,
  description: undefined,
};

export default SectionHeader;
