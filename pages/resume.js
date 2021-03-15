import Head from 'next/head'

export default function resume() {
    return (
        <div>
            <Head>
                <title>Resume | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Software Engineer and Penetration Tester by trade, Designer by heart, Product Manager by choice." />
                <meta property="og:description" content="Take a deeper look at what I've accomplished and what I can bring to your team." />
                <meta property="og:image" content="thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/resume" />
            </Head>
            <div id="section1" className="lg:flex flex-col px-6 pt-12 md:px-12 md:pt-24 lg:px-32 items-start bg-s31-blue">
                <div className="flex flex-col lg:flex-row justify-center items-center md:px-12 lg:px-32 lg:space-x-20 space-y-12 lg:space-y-0">
                    <img className="w-96 sm:h-96 sm:w-auto text-gray-100 rounded-md" src="Official-Photo-20210217.jpg" alt="Portrait of me" />
                    <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                        <h1 className="text-4xl text-yellow-300 uppercase font-bold">Wesley "Chewy" Chiu</h1>
                        <p className="text-xl text-gray-300">I'm an outcome-oriented Product Manager on a mission to solve compelling problems with an inspiring team.</p>
                        <p className="text-xl text-gray-300">I have a strong background in navigating difficult prioritization problems, finding the right product to build, and balancing business priorities and user needs with technical complexity.</p>
                        <p className="text-xl text-gray-300">I passionately strive to build diverse, collaborative teams that value agile principles, a learning mindset, psychological safety, curiosity, and a culture of trust.</p>
                    </div>
                </div>
                <div className="lg:flex flex-row justify-start items-start sm:space-x-20 py-12 md:px-12 lg:px-32">
                    <div className="flex flex-col justify-start py-14 sm:py-0 text-center lg:text-left">
                        <h1 className="text-4xl text-yellow-300 uppercase font-bold pb-4">Skills</h1>
                        <div className="py-4 space-y-4">
                            <h2 className="text-2xl text-gray-100 font-bold">Product Management</h2>
                            <p className="text-xl text-gray-300">Agile Product Management</p>
                            <p className="text-xl text-gray-300">Lean Startup</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="text-2xl text-gray-100 font-bold">Software Engineering</h2>
                            <p className="text-xl text-gray-300">Extreme Programming</p>
                            <p className="text-xl text-gray-300">{`Continous Integration & Delivery`}</p>
                            <p className="text-xl text-gray-300 pb-4">Test Driven Development</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="text-2xl text-gray-100 font-bold">Cyber Security</h2>
                            <p className="text-xl text-gray-300">Penetration Testing</p>
                            <p className="text-xl text-gray-300">Software Reverse Engineering</p>
                            <p className="text-xl text-gray-300 pb-4">Social Engineering</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="text-2xl text-gray-100 font-bold">Product Design</h2>
                            <p className="text-xl text-gray-300">User-Centered Design</p>
                            <p className="text-xl text-gray-300">Rapid Prototyping</p>
                            <p className="text-xl text-gray-300">Usability Testing</p>
                            <p className="text-xl text-gray-300 pb-4">User Interview</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="text-2xl text-gray-100 font-bold">{`Languages & Frameworks`}</h2>
                            <p className="text-xl text-gray-300">Next.js / React.js</p>
                            <p className="text-xl text-gray-300">TypeScript / JavaScript</p>
                            <p className="text-xl text-gray-300">Google Apps Script</p>
                            <p className="text-xl text-gray-300">Python</p>
                            <p className="text-xl text-gray-300">C / C++</p>
                            <p className="text-xl text-gray-300 pb-4">Go</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="text-2xl text-gray-100 font-bold">Tools</h2>
                            <p className="text-xl text-gray-300">MS Visual Studio Code</p>
                            <p className="text-xl text-gray-300">Adobe Creative Suite</p>
                            <p className="text-xl text-gray-300">Figma</p>
                            <p className="text-xl text-gray-300">Kali Linux</p>
                            <p className="text-xl text-gray-300">Metasploit</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start text-center lg:text-left">
                        <h1 className="text-4xl text-yellow-300 uppercase font-bold pb-4">Experience</h1>
                        <div className="py-4 space-y-4">
                            <h2 className="text-2xl text-gray-100 font-bold">DEPUTY FLIGHT COMMANDER <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> 17th Intelligence Squadron <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Hampton, VA <span className="font-thin">||</span> Feb '20 - Present</h2>
                            <p className="text-xl text-gray-300">Looking to modernize tools and software used by the intelligence and cyber warfare communities to maximize mission effectivness and minimize productivity waste. Consulted other software development units on applying agile principles and fundamentals to their unique business problem set. Facilitated multiple workshops to use agile principles to better collaborate, experiment, and iterate on ideas and processes.</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="pt-6 text-2xl text-gray-100 font-bold">PRODUCT MANAGER <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Section 31 - U.S. Space Force <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Santa Monica, CA <span className="font-thin">||</span> May '19 - Feb '20</h2>
                            <p className="text-xl text-gray-300">Led the development and delivery of a new RF Deconfliction analysis tool to replace outdated legacy software. Replaced manual 3-day process to 3-min across multiple military branches and national intelligence agencies. Prioritized unique mission needs between a dozen units and their unique value streams. Implemented best practices to encourage product context sharing between all product teams in this new U.S. Space Force start up.</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="pt-6 text-2xl text-gray-100 font-bold">SOFTWARE ENGINEER <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Rogue Squadron - Defense Digital Service <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Mountain View, CA <span className="font-thin">||</span> Nov '18 - May '19</h2>
                            <p className="text-xl text-gray-300">Developed and deployed new airspace situational awareness tool to detect multiple types of small commercial drones realtime. Balanced unique mission and legal needs between users from NORAD, U.S. Secret Service, and FBI. First learned and applied agile principles with XP methodology. Assisted in penetration testing and hardening commercial drones for DoD use.</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="pt-6 text-2xl text-gray-100 font-bold">PRODUCT MANAGER <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Defense Innovation Unit Experimental <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Mountain View, CA <span className="font-thin">||</span> Feb '18 - Nov '18</h2>
                            <p className="text-xl text-gray-300">Led multiple multi-million dollar pathfinder projects to rapidly apply commercial innovations to DoD problems. Adapted commercial solutions to unique warfighter needs with a focus on user centered design. Enabled a community of non-traditional start ups and businesses to sign rapid prototyping contracts with military entities within 60 days on average after project initiation.</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="pt-6 text-2xl text-gray-100 font-bold">PENETRATION TESTER <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> DARPA Swarm Drone Challenge <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Colorado Springs, CO <span className="font-thin">||</span> Oct '16 - Mar '17</h2>
                            <p className="text-xl text-gray-300">Was part of the US Air Force Academy team to develop and code tactics, techniques, and behaviors for drones that act as a collective swarm. Also penetration tested the drones provided by DARPA and exploited vulnerabilities during a live-fly event to demonstrate the importance of cyber security in emerging technologies and showcase how one can use cyberwarfare to gain an tactical advantage over a more technologically advanced foe.</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="pt-6 text-2xl text-gray-100 font-bold">SOFTWARE ENGINEERING INTERN <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> National Reconnaissance Office <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Chantilly, VA <span className="font-thin">||</span> May '16 - Aug '16</h2>
                            <p className="text-xl text-gray-300">Was part of the External Cloud Office at the National Reconnaissance Office (NRO) Headquarters to introduce and integrate an AWS hosted service called the Commercial Cloud Service (C2S) to the NRO. Assisted U.S. partner intelligence agencies and international allies on transitioning to the C2S environment. Developed and deployed basic scripts to minimize time spent on migrating data, provisioning accounts, and transitioning operations to C2S.</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h2 className="pt-6 text-2xl text-gray-100 font-bold">SOFTWARE REVERSE ENGINEERING INTERN <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> National Reconnaissance Office <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> Denver, CO <span className="font-thin">||</span> May '15 - Aug '15</h2>
                            <p className="text-xl text-gray-300 pb-16">Developed and deployed apps for data aggregation and signals intelligence development that replaced manual excel process with a 80% decrease in processing time. Reverse engineered various communication technologies to enable signals collection and analysis.</p>
                        </div>
                        <div className="py-4 space-y-4">
                            <h1 className="text-4xl text-yellow-300 uppercase font-bold">{`Education & Certifications`}</h1>
                            <p className="text-xl text-gray-300"><span className="pt-6 text-xl text-gray-100 font-bold">OFFENSIVE SECURITY CERTIFIED PROFESSIONAL</span> <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> In Progress || Offensive Security</p>
                            <p className="text-xl text-gray-300"><span className="pt-6 text-xl text-gray-100 font-bold">SECURITY+</span> <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> 2018 || CompTIA</p>
                            <p className="text-xl text-gray-300"><span className="pt-6 text-xl text-gray-100 font-bold">WIRELESS ETHICAL HACKER</span> <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> 2017 || SANS Institute</p>
                            <p className="text-xl text-gray-300"><span className="pt-6 text-xl text-gray-100 font-bold">COMPUTER AND NETWORK SECURITY</span> <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> 2017 || U.S. Air Force Academy</p>
                            <p className="text-xl text-gray-300"><span className="pt-6 text-xl text-gray-100 font-bold">MANDARIN CHINESE MINOR</span> <br className="sm:hidden"/><span className="font-thin text-transparent sm:text-gray-100">||</span> 2017 || U.S. Air Force Academy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-indigo-100 w-screen flex flex-col space-y-8 py-10 justify-center items-center">
                <h1 className="text-center text-4xl font-bold">Let's build the next great success story together!</h1>
                <h1 className="text-center text-2xl px-6 sm:px-12">Now that you know what I've done and what I bring to your team, feel free to reach out and start a conversation. I can't wait to get started!</h1>
                <a href="/contact">
                <button className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
                    <span className="pr-1">Contact Me Today</span>
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                </a>
            </div>
        </div>
    )
}