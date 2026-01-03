import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './Contact.css';

const Contact = () => {
  // State for managing appointment form data
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });

  // Handle appointment form submission
  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment request:', appointmentForm);
    alert('Appointment request submitted! We will contact you shortly.');
    // Reset form after submission
    setAppointmentForm({
      name: '', email: '', phone: '', date: '', time: '', service: '', message: ''
    });
  };
  //BACK TO WEBPAGE NAVIGATION
  const navigate = useNavigate();

  const goBack = () => {
      navigate('/');
  };
  return (
    <div className="contact-section">
      <div className="section2-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us to schedule an appointment or ask any questions.</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <div className="contact-details-grid">
            <div className="contact-items">
              <div className="contact-icon">📧</div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>info@bellevilledental.com</p>
                <p>appointments@bellevilledental.com</p>
              </div>
            </div>
            
            <div className="contact-items">
              <div className="contact-icon">📍</div>
              <div className="contact-text">
                <h4>Address</h4>
                <p>123 Dental Street</p>
                <p>Belleville, NY 12345</p>
              </div>
            </div>
            
            <div className="contact-items">
              <div className="contact-icon">📞</div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>Office: (555) 123-4567</p>
                <p>Emergency: (555) 123-9999</p>
              </div>
            </div>
            
            <div className="contact-items">
              <div className="contact-icon">🕒</div>
              <div className="contact-text">
                <h4>Office Hours</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency Only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="appointment-form">
          <h2>Book an Appointment</h2>
          <form onSubmit={handleAppointmentSubmit}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Full Name"
                value={appointmentForm.name}
                onChange={(e) => setAppointmentForm({...appointmentForm, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={appointmentForm.email}
                onChange={(e) => setAppointmentForm({...appointmentForm, email: e.target.value})}
                required
              />
            </div>
            
            <div className="form-row">
              <input
                type="tel"
                placeholder="Phone Number"
                value={appointmentForm.phone}
                onChange={(e) => setAppointmentForm({...appointmentForm, phone: e.target.value})}
                required
              />
              <select
                value={appointmentForm.service}
                onChange={(e) => setAppointmentForm({...appointmentForm, service: e.target.value})}
                required
              >
                <option value="">Select Service</option>
                <option value="cleaning">Dental Cleaning</option>
                <option value="filling">Dental Filling</option>
                <option value="crown">Crown/Bridge</option>
                <option value="implant">Dental Implant</option>
                <option value="orthodontics">Orthodontics</option>
                <option value="emergency">Emergency Care</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            
            <div className="form-row">
              <input
                type="date"
                value={appointmentForm.date}
                onChange={(e) => setAppointmentForm({...appointmentForm, date: e.target.value})}
                required
              />
              <select
                value={appointmentForm.time}
                onChange={(e) => setAppointmentForm({...appointmentForm, time: e.target.value})}
                required
              >
                <option value="">Preferred Time</option>
                <option value="8:00">8:00 AM</option>
                <option value="9:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="13:00">1:00 PM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
                <option value="17:00">5:00 PM</option>
              </select>
            </div>
            
            <textarea
              placeholder="Additional Message (Optional)"
              rows={4}
              value={appointmentForm.message}
              onChange={(e) => setAppointmentForm({...appointmentForm, message: e.target.value})}
            ></textarea>
            
            <button type="submit" className="submit-btn">Book Appointment</button>
          </form>
        </div>

        <div className="map-section">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>Interactive Map</h3>
              <p>123 Dental Street, Belleville, NY 12345</p>
              <button className="directions-btn">Get Directions</button>
            </div>
          </div>
        </div>

        <div className="emergency-contact">
          <h2>Emergency Contact</h2>
          <div className="emergency-info">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-text">
              <h4>Dental Emergency?</h4>
              <p>Call our emergency line 24/7</p>
              <p className="emergency-number">(555) 123-9999</p>
            </div>
          </div>
        </div>
      </div>
      <button onClick={goBack} className="back-btn">Back to Webpage</button>
    </div>
  );
};

export default Contact;