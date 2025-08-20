import "./Footer.css";
import { FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        {/* Left Section */}
        <div className="footer-col">
          <h2 className="footer-logo">ULTRA ★ VIRAL</h2>
          <p className="footer-text w-[280px]">
            Connecting Talents with Fans and Brands.
          </p>
          <div className="footer-socials">
            <FaInstagram />
            <FaTiktok />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>

        {/* Help */}
        <div className="footer-col">
          <h3 className="footer-heading">Help</h3>
          <ul className="font-[16px]">
            <li>FAQ Fans</li>
            <li>FAQ Talents</li>
            <li>FAQ Brands</li>
          </ul>
        </div>

        {/* Terms of Service */}
        <div className="footer-col">
          <h3 className="footer-heading">Terms of Service</h3>
          <ul className="font-[16px]">
            <li>Talent Terms of Service</li>
            <li>Fan Terms of Service</li>
            <li>Brand Terms of Service</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3 className="footer-heading">Company</h3>
          <ul className="font-[16px]">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Ultra Viral. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
}
