// Description: Main application component that sets up routing and state management for the app.
import { useState } from 'react';
// React Router for routing
import { Routes, Route } from 'react-router-dom';
// Importing components for different sections of the app
import About from "./about";
import Contact from "./contact";
import Foot from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import PatientEducation from "./PatientEducation";
import Prod from "./products";
import ProEducation from "./proEd";
import Queries from "./Queries";
import Research from "./Research";
// Main App component that includes routing and state management
export default function App() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [patientCategory, setPatientCategory] = useState('general');

    return (
        <div>
            {/* Setting up the Navbar with state management for selected card and patient category */}
            <Navbar selectCard={setSelectedCard} selectPatientCategory={setPatientCategory} />
            {/* Setting up the routes for the application */}
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <ProEducation selectedCard={selectedCard} />
                        <PatientEducation selectedCategory={patientCategory} />
                        <Research />
                        <Prod />
                        <Foot />
                    </>
                } />
                
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/queries" element={<Queries />} />
            </Routes>
        </div>
    );
}