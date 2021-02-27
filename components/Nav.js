import Link from 'next/link'
import { useRouter } from 'next/router'

const Nav = () => {
    const router = useRouter()
    
    const getHeaderBackground = () => {
        switch (router.pathname) {
            case "/": return 'bg-home'
            case "/portfolio": return 'bg-portfolio'
            case "/passions": return 'bg-passions'
            case "/resume": return 'bg-resume'
            case "/contact": return 'bg-contact'
            case "/blog": return 'bg-blog'
            case "/portfolio/section-31": return 'bg-section-31'
            case "/portfolio/rogue-squadron": return 'bg-rogue-squadron'
            case "/portfolio/defense-innovation-unit": return 'bg-defense-innovation-unit'
            case "/portfolio/streetcode-academy": return 'bg-streetcode-academy'
            case "/portfolio/darpa": return 'bg-darpa'
            default: break
        }
    }

    const getHeaderText = () => {
        switch (router.pathname) {
            case "/":
                return <div className="absolute bottom-0">
                    <h1 className="text-5xl text-gray-100 font-bold leading-tight pb-6">Leading teams to <br/>build working software<br/>that people love.</h1>
                    <p className="text-2xl text-gray-100 font-bold leading-normal">Welcome to choochiutrain.com,<br/>the Internet home for Wesley "Chewy" Chiu.</p>
                    <a href="/contact">
                        <button className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 my-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
                            <span className="pr-1">Hire Me Today</span>
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </a>
                </div>
            case "/portfolio": return <div className="absolute bottom-0"><h1 className="text-5xl text-gray-100 font-bold leading-tight pb-6">See what you can<br/>expect from me.</h1></div>
            case "/passions": return <div className="absolute bottom-0"><h1 className="text-5xl text-gray-100 font-bold leading-tight pb-6">Check out my<br/>Passions and Hobbies.</h1></div>
            case "/resume": 
                return <div className="absolute bottom-0">
                    <h1 className="text-5xl text-gray-100 font-bold leading-tight pb-6">Learn more about<br/>My Story.</h1>
                    <a href="https://drive.google.com/file/d/1t7xzj6kOU7h9LV7isqMURVoI_PXs3Oav/view">
                        <button className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 my-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
                            <span className="pr-1">Download Resume</span>
                            <svg className="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </button>
                    </a>
                </div>
            case "/contact": return <div className="absolute bottom-0"><h1 className="text-5xl text-gray-100 font-bold leading-tight pb-6">Let's connect today!</h1></div>
            case "/blog": return <div className="absolute bottom-0"><h1 className="text-5xl text-gray-100 font-bold leading-tight pb-6">Get to know my<br/>thoughts and philosophy.</h1></div>
            case "/portfolio/section-31":
                return <div className="absolute bottom-0">
                    <h1 className="inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6"><img className="h-20 pr-4" src="../starfox-logo.png"></img>SureFire</h1>
                    <p className="text-2xl text-gray-100 font-bold leading-normal pb-6">Modernizing the US Space Force's<br/>RF Deconfliction capabilities to<br/>promote a safe space environment.</p>
                    <a className="inline flex items-center" href="https://drive.google.com/file/d/1I01UTW66S8Azc7Z0uqIlL-gfCTFxlqAc/view">
                        <button className="bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                        <span className="text-2xl text-gray-100 font-bold px-4">Watch Video</span>
                    </a>
                </div>
            case "/portfolio/rogue-squadron":
                return <div className="absolute bottom-0">
                    <h1 className="inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6"><img className="h-20 pr-4" src="../dowding-logo.png"></img>Dowding</h1>
                    <p className="text-2xl text-gray-100 font-bold leading-normal pb-6">The Department of Defense's sole team <br/>for providing drones to our troops and<br/>protecting them from drone threats.</p>
                    <a className="inline flex items-center" href={`https://www.youtube.com/watch?v=8ONrb1ddTRg&feature=emb_title`}>
                        <button className="bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                        <span className="text-2xl text-gray-100 font-bold px-4">Watch Video</span>
                    </a>
                </div>
            case "/portfolio/defense-innovation-unit":
                return <div className="absolute bottom-0">
                    <h1 className="inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6"><img className="h-20 pr-4" src="../defense-innovation-unit-logo.png"></img>Drone Medical Resupply</h1>
                    <p className="text-2xl text-gray-100 font-bold leading-normal pb-6">Using drones to deliver lifesaving blood<br/>and medical supplies to the front line.</p>
                    <a className="inline flex items-center" href="https://www.youtube.com/watch?v=FeSCEalMOL8">
                        <button className="bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                        <span className="text-2xl text-gray-100 font-bold px-4">Watch Video</span>
                    </a>
                </div>
            case "/portfolio/streetcode-academy":
                return <div className="absolute bottom-0">
                    <img className="h-20 pb-6" src="../streetcode-logo.jpg"></img>
                    <p className="text-2xl text-gray-100 font-bold leading-normal pb-6">Empowering underprivileged communities<br/>to fulfill their full potential in the tech industry.</p>
                    <a className="inline flex items-center" href="https://vimeo.com/249009796">
                        <button className="bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                        <span className="text-2xl text-gray-100 font-bold px-4">Watch Video</span>
                    </a>
                </div>
            case "/portfolio/darpa":
                return <div className="absolute bottom-0">
                    <h1 className="inline flex items-center text-5xl text-gray-100 font-bold leading-tight pb-6"><img className="h-20 pr-4" src="../swarm-challenge-logo.png"></img>DARPA Swarm Drone Challenge</h1>
                    <p className="text-2xl text-gray-100 font-bold leading-normal pb-6">Trailblazing swarm drone tactics and technologies<br/>to dominate the future battlefield.</p>
                    <a className="inline flex items-center" href="https://www.youtube.com/watch?v=ufidH_M0RqQ">
                        <button className="bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                        </button>
                        <span className="text-2xl text-gray-100 font-bold px-4">Watch Video</span>
                    </a>
                </div>
        }
    }

    return (
        <div className={`h-screen w-full bg-cover bg-center ${getHeaderBackground()}`}>
            <nav className="flex flex-wrap bg-gray-50 bg-opacity-60 items-center lg:py-0 py-2 lg:px-16 px-6">
                <a href="/">
                    <img className="lg:px-16 px-6 py-3 h-20 transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-110" src="chewy-logo.png" alt="Home" />
                </a>
                <div className="flex justify-center flex-grow">
                    <a className="px-8 py-2 uppercase font-bold leading-snug text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/portfolio">
                        Portfolio
                    </a>
                    <a className="px-8 py-2 uppercase font-bold leading-snug text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/passions">
                        Passions
                    </a>
                    <a className="px-8 py-2 uppercase font-bold leading-snug text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/resume">
                        Resume
                    </a>
                </div>
                <div className="flex pr-16 justify-end items-center">
                    <a className="px-3 py-2 uppercase font-bold leading-snug text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/contact">
                        Contact
                    </a>
                    <a href="https://github.com/choochiutrainz">
                        <img className="lg:px-2 py-3 h-15 transition duration-300 ease-in-out hover:opacity-50 transform hover:scale-110" src="github-logo.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/choochiutrain">
                        <img className="lg:px-2 py-3 h-15 transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-110" src="linkedin-logo.png" alt="LinkedIn" />
                    </a>
                </div>
            </nav>
            <div className="relative container mx-auto h-1/2">
                {getHeaderText()}
            </div>
            <div className="flex justify-center items-center">
                <a className="absolute bottom-0 pb-4" href="#section1">
                    <button className="bg-gray-300 text-indigo-600 opacity-80 rounded-full h-12 w-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-indigo-500 hover:text-gray-300 hover:opacity-75">
                        <svg className="animate-bounce w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Nav