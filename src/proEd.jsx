// ProEducation.jsx
import { ArrowBigRight, ArrowBigLeft, BookOpenText } from 'lucide-react';
import './proEd.css';
import { useState, useEffect } from 'react';

export default function ProEducation({ selectedCard }) {
    const [currentCard, setCurrentCard] = useState(0);
    const totalCards = 6;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const nextCard = () => {
        const nextIndex = (currentCard + 1) % totalCards;
        setCurrentCard(nextIndex);
    };

    const prevCard = () => {
        const prevIndex = (currentCard - 1 + totalCards) % totalCards;
        setCurrentCard(prevIndex);
    };

    const goToCard = (index) => {
        setCurrentCard(index);
    };

    useEffect(() => {
        if (selectedCard) {
            setCurrentCard(selectedCard.cardIndex);
            setTimeout(() => {
                const element = document.getElementById(selectedCard.targetId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 200);
        }
    }, [selectedCard]);

    return (
        <div className='body'>
            {currentCard === 0 && (
                <div className="hero-card card">
                    <h1 id="professional-education">Professional Education</h1>
                    <div className='hero-card-content'>
                        <div className='hero-card-text'>
                            <p>Belleville Dental Clinic is a trusted oral healthcare provider known for its high-quality services and dedication to education and professional development. Located in a busy metropolitan area, Belleville offers a full range of dental treatments including general dentistry, cosmetic procedures, orthodontics, and oral surgery. What truly distinguishes Belleville is its strong support for dental students and practitioners seeking continued growth in the field.</p>
                            <p>The clinic partners with leading dental schools to provide internship and externship programs, giving students hands-on clinical experience in a supervised environment. Here, students are exposed to modern dental technologies such as digital imaging, CAD/CAM systems, and laser equipment while learning how to deliver effective, patient-centered care. In addition, Belleville offers a mentorship program that connects students and new graduates with experienced dentists for personalized guidance and career support.</p>
                            <p>For licensed practitioners, Belleville hosts accredited continuing education (CE) workshops and seminars. These sessions, often led by specialists, focus on current advancements in areas like implantology, endodontics, dental materials, and patient management. To support flexible learning, the clinic also provides access to a digital resource library filled with webinars, journal articles, and training videos.</p>
                        </div>
                        <img src='proEd-img.jpeg' alt='Professional Education'/>
                    </div>
                </div>
            )}

            {currentCard === 1 && (
                <div className="card-1 card">
                    <h1 id="related-courses">Related Courses</h1>
                    <div className="card-1-content">
                        <h2>For Dental Students & Aspiring Dentists</h2>
                        <div className="card-row">
                            <div className="course-card">
                                <h3>Doctor of Dental Surgery (DDS) / Doctor of Dental Medicine (DMD)</h3>
                                <p>Comprehensive degree programs that prepare students to diagnose, treat, and prevent oral diseases, combining clinical training with biomedical sciences to become licensed dental practitioners.</p>
                            </div>
                            <div className="course-card">
                                <h3>Dental Anatomy and Physiology</h3>
                                <p>Studies the structure, function, and development of teeth and oral tissues, providing a foundation for understanding dental procedures and patient care.</p>
                            </div>
                            <div className="course-card">
                                <h3>Oral Pathology</h3>
                                <p>Focuses on identifying, diagnosing, and understanding diseases affecting the mouth, jaws, and related structures using clinical, radiographic, and microscopic evaluation.</p>
                            </div>
                            <div className="course-card">
                                <h3>Restorative Dentistry</h3>
                                <p>Teaches the techniques and materials used to repair and restore decayed or damaged teeth, including fillings, crowns, bridges, and other prosthetics.</p>
                            </div>
                        </div>

                        <h2>For Continuing Education & Licensed Dentists</h2>
                        <div className="card-row">
                            <div className="course-card">
                                <h3>Implant Dentistry</h3>
                                <p>Teaches techniques for surgical placement and restoration of dental implants, including case planning, bone grafting, and prosthetic design.</p>
                            </div>
                            <div className="course-card">
                                <h3>Cosmetic and Aesthetic Dentistry</h3>
                                <p>Focuses on improving the appearance of the smile using veneers, whitening, bonding, and reshaping techniques for natural-looking results.</p>
                            </div>
                            <div className="course-card">
                                <h3>Laser Dentistry Certification</h3>
                                <p>Provides training in the use of lasers for soft and hard tissue procedures, improving precision, healing, and patient comfort.</p>
                            </div>
                            <div className="course-card">
                                <h3>Digital Dentistry & CAD/CAM Technology</h3>
                                <p>Covers computer-aided design and manufacturing systems used to create crowns, bridges, and restorations with high precision and efficiency.</p>
                            </div>
                        </div>

                        <h2>For Dental Assistants & Hygienists</h2>
                        <div className="card-row">
                            <div className="course-card">
                                <h3>Dental Assisting Certificate</h3>
                                <p>Prepares students to assist dentists in clinical procedures, patient care, and office management through hands-on and theoretical training.</p>
                            </div>
                            <div className="course-card">
                                <h3>Dental Hygiene Associate</h3>
                                <p>Trains students to clean teeth, examine patients for oral diseases, and provide preventive dental care and education.</p>
                            </div>
                            <div className="course-card">
                                <h3>Radiography Certification</h3>
                                <p>Provides dental staff with the skills to safely take, process, and interpret dental X-rays while adhering to radiation safety standards.</p>
                            </div>
                            <div className="course-card">
                                <h3>Infection Control & Sterilization Techniques</h3>
                                <p>Teaches proper sterilization, disinfection, and hygiene protocols to prevent disease transmission and maintain a safe dental environment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {currentCard === 2 && (
                <div className="card-2 card">
                    <h1 id="help-documents">Help Documents</h1>
                    <div className='card-2-content'>
                        <h2>For Dental Students & Aspiring Dentists</h2>
                        <div className="help-row">
                            <div className="icon-card">
                                <BookOpenText size={100} strokeWidth={1.25} />
                            </div>
                            <div className="course-card">
                                <div className="titles-row">
                                    <h4>Licensure After Dental School: A Step-by-Step Guide for DDS/DMD Graduates</h4>
                                    <h4>Tooth by Tooth: A Visual Guide to Dental Anatomy for First-Year Students</h4>
                                    <h4>Red, White, and Ulcerated: A Color-Coded Guide to Common Oral Lesions</h4>
                                    <h4>From Caries to Crown: Step-by-Step Restorative Dentistry Workflow</h4>
                                </div>
                                <div className="links-row">
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                </div>
                            </div>
                        </div>

                        <h2>For Continuing Education & Licensed Dentists</h2>
                        <div className="help-row">
                            <div className="icon-card">
                                <BookOpenText size={100} strokeWidth={1.25} />
                            </div>
                            <div className="course-card">
                                <div className="titles-row">
                                    <h4>Implant Workflow: Single Tooth Posterior Restoration </h4>
                                    <h4>Veneers, Bonding, and Whitening: A Guide to Popular Cosmetic Procedures</h4>
                                    <h4>Er:YAG and Diode Laser Quick Reference Manual </h4>
                                    <h4>Same-Day Crown: CAD/CAM Workflow Guide </h4>
                                </div>
                                <div className="links-row">
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                </div>
                            </div>
                        </div>

                        <h2>For Dental Assistants & Hygienists</h2>
                        <div className="help-row">
                            <div className="icon-card">
                                <BookOpenText size={100} strokeWidth={1.25} />
                            </div>
                            <div className="course-card">
                                <div className="titles-row">
                                    <h4>Dental Assisting 101: Core Skills, Clinical Duties, and Certification Prep</h4>
                                    <h4>OSHA-Compliant Surface Disinfection Checklist </h4>
                                    <h4>Digital Radiography: Anterior and Posterior Positioning Reference </h4>
                                    <h4>Weekly Sterilization Quality Control Log </h4>
                                </div>
                                <div className="links-row">
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                    <a href="#">Read more...</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {currentCard === 3 && (
                <div className="card-3 card">
                    <h1 id="faculty-resources">Faculty Resources</h1>
                    <div className="card-3-content">
                        <div className="card-3-left">
                            <img src="faculty-resources.avif" alt="Faculty teaching" />
                            <button className="create-btn">Start Teaching Smarter</button>
                        </div>
                        <div className="card-3-right">
                            <h2>Teaching Tools for Educators</h2>
                            <p>Faculty resources in a dental clinic are essential tools that support effective teaching, clinical supervision, and academic development. These resources ensure that faculty members can deliver high-quality education while maintaining patient safety and care standards. Core resources include detailed course outlines, clinical grading rubrics, and competency-based evaluation forms, which help standardize instruction and student assessment. Clinical teaching guides and procedural checklists assist instructors in monitoring student performance during hands-on treatments, ensuring consistency and adherence to best practices.</p>
                            <p>By equipping faculty with clear documentation, evaluation tools, and ongoing support, dental clinics foster a structured, collaborative, and high-performing academic environment. These resources not only improve instructional quality but also contribute to the clinical and professional success of dental students.</p>
                        </div>
                    </div>
                </div>
            )}

            {currentCard === 4 && (
                <div className="card-4 card">
                    <h1 id="student-resources">Student Resources</h1>
                    <div className="card-4-content">
                        <div className="card-4-right">
                            <h2>Study Tools for Scholars</h2>
                            <p>At Belleville Dental Clinic, we are committed to supporting the academic and clinical success of our students. Our dedicated student resources are designed to complement classroom learning and hands-on training, ensuring you have access to the tools and knowledge needed for every stage of your dental education. Students can access a wide range of materials, including course outlines, study guides, procedural checklists, clinical logbooks, and anatomy reference charts. Whether you're preparing for a practical exam, reviewing radiography techniques, or refining your patient communication skills, our resources are here to guide you.</p>
                            <p>In addition to academic tools, Belleville supports student well-being with resources on time management, exam preparation, and stress reduction. Our goal is to create a supportive, empowering environment where students can grow confidently into skilled dental professionals.</p>
                        </div>

                        <div className="card-4-left">
                            <img src="student-resources.avif" alt="Faculty teaching" />
                            <button className="create-btn">Study Smarter</button>
                        </div>
                    </div>
                </div>
            )}

            {currentCard === 5 && (
                <div className="card-5 card">
                    <h1 id="case-studies">Case Studies</h1>
                    <div className="card-5-content">
                        {[{
                            title: 'Early Childhood Caries (ECC)',
                            patient: '3-year-old with visible decay on front teeth.',
                            diagnosis: 'Rampant caries due to prolonged bottle feeding with sugary liquids.',
                            treatment: 'Oral hygiene education, fluoride varnish, and restorative work under pediatric sedation.',
                            takeaway: 'Emphasize prevention and parental education early.'
                        }, {
                            title: 'Gingivitis from Poor Oral Hygiene',
                            patient: '17-year-old with red, bleeding gums.',
                            diagnosis: 'Plaque-induced gingivitis.',
                            treatment: 'Prophylaxis, oral hygiene instruction, follow-up in 4 weeks.',
                            takeaway: 'Daily brushing and flossing can fully reverse gingivitis.'
                        }, {
                            title: 'Cracked Tooth Syndrome',
                            patient: '35-year-old with sharp pain on chewing.',
                            diagnosis: 'Incomplete fracture in mandibular molar.',
                            treatment: 'Occlusal adjustment and full-coverage crown.',
                            takeaway: 'Early diagnosis prevents progression to pulp involvement.'
                        }, {
                            title: 'Dental Abscess',
                            patient: '40-year-old with facial swelling and severe tooth pain.',
                            diagnosis: 'Periapical abscess from necrotic pulp.',
                            treatment: 'Incision and drainage, root canal, antibiotics.',
                            takeaway: 'Untreated decay can lead to systemic infection risk.'
                        }, {
                            title: 'Bruxism & Tooth Wear',
                            patient: '28-year-old with jaw pain and worn incisors.',
                            diagnosis: 'Nocturnal bruxism.',
                            treatment: 'Nightguard, stress management, occlusal monitoring.',
                            takeaway: 'Bruxism often has psychological and physical triggers.'
                        }, {
                            title: 'Dental Fluorosis',
                            patient: '12-year-old with white mottled enamel.',
                            diagnosis: 'Mild fluorosis from excessive early fluoride intake.',
                            treatment: 'Cosmetic microabrasion and monitoring.',
                            takeaway: 'Balance fluoride exposure during tooth development.'
                        }, {
                            title: 'Impacted Third Molar',
                            patient: '22-year-old with pericoronitis and swollen gums near wisdom tooth.',
                            diagnosis: 'Partially impacted mandibular third molar.',
                            treatment: 'Antibiotics, surgical extraction.',
                            takeaway: 'Early evaluation of third molars is essential.'
                        }, {
                            title: 'Enamel Hypoplasia',
                            patient: '10-year-old with pitted molars and frequent cavities.',
                            diagnosis: 'Enamel hypoplasia linked to childhood illness.',
                            treatment: 'Sealants, remineralization, and restorative care.',
                            takeaway: 'Medical history can impact enamel formation.'
                        }, {
                            title: 'Periodontitis in Young Adult',
                            patient: '21-year-old with mobile teeth and bone loss.',
                            diagnosis: 'Aggressive periodontitis.',
                            treatment: 'Deep scaling, systemic antibiotics, and maintenance therapy.',
                            takeaway: 'Early-onset periodontitis requires swift intervention.'
                        }].map((study, index) => (
                            <div className="course-card5" key={index}>
                                <div className="card5-icon">
                                    <BookOpenText size={35} strokeWidth={1.25} />
                                </div>
                                <h4>{study.title}</h4>
                                <p><strong>Patient:</strong> {study.patient}</p>
                                <p><strong>Diagnosis:</strong> {study.diagnosis}</p>
                                <p><strong>Treatment:</strong> {study.treatment}</p>
                                <p><strong>Takeaway:</strong> {study.takeaway}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className='unaffected'>
                <div className="dots">
                    {[...Array(totalCards)].map((_, index) => (
                        <div
                            key={index}
                            className={currentCard === index ? "active" : ""}
                            onClick={() => goToCard(index)} ></div>
                    ))}
                </div>

                <div className='buttons'>
                    <ArrowBigLeft onClick={prevCard} />
                    <ArrowBigRight onClick={nextCard} />
                </div>
            </div>
        </div>
    );
}
