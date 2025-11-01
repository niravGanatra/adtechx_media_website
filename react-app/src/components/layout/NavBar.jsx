import PropTypes from 'prop-types';

function NavBar({ links }) {
  return (
    <header>
      <div className="wrapper">
        <nav className="navbar">
          <a href="#top" className="brand">
            AdtechX
          </a>
          <div className="nav-links">
            {links.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;
