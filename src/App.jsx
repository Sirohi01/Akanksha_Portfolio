    import { useState, useEffect } from 'react'
    import Header from './components/Header'
    import Hero from './components/Hero'
    import About from './components/About'
    import Expertise from './components/Expertise'
    import Experience from './components/Experience'
    import Education from './components/Education'
    import Contact from './components/Contact'
    import Footer from './components/Footer'
    import './App.css'

    function App() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="app">
        <Header isScrolled={isScrolled} />
        <main>
            <Hero />
            <About />
            <Expertise />
            <Experience />
            <Education />
            <Contact />
        </main>
        <Footer />
        </div>
    )
    }

    export default App