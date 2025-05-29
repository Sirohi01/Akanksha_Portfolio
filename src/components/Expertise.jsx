    const Expertise = () => {
    const expertiseList = [
        { name: 'Branding', icon: '🎨', level: 90 },
        { name: 'Website Design', icon: '💻', level: 85 },
        { name: 'E-Commerce Website', icon: '🛒', level: 80 },
        { name: 'SEO', icon: '🔍', level: 75 },
        { name: 'Social Media Marketing', icon: '📱', level: 85 },
        { name: 'Google Ads', icon: '📊', level: 70 },
        { name: 'Performance Marketing', icon: '📈', level: 75 },
        { name: 'Color Sense and Correction', icon: '🌈', level: 90 },
        { name: 'Print Development', icon: '🖨️', level: 80 },
        { name: 'Image Editing', icon: '🖼️', level: 95 },
        { name: 'Image Re-touch and Enhance', icon: '✨', level: 95 },
    ]

    const softwareList = [
        { name: 'Adobe Photoshop', icon: '🎨', level: 95 },
        { name: 'Canva', icon: '✏️', level: 90 },
        { name: 'Illustrator', icon: '🖋️', level: 85 },
        { name: 'Wordpress', icon: '🌐', level: 80 },
        { name: 'MS Powerpoint', icon: '📊', level: 85 },
        { name: 'MS Word', icon: '📝', level: 90 },
    ]

    return (
        <section id="expertise" className="section expertise-section">
        <div className="container">
            <h2 className="section-title fade-in">My Expertise</h2>
            
            <div className="expertise-categories fade-in delay-1">
            <h3>Skills & Expertise</h3>
            <div className="skills-grid">
                {expertiseList.map((skill, index) => (
                <div key={index} className="skill-item">
                    <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                    <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            
            <div className="expertise-categories fade-in delay-2">
            <h3>Software Proficiency</h3>
            <div className="skills-grid">
                {softwareList.map((software, index) => (
                <div key={index} className="skill-item">
                    <div className="skill-header">
                    <span className="skill-icon">{software.icon}</span>
                    <span className="skill-name">{software.name}</span>
                    <span className="skill-level">{software.level}%</span>
                    </div>
                    <div className="skill-bar">
                    <div 
                        className="skill-progress" 
                        style={{ width: `${software.level}%` }}
                    ></div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
    }

    export default Expertise