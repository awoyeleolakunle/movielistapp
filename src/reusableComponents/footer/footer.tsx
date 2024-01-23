import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
    <div>
      <a className="quickLink" href="#">
        Questions? Contact us.
      </a>
      <br />
      <br />
      <br />
      <ul className="footer">
        <li>
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </li>
        <li>
          <a href="">Help Center</a>
          <a href="">Jobs</a>
          <a href="">Cookies Preference</a>
          <a href="">Legal Notice</a>
        </li>
        <li>
          <a href="">Account</a>
          <a href="">Ways to Watch</a>
          <a href="">Corporate Information</a>
          <a href="">Only on Bained</a>
        </li>
        <li style={{ lineHeight: 1.4 }}>
          <a href="">Media Center</a>
          <a href="">Terms of Use</a>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <br />
      <br />
    </div>
  );
};

export default Footer;
