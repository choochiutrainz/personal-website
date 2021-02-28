import Head from 'next/head'

const darpa = () => {
    return (
        <div>
            <Head>
                <title>DARPA - Wesley "Chewy" Chiu</title>
                <meta property="og:site_name" content={`Wesley "Chewy" Chiu`} />
                <meta property="og:title" content={`DARPA - Wesley "Chewy" Chiu`} />
                <meta property="og:description" content="Trailblazing swarm drone tactics and technologies to dominate the future battlefield. See how I applied by cybersecurity skills in this burgeoning field." />
                <meta property="og:image" content="" />
                <meta property="og:url" content="https://choochiutrain.com/darpa" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">The Swarmin' Story</h1>
                <p className="text-2xl text-gray-300">The average F-22 Raptor costs $150M, the F-35 Lightning II $100M, and the Ford Class Supercarrier $13B. All far too high a price to pay if lost under any circumstance. The US Armed Forces needed a cheaper, more sustainable way to support ground troops and project power. DARPA took inspiration from the honey bee: cheap, expendable drones that behave as a single collective to swarm and overwhelm any objective.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../darpa-usafa-team.png" alt="DARA team photo" />
                <p className="text-2xl text-gray-300">There's plenty of research behind making swarms of drones fundamentally usable and demo-able, but we've yet to experiment on how to tactically use and apply them to scenarios. And thus, DARPA organized the Service Academies Swarm Challenge, with us as the US Air Force Academy team.</p>
            </div>
            <div className="flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16">
                <h1 className="text-center w-screen text-4xl pt-16 p-6 font-bold">The DARPA Swarm Drone Challenge included:</h1>
                <p className="text-2xl">A combination of fixed-wing and rotary wing drones</p>
                <p className="text-2xl">Each Service Academy team developing their own swarm tactics and techniques and building it in code</p>
                <p className="text-2xl">A <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.youtube.com/watch?v=RZ-CKA4fUhg">capstone live-fly event</a> featuring air-to-air battles between each teams' swarms</p>
                <div className="flex flex-row space-x-6 py-6 justify-center items-center">
                    <img className="max-h-64 rounded-md" src="../darpa-display.png" alt="DARPA drone display" />
                    <img className="max-h-64 rounded-md" src="../darpa-jamming.jpg" alt="Jamming drones" />
                    <img className="max-h-64 rounded-md" src="../darpa-drone.jpg" alt="DARPA drone" />
                </div>
                <p className="px-24 py-6 text-xl text-center">My partner, 1st Lt Kyle Hubert, and I were studying for our Computer and Network Security degrees at the time, and we took issue with the competition moderators' decision to waive security requirements and ban use of cyber techniques in the event. So as we helped develop the team develop our strategy and code the drone behaviors, we also penetration tested and reverse engineered the drones and experimented with various exploits against them, from Man-in-the-Middle (MITM) attacks to social engineering against our opposing teams.</p>
                <p className="px-24 py-6 text-xl text-center">During the live-fly exercise at Camp Roberts, CA, we sneakily set up one of our antennas and launched our attacks against our opposing teams. Within seconds, several opposing drones suddenly started landing right where they were hovering as our drones pressed the attack. The opposing team, unaware of what was truly happening, went into a panic and lost their team cohesion.</p>
                <p className="px-24 py-6 text-xl text-center">We demonstrated that even with the latest and greatest technology in hand, we could still lose a fight if we deprioritize security. In a contested environment, an opposing force would do anything to gain an advantage or nullify ours, and so we shouldn't limit the actions of red teams so that we can learn the most valuable lessons and be best prepared for the real world. As a result, DARPA allowed cybersecurity actions and hardening on its drones in the 2nd year of the Swarm Challenge. We did get some real stern admonishments from our leadership, though. But we still graduated, and we got some good laughs. Worth it.</p>
                <p className="px-24 py-6 text-xl text-center">If you're interested, you can read more about the competition <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/news-events/2017-05-11">here.</a></p>
            </div>
            <div className="py-16 bg-white space-y-8">
                <h1 className="text-center w-screen text-4xl font-bold">About the Defense Advanced Research Projects Agency</h1>
                <img className="h-52 float-left px-10" src="../darpa-logo.jpg" alt="DARPA Logo"></img>
                <p className="text-2xl clear-none"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/">DARPA</a> is a Department of Defense (DoD) agency dedicated to creating breakthrough technologies and capabilities for national security.</p>
                <p className="text-2xl clear-none">Where other organizations focus on incremental advances, DARPA explicitly strives for transformational change by making pivotal investments in emerging, leading-edge technologies.</p>
                <p className="text-2xl">DARPA also plays an invaluable role in solving problems that serve more than the Department of Defense directly, from <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/news-events/2020-05-27">securing the US semiconductor supply chain</a> to <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.darpa.mil/work-with-us/covid-19">covid-19 detection.</a></p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center">
                <h1 className="text-4xl font-bold">{`What I've done & what I can do`}</h1>
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

export default darpa