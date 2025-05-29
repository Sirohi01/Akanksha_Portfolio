    import { Link } from 'react-scroll';
    import akanksha from "../assets/images/akanksha.jpeg";
    const Hero = () => {
    return (
        <section id="home" className="hero">
        <div className="container">
            <div className="hero-content">
            <div className="hero-text fade-in">
                <h4>Hello, I'm</h4>
                <h1>Akanksha Sirohi</h1>
                <h2>Creative Branding & Visual Designer</h2>
                <p>
                A Digital Marketing professional with experience in campaigns, strategies, 
                and graphic designing. Passionate about creating visually enticing designs 
                that translate business goals into emotional impact.
                </p>
                <div className="hero-buttons">
                <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="btn"
                >
                    Contact Me
                </Link>
                <a 
                    href="https://www.linkedin.com/in/akankshasirohi" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline"
                >
                    LinkedIn
                </a>
                </div>
            </div>
            <div className="hero-image fade-in delay-1">
                {/* Placeholder for profile image - replace with actual image */}
                <div className="profile-image">
                    <img src={akanksha} alt="akanksha" />
                </div>
                <div className="skills-badge">
                <span>Photoshop</span>
                <span>Branding</span>
                <span>Digital Marketing</span>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
    }

    export default Hero