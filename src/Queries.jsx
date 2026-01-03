import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Queries.css';

const Queries = () => {
  // State for managing which FAQ item is open
  const [openFAQ, setOpenFAQ] = useState(null);
  
  // State for managing feedback form data
  const [feedbackForm, setFeedbackForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    rating: '5'
  });
  //BACK TO WEBPAGE NAVIGATION
  const navigate = useNavigate();

  const goBack = () => {
      navigate('/');
  };

  // FAQ data structure
  const faqs = [
    {
      question: "What should I expect during my first dental visit?",
      answer: "During your first visit, we'll conduct a comprehensive examination including X-rays, discuss your dental history, and create a personalized treatment plan. We'll also answer any questions you may have about your oral health."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting every 6 months for routine cleanings and check-ups. However, some patients may need more frequent visits based on their individual oral health needs."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our staff can help verify your benefits and explain your coverage before treatment begins."
    },
    {
      question: "What payment options do you offer?",
      answer: "We accept cash, credit cards, and offer payment plans for larger treatments. We also work with CareCredit for financing options."
    },
    {
      question: "How do I handle a dental emergency?",
      answer: "For dental emergencies, call our emergency line immediately at (555) 123-9999. For severe pain, swelling, or trauma, don't wait - contact us right away."
    }
  ];

  // Toggle FAQ item open/closed
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Handle feedback form submission
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedbackForm);
    alert('Thank you for your feedback! We appreciate your input.');
    // Reset form after submission
    setFeedbackForm({
      name: '', email: '', subject: '', message: '', rating: '5'
    });
  };

  return (
    <div className="queries-section">
      {/* Section header */}
      <div className="section-header">
        <h1>Queries & Support</h1>
        <p>Find answers to common questions or get in touch with our support team.</p>
      </div>

      <div className="queries-content">
        {/* Frequently Asked Questions section */}
        <div className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                {/* FAQ question button */}
                <button
                  className={`faq-question ${openFAQ === index ? 'active' : ''}`}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span className="faq-arrow">{openFAQ === index ? '−' : '+'}</span>
                </button>
                
                {/* FAQ answer (shown when open) */}
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support options section */}
        <div className="support-section">
          <h2>Get Support</h2>
          <div className="support-options">
            {/* Live chat support option */}
            <div className="support-option">
              <h4>💬 Live Chat</h4>
              <p>Chat with our support team</p>
              <p>Available: Mon-Fri 9AM-5PM</p>
              <button className="chat-btn">Start Chat</button>
            </div>
          
            {/* Phone support option */}
            <div className="support-option">
              <h4>📞 Phone Support</h4>
              <p>Call us directly</p>
              <p>(555) 123-4567</p>
            </div>
            
            {/* Email support option */}
            <div className="support-option">
              <h4>📧 Email Support</h4>
              <p>Send us an email</p>
              <p>support@bellevilledental.com</p>
            </div>
          </div>
        </div>

        {/* Feedback form section */}
        <div className="feedback-section">
          <h2>Send Us Feedback</h2>
          <form className="feedback-form" onSubmit={handleFeedbackSubmit}>
            {/* Name and email row */}
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
                value={feedbackForm.name}
                onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={feedbackForm.email}
                onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                required
              />
            </div>
            
            {/* Subject and rating row */}
            <div className="form-row">
              <input
                type="text"
                placeholder="Subject"
                value={feedbackForm.subject}
                onChange={(e) => setFeedbackForm({...feedbackForm, subject: e.target.value})}
                required
              />
              <select
                value={feedbackForm.rating}
                onChange={(e) => setFeedbackForm({...feedbackForm, rating: e.target.value})}
              >
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Good</option>
                <option value="3">⭐⭐⭐ Average</option>
                <option value="2">⭐⭐ Poor</option>
                <option value="1">⭐ Very Poor</option>
              </select>
            </div>
            
            {/* Message textarea */}
            <textarea
              placeholder="Your Message"
              rows={5}
              value={feedbackForm.message}
              onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
              required
            ></textarea>
            
            {/* Submit button */}
            <button type="submit" className="submit-btn">Send Feedback</button>
          </form>
        </div>
      </div>
      <button onClick={goBack} className="back-btn">Back to Webpage</button>
    </div>
  );
};

export default Queries;
