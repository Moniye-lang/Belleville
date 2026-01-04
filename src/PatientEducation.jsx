import React, { useEffect, useState } from 'react';
import './PatientEducation.css';

const PatientEducation = ({ selectedCategory }) => {
    const [activeCategory, setActiveCategory] = useState('general');

    const categories = [
        { id: 'general', label: 'General Information' },
        { id: 'sicknesses', label: 'Common Sicknesses' }
    ];

    const educationContent = {
        general: [
            {
                title: 'Daily Oral Hygiene',
                description: 'Brush your teeth twice a day with fluoride toothpaste, floss daily, and use mouth wash to maintain optimal oral health.',
                tips: 'Brush for at least 2 minutes, replace your toothbrush every 3-4 months, and clean your tongue to reduce bacteria.'
            },
            {
                title: 'Diet and Oral Health',
                description: 'What you eat affects your teeth. Limit sugary snacks and drinks, and include plenty of fruits, vegetables, and dairy in your diet.',
                tips: 'Drink plenty of water, choose whole foods, and avoid sticky candies that can cling to teeth.'
            },
            {
                title: 'Regular Dental Visits',
                description: 'Visit your dentist every 6 months for check-ups and cleanings to prevent cavities and gum disease.',
                tips: 'Schedule appointments in advance, keep track of your dental history, and discuss any concerns with your dentist.'
            }
        ],
        sicknesses: [
            {
                title: 'Tooth Decay',
                description: 'Tooth decay happens when bacteria in your mouth produce acids that eat away at tooth enamel. It can lead to cavities if not treated.',
                symptoms: 'Sensitivity to hot or cold, pain when biting, visible holes or pits in teeth.'
            },
            {
                title: 'Gum Disease',
                description: 'Gum disease is an infection of the gums that can lead to tooth loss if not treated. It starts with gingivitis and can progress to periodontitis.',
                symptoms: 'Red, swollen gums, bleeding while brushing or flossing, persistent bad breath.'
            },
            {
                title: 'Oral Cancer',
                description: 'Oral cancer can affect any part of the mouth or throat. Early detection is crucial for successful treatment.',
                symptoms: 'Sores that do not heal, lumps in the mouth, difficulty swallowing, changes in voice.'
            }
        ]
    };

    useEffect(() => {
        if (selectedCategory) {
            setActiveCategory(selectedCategory);
        }
    }, [selectedCategory]);
    useEffect(() => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  }, []);

    return (
        <div className='patient-education' id='patient-education'>
            <div className='education-header'>
                <h1>Patient Education</h1>
                <p>Learn about oral health, common conditions, and preventive care.</p>
            </div>

            <div className='education-categories'>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            <div className='education-content'>
                <div id="general-info">
                    {activeCategory === 'general' && (
                        <>
                            <h2>General Information</h2>
                            {educationContent.general.map((item, idx) => (
                                <div key={idx} className='education-item'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    {item.tips && <p><strong>Tips:</strong> {item.tips}</p>}
                                </div>
                            ))}
                        </>
                    )}
                </div>

                <div id="common-sickness">
                    {activeCategory === 'sicknesses' && (
                        <>
                            <h2>Common Sicknesses</h2>
                            {educationContent.sicknesses.map((item, idx) => (
                                <div key={idx} className='education-item'>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    {item.symptoms && <p><strong>Symptoms:</strong> {item.symptoms}</p>}
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PatientEducation;