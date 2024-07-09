import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
export default function NavBar(){
    const [click, setClick] = useState(false); // Tracks menu click state for responsiveness
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login status
    const [username, setUsername] = useState(""); // Stores username if logged in
    const [email, setEmail] = useState(""); // Stores email (might not be used)
    const [showDropdown, setShowDropdown] = useState(false); // Tracks dropdown menu visibility (potential future use)
    // Function to handle menu button click - toggles menu visibility
    const handleClick = () => setClick(!click);

  // Function to handle user logout - removes session storage and reloads page
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);
    setEmail(''); 
    window.location.reload();
  };
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    if (storedEmail) {
      setIsLoggedIn(true);
      setUsername(storedEmail);
    }
  }, []); 

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("name");

    if (storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
    }
}, []);
    return (
        <div>
            <nav>
        <div className="nav__logo">
          <a href="/">
            StayHealthy 
            <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{fill:"#3685fb"}}>
                <title>Doctor With Stethoscope SVG icon</title>
                <g>
                    <g>
                        <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                        <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                        <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...."></path>
                    </g>
                </g>
            </svg>
          </a>
          <span>.</span>
        </div>
        <div className="nav__icon" onClick={handleClick}>
          <i className="fa fa-times fa fa-bars"></i>
        </div>

        <ul className="nav__links active">
          <li className="link">
            <a href="/">Home</a>
          </li>
          <li className="link">
            <a href="#">Appointments</a>
          </li>
          {isLoggedIn ? (
                    <>
                        <li onClick={handleDropdown} className="link welcome-user">
                            <p>
                                Welcome, {username}
                            </p>
                            {showDropdown && (
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to="/profile">Your Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/reports">Your Reports</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <Link to="/signup">
                {/* Sign Up button */}
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                {/* Login button */}
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        )}
        </ul>
    </nav>
        </div>
    )
}