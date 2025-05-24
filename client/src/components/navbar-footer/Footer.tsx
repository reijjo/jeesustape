import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper footer-wrapper">
        <div className="footer-diiba">
          <h4>KORJAIN</h4>
          <p>logo EN</p>
        </div>
      </div>
      <div className="footer-downunder wrapper">
        <p>&copy; Repen Valinta Oy 2025. All rights reserved.</p>
        <a href="/reijjo" target="_blank" rel="noopener noreferrer">
          <p>Reijjo homepage</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
