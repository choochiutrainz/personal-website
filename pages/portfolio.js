import Head from 'next/head'

export default function portfolio() {
    return (
        <div>
            <Head>
                <title>Portfolio | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Product Manager and Software Engineer Portfolio" />
                <meta property="og:description" content="Here you'll find my most recent work. Check out what I've done and see what I can do for you.." />
                <meta property="og:image" content="thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio" />
            </Head>
            <div id="section1" className="w-screen flex flex-col justify-center items-center text-center bg-gray-200 space-y-8 px-6 py-24 lg:px-24">
                <h1 className="text-4xl font-bold">I'm always looking to solve the next big challenge.</h1>
                <p className="text-2xl">I’ve centered my career around solving compelling problems and producing real, tangible impact for the business and the end user. There is no problem that I can't tackle. Here are some of my most recent projects that showcase how we broadened the art of possible.</p>
                <div className="lg:flex flex-row justify-center items-center lg:space-x-20 space-y-8 lg:space-y-0">
                    <div className="relative transition duration-300 ease-in-out">  
                        <img className="w-96 sm:h-96 sm:w-auto bg-gray-400 rounded-md darken-img" src="wes-with-starfox-2.jpg" alt="Section 31 project" />
                        <div className="absolute inset-48 top-52 sm:inset-32 md:left-28 lg:inset-36 lg:inset-y-36 lg:inset-x-4 flex flex-col items-center space-y-3">
                        <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300">SureFire</span>
                        <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                            <a href="/portfolio/section-31">View Project</a>
                        </button>
                        </div>
                    </div>
                    <div className="relative transition duration-300 ease-in-out">
                        <img className="w-96 sm:h-96 sm:w-auto rounded-md darken-img" src="rogue-squadron.png" alt="Rogue Squadron project" />
                        <div className="absolute inset-48 top-52 sm:inset-32 md:left-28 lg:inset-36 lg:inset-y-36 lg:inset-x-4 flex flex-col items-center space-y-3">
                        <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300">Dowding</span>
                        <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                            <a href="/portfolio/rogue-squadron">View Project</a>
                        </button>
                        </div>
                    </div>
                    <div className="relative transition duration-300 ease-in-out">
                        <img className="w-96 sm:h-96 sm:w-auto rounded-md darken-img" src="zipline-team-1.png" alt="DIUx project" />
                        <div className="absolute inset-48 top-52 sm:inset-32 md:left-28 lg:inset-36 lg:inset-y-36 lg:inset-x-4 flex flex-col items-center space-y-3">
                        <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300">Zipline</span>
                        <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                            <a className="" href="/portfolio/defense-innovation-unit">View Project</a>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col bg-white justify-center items-center px-6 sm:px-24 py-24 space-y-16">
                <h1 className="text-center text-4xl font-bold">Check out some of the other projects that I have been part of.</h1>
                 <div className="lg:flex flex-row justify-center items-center lg:space-x-20 space-y-8 lg:space-y-0">
                    <div className="relative transition duration-300 ease-in-out">
                        <img className="w-96 sm:h-96 sm:w-auto rounded-md transition duration-300 ease-in-out darken-img" src="streetcode-team-1.png" alt="Section 31 project" />
                        <div className="absolute inset-10 top-52 sm:inset-32 md:left-32 lg:inset-36 lg:inset-y-32 lg:inset-x-4 flex flex-col items-center space-y-3">
                            <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300 text-center">Streetcode Academy</span>
                            <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                                <a href="/portfolio/streetcode-academy">View Project</a>
                            </button>
                        </div>
                    </div>
                    <div className="relative transition duration-300 ease-in-out">
                        <img className="w-96 sm:h-96 sm:w-auto rounded-md transition duration-300 darken-img" src="wes-holding-uas.jpg" alt="DARPA Swarm Drone Challenge" />
                        <div className="absolute inset-10 top-48 sm:inset-24 md:inset-24 md:left-24 lg:inset-36 lg:inset-y-32 lg:inset-x-4 flex flex-col items-center space-y-3">
                            <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300 text-center">DARPA Swarm Drone Challenge</span>
                            <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                                <a href="/portfolio/darpa">View Project</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 px-6 py-10 justify-center items-center">
                <h1 className="text-4xl font-bold">What I've done<br className="sm:hidden"/> and what I can do</h1>
                <h1 className="text-2xl text-center">Feel free to dive deeper into what I've accomplished and see what I can do for you and your team.</h1>
                <a href="/resume">
                    <button className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
                    <span className="pr-1">View My Resume</span>
                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                </a>
            </div>
        </div>
    )
}