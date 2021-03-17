import Head from 'next/head'

export default function darpa() {
    return (
        <div>
            <Head>
                <title>DARPA | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Hacking drones with DARPA" />
                <meta property="og:description" content="Trailblazing swarm drone tactics and technologies to dominate the future battlefield. See how I applied my cybersecurity skills in this burgeoning field." />
                <meta property="og:image" content="../thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio/darpa" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-10 lg:px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">The Swarmin' Story</h1>
                <p className="text-2xl text-gray-300">In an era of expensive assets like the F-35, the Department of Defense needed a cheaper, more sustainable way to provide air support and superiority. DARPA took to researching cheap, expendable drones that behave as a single collective to swarm and overwhelm any foe.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../darpa-usafa-team.png" alt="DARA team photo" />
                <p className="text-2xl text-gray-300">We decided to experiment on how to tactically use and apply the concept of swarm drones in realworld scenarios. And thus, DARPA organized the Service Academies Swarm Challenge, with me on the Air Force Academy team.</p>
            </div>
            <div className="flex flex-col bg-gray-200 items-center space-y-4 pb-16 px-6 lg:px-24 text-center">
                <h1 className="text-center text-4xl pt-16 p-6 font-bold">The Challenge included:</h1>
                <li className="text-2xl">A combination of fixed-wing and rotary wing drones</li>
                <li className="text-2xl">Each Service Academy team developing their own swarm tactics and techniques and building it in code</li>
                <li className="text-2xl">A <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.youtube.com/watch?v=RZ-CKA4fUhg">capstone live-fly event</a> featuring air-to-air battles between each teams' swarms</li>
                <div className="flex flex-col lg:flex-row flex-wrap lg:space-x-6 py-6 justify-center items-center space-y-8 lg:space-y-0">
                    <img className="w-96 sm:h-96 sm:w-auto rounded-md" src="../darpa-display.png" alt="DARPA drone display" />
                    <img className="w-96 sm:h-96 sm:w-auto rounded-md" src="../darpa-jamming.jpg" alt="Jamming drones" />
                    <img className="w-96 sm:h-96 sm:w-auto rounded-md" src="../darpa-drone.jpg" alt="DARPA drone" />
                </div>
                <p className="px-6 sm:px-24 sm:py-6 text-xl text-center">My partner and I penetration tested and reverse engineered the DARPA-provided drones and experimented with various exploits against them, from Man-in-the-Middle (MITM) attacks to social engineering against our opposing teams.</p>
                <p className="px-6 sm:px-24 sm:py-6 text-xl text-center">During the live-fly exercise, we launched a series of attacks against our opposing teams. Several opposing drones suddenly started landing right where they were hovering as our drones pressed the attack. The opposing team, unaware of what was truly happening, panicked and lost any team cohesion.</p>
                <p className="px-6 sm:px-24 sm:py-6 text-xl text-center">We demonstrated that even with the latest technology we can still lose if we deprioritize cyber-security. An enemy would do anything to gain an advantage or cancel ours, and so we shouldn't limit the actions of red teams so that we can learn the most valuable lessons and be best prepared for the real world.</p>
                <p className="px-6 sm:px-24 sm:py-6 text-xl text-center">More information on the competition is available <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/news-events/2017-05-11">here.</a></p>
            </div>
            <div className="w-screen px-6 py-16 bg-white space-y-8 items-center text-center sm:text-left">
                <h1 className="text-center text-4xl font-bold">About the <br className="sm:hidden" />Defense Advanced Research Projects Agency</h1>
                <img className="w-80 sm:h-auto sm:float-left px-10 pb-6 sm:pb-0" src="../darpa-logo.jpg" alt="DARPA Logo"></img>
                <p className="text-2xl clear-none"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/">DARPA</a> is a Department of Defense agency dedicated to creating breakthrough technologies and capabilities for national security.</p>
                <p className="text-2xl clear-none">Where other organizations focus on incremental advances, DARPA strives for transformational change by making pivotal investments in emerging, leading-edge technologies.</p>
                <p className="text-2xl">DARPA also plays an invaluable role in solving problems that serve more than the Department of Defense directly, from <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/news-events/2020-05-27">securing the US semiconductor supply chain</a> to <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/work-with-us/covid-19">covid-19 detection.</a></p>
            </div>
            <div className="w-screen px-6 bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center text-center">
                <h1 className="text-4xl font-bold">What I have done <br className="sm:hidden" />and what I can do</h1>
                <h1 className="text-2xl">Feel free to dive deeper into what I've accomplished and see what I can do for you and your team.</h1>
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