import PropTypes from 'prop-types';

function Footer({ columns, note }) {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-grid">
          {columns.map((column) => (
            <div key={column.heading} className="footer-column">
              <h4>{column.heading}</h4>
              <ul>
                {column.links.map((link) => (
                  <li key={`${column.heading}-${link.label}`}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-note">{note}</div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  note: PropTypes.string.isRequired,
};

export default Footer;
