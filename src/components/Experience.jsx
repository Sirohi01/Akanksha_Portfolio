    const Experience = () => {
    const experiences = [
        {
        company: 'Fotografik Enterprises Pvt. Ltd.',
        position: 'Photoshop Artist',
        duration: 'Oct 2021 - Oct 2024',
        responsibilities: [
            'Generate clear ideas, concepts, and designs of creative assets from beginning to end.',
            'Translate information about the client\'s business and customers into designs that are visually enticing, easy to understand, and emotionally impactful.',
            'Photo editing, color correction, photo enhance, exposure effect, face retouch, background editing.'
        ]
        },
        {
        company: 'Ahuja Media',
        position: 'Digital Marketing Trainee',
        duration: 'Feb 2024 – April 2024',
        responsibilities: [
            'Performing market analysis and research on competition.',
            'Collecting quantitative and qualitative data from marketing campaigns.',
            'Planning and monitoring the ongoing company presence on social media.',
            'Launching optimized online advertisements to increase company and brand awareness.',
            'Collaborate with designers to improve user experience.'
        ]
        },
        {
        company: 'Burlington Connection',
        position: 'Designer/Merchandiser',
        duration: 'Jan 2020 – April 2020',
        responsibilities: [
            'Worked on home furnishings, apparels and merchandising, Stoles & scarves.',
            'Learned about fabrics, embellishments.',
            'Worked on theme based design collections for graduation project.'
        ]
        }
    ]

    return (
        <section id="experience" className="section experience-section">
        <div className="container">
            <h2 className="section-title fade-in">Work Experience</h2>
            
            <div className="timeline fade-in delay-1">
            {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">{exp.duration}</div>
                <div className="timeline-content">
                    <h3>{exp.position}</h3>
                    <h4>{exp.company}</h4>
                    <ul>
                    {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                    ))}
                    </ul>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    )
    }

    export default Experience