import { Search } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          ULTRA <span className="star">★</span> VIRAL
        </div>

        <div className="nav-links">
          <a href="#">For Fans</a>
          <a href="#">For Talent</a>
          <a href="#">For Brands</a>
        </div>

        <div className="right-section">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <Search size={16} className="search-icon" />
          </div>
          <a href="#">Sign Up</a>
          <span className="divider">|</span>
          <a href="#">Login</a>
        </div>
      </div>
    </nav>
  );
}
