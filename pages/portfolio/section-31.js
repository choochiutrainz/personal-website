import Head from 'next/head'

const section31 = () => {
    return (
        <div>
            <Head>
                <title>Section 31 - Wesley "Chewy" Chiu</title>
                <meta property="og:site_name" content={`Wesley "Chewy" Chiu`} />
                <meta property="og:title" content={`Section 31 - Wesley "Chewy" Chiu`} />
                <meta property="og:description" content="Modernizing the US Space Force's RF deconfliction capabilities to promote a space environment. Check out how we turned a _____" />
                <meta property="og:image" content="" />
                <meta property="og:url" content="https://choochiutrain.com/section-31" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">A SureFire Success</h1>
                <p className="text-2xl text-gray-300">According to NASA, there are over 8000 man-made objects orbiting Earth today, 3000 of them satellites. Future efforts like SpaceX's Starlink Satellite 'Train' and Lockheed Martin's Space Fence will soon multiply that number. In this already congested environment, the Department of Defense (DoD) needed a way to safely send RF energy into space and communicate with their satellites with minimal risk of interfering with other satellites. That's where we, the Starfox team, came in.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../starfox-homepage.png" alt="SureFire homepage" />
                <p className="text-2xl text-gray-300">SureFire is a web app built and maintained by the Starfox team. It allows units around the world to more easily and quickly submit, process, and track deconfliction requests between multiple partners to send RF energy into space. As its first Product Manager, I had to prioritize the unique mission needs between a dozen units and multiple user groups while balancing technical complexity and business priorities to lead the team to success.</p>
            </div>
            <div className="flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16">
                <h1 className="text-center w-screen text-4xl pt-16 p-6 font-bold">We commit to building SureFire with the following principles:</h1>
                <p className="text-2xl">Agile Software Development</p>
                <p className="text-2xl">Continuous Integration and Deployment</p>
                <p className="text-2xl">Minimal request turnaround time to downrange personnel</p>
                <p className="text-2xl">Built with modern industry coding standards</p>
                <p className="text-2xl">Modern, intuitive UI's that our users love and can effortlessly onboard to and use anytime, anywhere</p>
                <div className="flex flex-row space-x-6 py-6 justify-center items-center">
                    <img className="max-h-80 rounded-md" src="../wes-with-starfox-3.jpg" alt="Portrait of me" />
                    <img className="max-h-80 rounded-md" src="../wes-with-starfox-4.jpg" alt="Portrait of me" />
                    <img className="max-h-80 rounded-md" src="../wes-with-starfox-5.jpg" alt="Portrait of me" />
                </div>
                <p className="px-24 pb-6 text-2xl text-center">There were other DoD projects to try to answer this problem, but they were slow, bureaucratic, buggy, and using antiquated paradigms and technologies.</p>
                <p className="px-24 text-2xl text-center">We formed the Starfox team in May 2019, deployed our MVP within 52 working days, and obtained user adoption just before Christmas. While I left the team in Feb 2020 for my next duty assignment at Virginia, Starfox continues to build and iterate to further trim turnaround time and to maximize accuracy and convenience.</p>
            </div>
            <div className="py-16 bg-white space-y-8">
                <h1 className="text-center w-screen text-4xl font-bold">About Section 31</h1>
                <img className="h-52 float-left px-10" src="../section-31-logo.png"></img>
                <p className="text-2xl clear-none"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.linkedin.com/company/section-thirty-one/">Section 31</a> is an agile software development start-up under the Space and Missile Systems Center of the US Space Force. Its mission is to create a digital US Space Force where extraordinary software propels space dominance.</p>
                <p className="text-2xl clear-none">It is initially focused on modernizing SDA capabilities and deprecating currenty legacy SSA systems, but will grow to encompass the greater SDA/ESBMC2 enterprise over time. Above all else, we commit to continuously delivering impactful software that Space Operators love.</p>
                <p className="text-2xl">Section 31 is a Star Trek reference to an unacknowledged Starfleet Intelligence organization that makes allowances for "bending the rules" during times of extraordinary threats. They operate on the basis that extraordinary threates warrant extraordinary measures to accomplish the mission.</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/rogue-squadron">Dowding</a></h1>
            </div>
        </div>
    )
}

export default section31