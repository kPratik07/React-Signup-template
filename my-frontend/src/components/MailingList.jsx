import { useState } from "react";
import "./MailingList.css";

export default function MailingList() {
  const [email, setEmail] = useState("");
  const [hoveredBtn, setHoveredBtn] = useState("");

  // ✅ Handle subscription
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("⚠️ Please enter your email address.");
      return;
    }

    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert(`✅ Subscribed with email: ${email}`);
    setEmail(""); // clear input after submit
  };

  return (
    <div className="mailing-container">
      <div className="mailing-wrapper">
        {/* Heading */}
        <h2 className="mailing-title">Join our Mailing List</h2>
        <p className="mailing-subtitle">
          Stay up to date with news and deals on UltraViral.com
        </p>

        {/* Email Input with Button inside */}
        <form className="mailing-form" onSubmit={handleSubmit}>
          <div className="mailing-input-wrapper">
            <input
              type="email"
              placeholder="Email Address"
              className="mailing-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="mailing-btn">
              Subscribe
            </button>
          </div>
        </form>

        {/* Bottom Options */}
        <div className="mailing-options">
          <div className="mailing-option">
            <p>Want to become a Referrer?</p>
            <div
              className="btn-wrapper"
              onMouseEnter={() => setHoveredBtn("Referrer")}
              onMouseLeave={() => setHoveredBtn("")}
            >
              <button className="referrer-btn">Join as Referrer</button>
              {hoveredBtn === "Referrer" && !email && (
                <div className="btn-tooltip">
                  ⚠️ Please enter your email before joining as Referrer
                </div>
              )}
            </div>
          </div>

          <div className="mailing-option">
            <p>Ready to become a Talent?</p>
            <div
              className="btn-wrapper"
              onMouseEnter={() => setHoveredBtn("Talent")}
              onMouseLeave={() => setHoveredBtn("")}
            >
              <button className="talent-btn">Join as Talent</button>
              {hoveredBtn === "Talent" && !email && (
                <div className="btn-tooltip">
                  ⚠️ Please enter your email before joining as Talent
                </div>
              )}
            </div>
          </div>

          <div className="mailing-option">
            <p>Join as Professional Rep?</p>
            {/* ✅ Coming soon doesn’t need tooltip */}
            <button className="coming-btn">Coming Soon</button>
          </div>
        </div>
      </div>
    </div>
  );
}
