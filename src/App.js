// Import necessary modules from React library
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstantConsultation from './Components/Instant Consultation/InstantConsultation';
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import Notification from './Components/Notification/Notification';
// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          <Notification />
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
