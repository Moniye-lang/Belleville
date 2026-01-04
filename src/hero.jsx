// Hero.jsx
import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import './hero.css';

export default function Hero() {
    const navigate = useNavigate();
    
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    // Navigate to Contact page
    const goToContact = () => {
        navigate('/contact');
    };

    // Navigate to Queries page
    const goToQueries = () => {
        navigate('/queries');
    };

    return (
        <div className="main">
            <div className="sub">
                {/* Text Section */}
                <div className="text1">
                    <div className="headt">Want to improve your dental health?</div>
                    <div className="maint">
                        Welcome to Belleville Dental <br /> <span>– Your smile starts here.</span>
                    </div>
                    <div className="foot">
                        At Belleville Dental, we provide gentle, professional care to help you achieve a healthier, brighter smile. Your comfort and confidence are our priority.
                    </div>
                    {/* Navigation Buttons */}
                    <div className="button-group">
                        <button className="but" onClick={goToContact}>Book Now</button>
                        <button className="but" onClick={goToQueries}>Queries?</button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="image">
                    <img src="/dental-hygiene-concept-with-tools.jpg" alt="Dental Hygiene" />
                </div>
            </div>
        </div>
    );
}
