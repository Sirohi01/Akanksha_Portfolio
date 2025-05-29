    const Education = () => {
    const educationList = [
        {
        degree: 'B.Sc (Textile Design)',
        institution: 'Northern India Institute of Fashion and Technology',
        year: '2017-2020'
        },
        {
        degree: '12th',
        institution: 'Modern Era Public School',
        year: '2016'
        },
        {
        degree: '10th',
        institution: 'Modern Era Public School',
        year: '2014'
        }
    ]

    const courses = [
        {
        title: 'Digital Marketing',
        provider: 'Skillcircle'
        },
        {
        title: 'Graphic Design Masterclass',
        provider: 'Udemy'
        }
    ]

    return (
        <section id="education" className="section education-section">
        <div className="container">
            <h2 className="section-title fade-in">Education & Courses</h2>
            
            <div className="education-content">
            <div className="education-list fade-in delay-1">
                <h3>Education</h3>
                {educationList.map((edu, index) => (
                <div key={index} className="education-item">
                    <h4>{edu.degree}</h4>
                    <p>{edu.institution}</p>
                    <span>{edu.year}</span>
                </div>
                ))}
            </div>
            
            <div className="courses-list fade-in delay-2">
                <h3>Online Courses</h3>
                {courses.map((course, index) => (
                <div key={index} className="course-item">
                    <h4>{course.title}</h4>
                    <p>{course.provider}</p>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>
    )
    }

    export default Education