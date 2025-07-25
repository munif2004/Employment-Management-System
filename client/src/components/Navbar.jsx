import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo and Branding */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <div className="logo-container">
            <svg className="logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L18 9v6l-6 3.5-6-3.5V9l6-4.5zM12 16l6-3.5V9l-6 3.5L6 9v3.5l6 3.5z" 
                    fill="currentColor"/>
            </svg>
            <span className="brand-name">EMS</span>
          </div>
          <span className="brand-subtitle">Employee Management System</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/addEmp" className="nav-link" onClick={closeMobileMenu}>Add Employee</Link>
          <Link to="/departments" className="nav-link" onClick={closeMobileMenu}>Departments</Link>
          <Link to="/reports" className="nav-link" onClick={closeMobileMenu}>Reports</Link>
          <Link to="/settings" className="nav-link" onClick={closeMobileMenu}>Settings</Link>
          
          {/* Mobile-only user profile */}
          <div className="mobile-user-profile">
            <div className="user-avatar">
              <span>AD</span>
            </div>
            <span className="user-name">Admin</span>
          </div>
        </div>

        {/* Desktop User Profile */}
        <div className="user-profile">
          <div className="user-avatar">
            <span>AD</span>
          </div>
          <span className="user-name">Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;