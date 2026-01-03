import React from 'react';
import './About.css'
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();

  const goBack = () => {
      navigate('/');
  };
  return (
    <div className="about-section">
      <div className="section-header">
        <h1>About Belleville Dental Clinic</h1>
        <p>Learn about our story, mission, and the dedicated team behind your dental care.</p>
      </div>

      <div className="about-content">
        <div className="story-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, Belleville Dental Clinic has been serving the community with exceptional 
            dental care for over a decade. What started as a small practice has grown into a 
            comprehensive dental facility equipped with the latest technology and staffed by 
            experienced professionals.
          </p>
          <p>
            Our commitment to excellence and patient comfort has made us a trusted name in dental 
            healthcare. We believe that everyone deserves a healthy, beautiful smile, and we work 
            tirelessly to make that vision a reality for each of our patients.
          </p>
        </div>

        <div className="mission-vision">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              To provide comprehensive, compassionate dental care using the latest technology 
              and techniques while ensuring every patient feels comfortable and valued.
            </p>
          </div>
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              To be the leading dental practice in our community, known for excellence in 
              patient care, innovative treatments, and commitment to oral health education.
            </p>
          </div>
        </div>

        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://media.istockphoto.com/id/1861987838/photo/smiling-female-doctor-looking-at-camera-in-the-medical-consultation.webp?a=1&b=1&s=612x612&w=0&k=20&c=um_usOsshRUn1qaLFF-5wyD9u_A4Wj2BhOFW2xsrkJ8=" alt="Dt. Sarah Smith" />
              <h4>Dr. Sarah Smith</h4>
              <p>Chief Dentist & Founder</p>
              <p>DDS, University of Dental Medicine</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" alt="Dr. Michael Johnson" />
              <h4>Dr. Michael Johnson</h4>
              <p>Oral Surgeon</p>
              <p>DDS, MS in Oral Surgery</p>
            </div>
            <div className="team-member">
              <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" alt="Dr. Emily Chen" />
              <h4>Dr. Emily Chen</h4>
              <p>Orthodontist</p>
              <p>DDS, MS in Orthodontics</p>
            </div>
          </div>
        </div>

        <div className="certifications">
          <h2>Certifications & Accreditations</h2>
          <div className="cert-grid">
            <div className="cert-item">
              <h4>ADA Certified</h4>
              <p>American Dental Association</p>
            </div>
            <div className="cert-item">
              <h4>State Licensed</h4>
              <p>Licensed by State Dental Board</p>
            </div>
            <div className="cert-item">
              <h4>OSHA Compliant</h4>
              <p>Safety & Health Standards</p>
            </div>
            <div className="cert-item">
              <h4>HIPAA Certified</h4>
              <p>Patient Privacy Protection</p>
            </div>
          </div>
        </div>

        <div class="contact-card">
            <h4>Contact Information</h4>
          <div class="contact-item">
            <div className="icon">📧</div>
            <span class="label">Email</span>
            <span class="info">info@bellevilledental.com</span>
          </div>
          <div class="contact-item">
            <div className="icon">📍</div>
            <span class="label">Address</span>
            <span class="info">123 Dental Street, Belleville, NY 12345</span>
          </div>
          <div class="contact-item">
            <div className="icon">📞</div>
            <span class="label">Phone</span>
            <span class="info">(555) 123-4567</span>
          </div>
        </div>
      </div>
      <button onClick={goBack} className="back-btn">Back to Webpage</button>
    </div>
  );
};

export default About;