import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./SignupForm.css";

// Import images
import fanImg from "../assets/fan.svg";
import talentImg from "../assets/talent.svg";
import brandImg from "../assets/brand.svg";

const tabs = [
  { id: "fan", label: "Fan Sign Up", img: fanImg },
  { id: "talent", label: "Talent Sign Up", img: talentImg },
  { id: "brand", label: "Brand Sign Up", img: brandImg },
];

export default function SignupForm() {
  const [active, setActive] = useState("fan");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    confirmAge: false,
  });

  // toggle password
  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  // input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // password validation
  const isPasswordValid = (pwd) => {
    const minLength = pwd.length >= 8;
    const hasNumber = /\d/.test(pwd);
    const hasSpecial = /[!@#$%^&*]/.test(pwd);
    return minLength && hasNumber && hasSpecial;
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isPasswordValid(formData.password)) {
      alert(
        "Password must be at least 8 characters, include a number and a special character."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.confirmAge) {
      alert("You must confirm that you are over 12.");
      return;
    }

    // Success message based on active tab
    let message = "";
    if (active === "fan") {
      message = "✅ Fan Sign Up Successful!";
    } else if (active === "talent") {
      message = "✅ Talent Sign Up Successful!";
    } else if (active === "brand") {
      message = "✅ Brand Sign Up Successful!";
    }
    alert(message);

    // reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      password: "",
      confirmPassword: "",
      confirmAge: false,
    });
  };

  return (
    <section className="signup-section">
      <div className="signup-wrapper">
        {/* Heading */}
        <h1 className="signup-heading mt-[120px] mb-[50px]">Signup</h1>

        {/* Card with gradient border */}
        <div className="signup-card-wrapper">
          <div className="signup-card">
            {/* Tabs inside card */}
            <div className="signup-tabs">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`signup-tab ${active === t.id ? "active" : ""}`}
                >
                  <span className="icon">
                    <img
                      src={t.img}
                      alt={t.label}
                      className="w-6 h-6 object-contain"
                    />
                  </span>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="signup-grid">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  placeholder="Date of Birth  ( MM/DD/YYYY )"
                  required
                />

                {/* Password with eye toggle */}
                <div className="password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                  <span className="password-toggle" onClick={togglePassword}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>

                {/* Confirm Password with eye toggle */}
                <div className="password-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                  />
                  <span
                    className="password-toggle"
                    onClick={toggleConfirmPassword}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <label className="signup-checkbox max-w-[220px]">
                <input
                  className="input-checkbox"
                  type="checkbox"
                  name="confirmAge"
                  checked={formData.confirmAge}
                  onChange={handleChange}
                />
                <span>Confirm you are over 12</span>
              </label>

              <div className="terms-text">
                By applying to enroll as Talent on Ultra Viral, you agree to
                Ultra Viral’s <a href="#">Terms of Service</a> &{" "}
                <a href="#">Privacy Policy</a>.
              </div>

              {/* Continue button */}
              <button type="submit" className="signup-btn">
                Continue
              </button>

              {/* Login link */}
              <p className="signup-login max-w-[400px]">
                Already have an account? <Link to="/login">Log In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
