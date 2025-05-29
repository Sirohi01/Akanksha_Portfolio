    const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-content">
            <div className="footer-logo">
                <span>A</span>kanksha Sirohi
            </div>
            <p>Creative Branding & Visual Designer</p>
            
            <div className="footer-links">
                <a 
                href="https://www.linkedin.com/in/akankshasirohi" 
                target="_blank" 
                rel="noopener noreferrer"
                >
                <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:sirohlakanksha492@gmail.com">
                <i className="fas fa-envelope"></i>
                </a>
                <a href="tel:+917011327294">
                <i className="fas fa-phone"></i>
                </a>
            </div>
            
            <div className="copyright">
                &copy; {new Date().getFullYear()} Akanksha Sirohi. All rights reserved.
            </div>
            </div>
        </div>
        </footer>
    )
    }

    export default Footer