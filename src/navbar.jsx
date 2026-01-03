// Navbar.jsx
import './navbar.css';
// This file contains the Navbar component for the Belleville application
// It includes links to various sections, a dropdown menu for professional and patient education, and a counter for user visits.
// The Navbar is responsive and includes a hamburger menu for mobile view.
import { User, BadgeHelp, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// The Navbar component is designed to provide navigation links and dropdowns for professional education, patient education, and research sections.
export default function Navbar({ selectCard, selectPatientCategory }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [visitCount, setVisitCount] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    // useNavigate hook from react-router-dom for navigation
    // This hook allows us to programmatically navigate to different routes in the application.
    const navigate = useNavigate();
    // The useNavigate hook is used to navigate to different sections of the application when links are clicked.
    const handleLearnMore = () => {
        navigate("/about");
        setMenuOpen(false);
    };
    // The handleLearnMore function navigates to the About page when the "Learn More" button is clicked.
    const toggleDropdown = (menu) => {
        setOpenDropdown(prev => (prev === menu ? null : menu));
    };
    // The toggleDropdown function toggles the visibility of the dropdown menu for professional and patient education sections.
    // It checks if the clicked menu is already open; if so, it closes it,
    const handleLinkClick = () => {
        setMenuOpen(false);
    };
    // and if not, it opens the clicked menu.
    // The handleLinkClick function is called when a link is clicked, closing the menu.
    const handleProEdLink = (cardIndex, targetId) => {
        selectCard({ cardIndex, targetId });
        handleLinkClick();
    };

    // ✅ Updated: Scroll to Patient Education and select the correct category
    const handleScrollToPatientEducation = (sectionId, category) => {
        selectPatientCategory(category);
        setMenuOpen(false);

        setTimeout(() => {
            const targetElement = document.getElementById(sectionId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
    // The handleScrollToPatientEducation function scrolls to the Patient Education section and selects the appropriate category.
    useEffect(() => {
        const currentCount = localStorage.getItem("visitCount");
        setVisitCount(currentCount ? parseInt(currentCount, 10) : 0);

        if (!localStorage.getItem("hasCounted")) {
            const newCount = currentCount ? parseInt(currentCount, 10) + 1 : 1;
            setVisitCount(newCount);
            localStorage.setItem("visitCount", newCount);
            localStorage.setItem("hasCounted", "true");
        }
    }, []);
    // The useEffect hook initializes the visit count from localStorage and increments it if the user hasn't counted yet.
    useEffect(() => {
        const clearFlag = () => {
            localStorage.removeItem("hasCounted");
        };
        window.addEventListener("beforeunload", clearFlag);
        return () => window.removeEventListener("beforeunload", clearFlag);
    }, []);
    // The second useEffect hook clears the "hasCounted" flag when the user leaves the page, allowing the visit count to be incremented again on the next visit.
    return (
        <div className="ovr-container">
            <div className='user-logo-container'> {/* This div contains the user counter and logo */}
                <div className='user-counter'>
                    <User size={30} strokeWidth={1.25} /> {visitCount}
                </div>
                <div className="logo">
                    <img src="Logo-4.png" alt="Logo" />
                </div>
                <div className='logo-text'>
                    <span>Belleville</span>
                </div>
            </div>
            {/* The user-logo-container div contains the user counter, logo, and logo text. */}
            <div className='hamburger-menu' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </div>
            {/* The hamburger-menu div toggles the menu open/close state when clicked. */}
            <div className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
                <div className="exit-btn-container">
                    <button className="exit-btn" onClick={() => setMenuOpen(false)}>
                        <X size={30} />
                    </button>
                </div>
                <ul>
                    {/* The ul element contains the navigation links and dropdown menus. */}
                    <li className="nav-item">
                        <div className="nav-label">
                            <a href="#professional-education" onClick={() => handleProEdLink(0, 'professional-education')}>Professional education</a>
                            <button onClick={() => toggleDropdown('pro')} className="icon-btn">
                                {openDropdown === 'pro' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                        </div>
                        {/* The nav-label div contains the link to Professional Education and a button to toggle the dropdown. */}
                        {/* The button toggles the dropdown menu for professional education. */}
                        {/* The dropdown menu for professional education contains links to various resources like courses, documents, faculty resources, etc. */}
                        {openDropdown === 'pro' && (
                            <ul className="dropdown">
                                <li><a onClick={() => handleProEdLink(1, 'related-courses')}>Related Courses</a></li>
                                <li><a onClick={() => handleProEdLink(2, 'help-documents')}>Help Documents</a></li>
                                <li><a onClick={() => handleProEdLink(3, 'faculty-resources')}>Faculty Resources</a></li>
                                <li><a onClick={() => handleProEdLink(4, 'student-resources')}>Student Resources</a></li>
                                <li><a onClick={() => handleProEdLink(5, 'case-studies')}>Case Studies</a></li>
                            </ul>
                        )}
                    </li>
                        {/* The dropdown menu for patient education contains links to general information and common sicknesses. */}
                    <li className="nav-item">
                        <div className="nav-label">
                            <a href="#patient-education" onClick={handleLinkClick}>Patient education</a>
                            <button onClick={() => toggleDropdown('pat')} className="icon-btn">
                                {openDropdown === 'pat' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                        </div>
                        {openDropdown === 'pat' && (
                            <ul className="dropdown">
                                <li><a onClick={() => handleScrollToPatientEducation('patient-education', 'general')}>General Information</a></li>
                                <li><a onClick={() => handleScrollToPatientEducation('patient-education', 'sicknesses')}>Common Sicknesses</a></li>
                            </ul>
                        )}
                    </li>
                        {/* The dropdown menu for research contains links to latest research, documents, and media. */}
                    <li className="nav-item">
                        <div className="nav-label">
                            <a href="#research" onClick={handleLinkClick}>Research</a>
                            <button onClick={() => toggleDropdown('research')} className="icon-btn">
                                {openDropdown === 'research' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </button>
                        </div>
                        {openDropdown === 'research' && (
                            <ul className="dropdown">
                                <li><a onClick={() => navigate('/', { state: { sectionId: 'papers' } })}>Latest Research</a></li> {/* now links to Research Papers */}
                                <li><a onClick={() => navigate('/', { state: { sectionId: 'studies' } })}>Documents</a></li>       {/* now links to Clinical Studies */}
                                <li><a onClick={() => navigate('/', { state: { sectionId: 'videos' } })}>Media</a></li>           {/* now links to Videos */}
                            </ul>
                        )}
                    </li>
                {/* The Products link is a direct link to the Products section. */}
                    <li className="nav-item">
                        <div className="nav-label">
                            <a href="#products" onClick={handleLinkClick}>Products</a>
                        </div>
                    </li>
                </ul>
                
                {/* The call-now div contains a button that navigates to the About page when clicked. */}
                {/* The button inside the call-now div has an icon and text, and it calls the handleLearnMore function when clicked, which redirects to the About page. */}
                <div className='call-now'>
                    <button className='call-btn' onClick={handleLearnMore}>
                        <BadgeHelp size={30} strokeWidth={1.25} /> <span className='call-btn-txt'> Learn More </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
