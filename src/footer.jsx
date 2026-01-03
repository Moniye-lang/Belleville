import React, { useState, useEffect } from "react";
import './footer.css';
import { Youtube, Facebook, Twitter, Instagram } from "lucide-react";

export default function Foot() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setError(null);
            },
            (err) => {
                setError(err.message);
                setLocation(null);
            }
        );
    }, []); // Runs automatically on page load
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const formattedDate = currentTime.toLocaleDateString();

    return (
        <div className="footer-container">
            <div className="firstsec">
                <div className="subfirst">
                    <div>Caring for your smile every day<br /> building confidence with every visit.</div>
                    <div>
                        <input type="email" placeholder="Enter Email" />
                        <span><button className="h">Get Started</button></span>
                    </div>
                    <div className="post-text">
                        Belleville Dental is dedicated to providing personalized, <br />
                        high-quality dental care in a warm and welcoming environment. <br />
                        Whether you need a routine checkup or advanced treatment, <br />
                        our team is here to support your oral health journey with <br />
                        compassion and professionalism.
                    </div>
                </div>
            </div>

            <div>
                <div className="logo-cont">
                    <div className="footer-logo">
                        <img src="Logo-4.png" alt="" className="foot-logo" />
                        <span className="name">BELLEVILLE</span>
                    </div>
                </div>

                <div className="icons">
                    <div className="icon"><Youtube className="i" /></div>
                    <div className="icon"><Twitter className="i" /></div>
                    <div className="icon"><Instagram className="i" /></div>
                    <div className="icon"><Facebook className="i" /></div>
                </div>

                <hr />
                <p className="cr">All rights reserved &copy; Belleville 2025</p>
            </div>

            {/* Scrolling Location Bar */}
            {location && (
                <div className="loc">
                    <span className="childloc">
                        Latitude: {location.latitude}, Longitude: {location.longitude} | {formattedDate} | {formattedTime}
                    </span>
                </div>
            )}

            {error && (
                <div className="loc">
                    <span className="childloc">
                        Error: {error} | {formattedDate} {formattedTime}
                    </span>
                </div>
            )}
        </div>
    );
}
