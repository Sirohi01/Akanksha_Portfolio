    import { useState, useEffect } from 'react'
    import { Link } from 'react-scroll'
    
    const Header = ({ isScrolled }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('home')

    const handleSetActive = (to) => {
        setActiveLink(to)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const downloadResume = () => {
    
        const resumeUrl = "../assets/Resume_Akanksha_Sirohi_.pdf"
        const link = document.createElement('a')
        link.href = resumeUrl
        link.download = 'Resume_Akanksha_Sirohi.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    useEffect(() => {
        if (isMenuOpen) {
        document.body.style.overflow = 'hidden'
        } else {
        document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
            <div className="header-inner">
            <div className="logo">
                <span>A</span>kanksha Sirohi
            </div>
            
            <button 
                className={`hamburger ${isMenuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                <li>
                    <Link 
                    to="home" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={activeLink === 'home' ? 'active' : ''}
                    onSetActive={handleSetActive}
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={activeLink === 'about' ? 'active' : ''}
                    onSetActive={handleSetActive}
                    >
                    About
                    </Link>
                </li>
                <li>
                    <Link 
                    to="expertise" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={activeLink === 'expertise' ? 'active' : ''}
                    onSetActive={handleSetActive}
                    >
                    Expertise
                    </Link>
                </li>
                <li>
                    <Link 
                    to="experience" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={activeLink === 'experience' ? 'active' : ''}
                    onSetActive={handleSetActive}
                    >
                    Experience
                    </Link>
                </li>
                <li>
                    <Link 
                    to="education" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={activeLink === 'education' ? 'active' : ''}
                    onSetActive={handleSetActive}
                    >
                    Education
                    </Link>
                </li>
                <li>
                    <Link 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className={activeLink === 'contact' ? 'active' : ''}
                    onSetActive={handleSetActive}
                    >
                    Contact
                    </Link>
                </li>
                <li className="resume-download">
                    <button onClick={downloadResume} className="btn-resume">
                    <i className="fas fa-download"></i> Resume
                    </button>
                </li>
                </ul>
            </nav>
            </div>
        </div>
        </header>
    )
    }

    export default Header