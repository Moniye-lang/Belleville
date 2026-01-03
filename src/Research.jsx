// Research.jsx
import React, { useEffect, useState } from 'react';
import './Research.css';
import { useLocation } from 'react-router-dom';

const Research = () => {
  const [selectedType, setSelectedType] = useState('all');
  const location = useLocation();

  const types = [
    { id: 'all', label: 'All Research' },
    { id: 'papers', label: 'Research Papers' },
    { id: 'studies', label: 'Clinical Studies' }, 
    { id: 'videos', label: 'Videos' } 
  ];


  const researchItems = [
    {
      type: 'papers',
      title: 'Advanced Periodontal Therapy Outcomes',
      authors: 'Dr. Smith, Dr. Johnson, Dr. Lee',
      date: '2024',
      abstract: 'A comprehensive study on the effectiveness of modern periodontal therapy techniques...',
      downloadLink: '#'
    },
    {
      type: 'videos',
      title: 'Digital Dentistry: Perfect Oral Care Routine',
      presenter: 'Dr. Sarah Wilson',
      description: 'Exploring the latest advances in digital dental technology and their clinical applications.',
      videoUrl: 'https://www.youtube.com/embed/5J89gCDt_rk?si=ntwhE9nLaggGs9_l',
    },
    {
      type: 'studies',
      title: 'Implant Success Rates in Diabetic Patients',
      researchers: 'Belleville Research Team',
      participants: '500 patients',
      duration: '2 years',
      findings: 'Successful implant integration rates of 95% in well-controlled diabetic patients...'
    },
    {
      type: 'papers',
      title: 'Pediatric Dental Anxiety Management',
      authors: 'Dr. Martinez, Dr. Chen',
      date: '2023',
      abstract: 'Innovative approaches to reducing dental anxiety in pediatric patients through behavioral techniques...',
      downloadLink: '#'
    },
    {
      type: 'videos',
      title: 'Minimally Invasive Oral Surgery Techniques',
      presenter: 'Dr. Michael Brown',
      description: 'Latest techniques in minimally invasive oral surgery for improved patient outcomes.',
      videoUrl: 'https://www.youtube.com/embed/qTOHxal-At0?si=FLhZqe0IaJvaBFR1',
    }
  ];

  const filteredItems = selectedType === 'all' 
    ? researchItems 
    : researchItems.filter(item => item.type === selectedType);

  // Enable scroll to section from Navbar
  useEffect(() => {
    if (location.state && location.state.sectionId) {
      const section = location.state.sectionId;
      setSelectedType(section);

      setTimeout(() => {
        const targetElement = document.getElementById('research');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);


  return (
    <div className="research-section" id='research'>
      <div className="research-header">
        <h1>Research & Innovation</h1>
        <p>Stay updated with the latest research findings and innovations in dental science.</p>
      </div>

      <div className="research-filters">
        {types.map((type) => (
          <button
            key={type.id}
            className={`filter-btn ${selectedType === type.id ? 'active' : ''}`}
            onClick={() => setSelectedType(type.id)}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="research-content">
        {filteredItems.map((item, index) => {
          if (item.type === 'papers') {
            return (
              <div key={index} className={`research-item ${item.type}`}>
                <div className="paper-card">
                  <div className="paper-icon">📄</div>
                  <div className="paper-content">
                    <h3>{item.title}</h3>
                    <p className="authors">By: {item.authors}</p>
                    <p className="date">Published: {item.date}</p>
                    <p className="abstract">{item.abstract}</p>
                    <button className="download-btn">Download PDF</button>
                  </div>
                </div>
              </div>
            );
          }
          if (item.type === 'videos') {
            return (
              <div key={index} className={`research-item ${item.type}`}>
                <div className="video-card">
                  <div className="video-thumbnail">
                    <iframe
                      width="560"
                      height="315"
                      src={item.videoUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="video-content">
                    <h3>{item.title}</h3>
                    <p className="presenter">Presenter: {item.presenter}</p>
                    <p className="description">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          }
          if (item.type === 'studies') {
            return (
              <div key={index} className={`research-item ${item.type}`}>
                <div className="study-card">
                  <div className="study-icon">🔬</div>
                  <div className="study-content">
                    <h3>{item.title}</h3>
                    <div className="study-details">
                      <p><strong>Researchers:</strong> {item.researchers}</p>
                      <p><strong>Participants:</strong> {item.participants}</p>
                      <p><strong>Duration:</strong> {item.duration}</p>
                      <p><strong>Findings:</strong> {item.findings}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Research;
