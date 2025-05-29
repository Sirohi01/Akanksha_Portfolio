    const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
        <div className="container">
            <h2 className="section-title fade-in">Get In Touch</h2>
            
            <div className="contact-content">
            <div className="contact-info fade-in delay-1">
                <h3>Contact Information</h3>
                <div className="info-item">
                <span>Phone:</span>
                <a href="tel:+917011327294">+91 7011327294</a>
                </div>
                <div className="info-item">
                <span>Email:</span>
                <a href="mailto:sirohlakanksha492@gmail.com">sirohlakanksha492@gmail.com</a>
                </div>
                <div className="info-item">
                <span>LinkedIn:</span>
                <a 
                    href="https://www.linkedin.com/in/akankshasirohi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    linkedin.com/in/akankshasirohi
                </a>
                </div>
                <div className="info-item">
                <span>Location:</span>
                <span>Gurugram, Haryana, India</span>
                </div>
                
                <div className="social-links">
                <a href="#" className="social-icon" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                
                <a 
                    href="https://www.linkedin.com/in/akankshasirohi" 
                    className="social-icon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                
                </div>
            </div>
            
            <form className="contact-form fade-in delay-2">
                <h3>Send Me a Message</h3>
                <div className="form-group">
                <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
            </div>
        </div>
        </section>
    )
    }

    export default Contact