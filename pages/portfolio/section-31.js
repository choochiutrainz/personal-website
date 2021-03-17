import Head from 'next/head'

export default function section31() {
    return (
        <div>
            <Head>
                <title>Section 31 | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Modernizing the US Space Force's RF deconfliction capabilities to promote a space environment" />
                <meta property="og:description" content="Delivering at the speed of relevance. Check out how we did the impossible and took a 3-day process into a 3-min step in just 52 days." />
                <meta property="og:image" content="../thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio/section-31" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-10 lg:px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">A SureFire Success</h1>
                <p className="text-2xl text-gray-300">Over 8000 man-made objects orbit Earth today, 3000 of them satellites. SpaceX's Starlink and Lockheed Martin's Space Fence will multiply that number. In this already congested environment, the Department of Defense (DoD) needed a way to safely send RF energy into space and communicate with their satellites with minimal risk of interfering with others. That's where we came in.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../starfox-homepage.png" alt="SureFire homepage" />
                <p className="text-2xl text-gray-300">SureFire allows units worldwide to easily and quickly submit, track, and calculate RF deconfliction requests between mission partners. As founding Product Manager, I had to not only prioritize the unique mission needs between a dozen units and multiple user groups but also prove the viability of agile values and DevSecOps to a skeptical Air Force.</p>
            </div>
            <div className="flex flex-col bg-gray-200 items-center space-y-4 pb-16 px-6 lg:px-24 text-center">
                <h1 className="text-4xl pt-16 p-6 font-bold text-center">Our achievements:</h1>
                <li className="text-2xl">Replaced email process and MS Word form with intuitive, centralized UI</li>
                <li className="text-2xl">Reduced average time spent submitting requests from 30 minutes to 5</li>
                <li className="text-2xl">Automated deconfliction analysis/calculation process</li>
                <li className="text-2xl">Eliminated three-day delay from request submission to calculation start</li>
                <li className="text-2xl">Deployed MVP to prod in 58 days</li>
                <li className="text-2xl">Maintained biweekly prod release cadence</li>
                <li className="text-2xl">Reached full user adoption in 8 months</li>
                <div className="flex flex-col lg:flex-row flex-wrap lg:space-x-6 py-6 justify-center items-center space-y-8 lg:space-y-0">
                    <img className="w-96 sm:h-96 sm:w-auto rounded-md" src="../wes-with-starfox-4.jpg" alt="Portrait of me" />
                    <img className="w-96 sm:h-auto rounded-md" src="../wes-with-starfox-3.jpg" alt="Portrait of me" />
                    <img className="w-96 sm:h-96 sm:w-auto rounded-md" src="../wes-with-starfox-5.jpg" alt="Portrait of me" />
                </div>
            </div>
            <div className="w-screen px-6 py-16 bg-white space-y-8 items-center text-center sm:text-left">
                <h1 className="text-center text-4xl font-bold">About Section 31</h1>
                <img className="w-80 sm:h-auto sm:float-left px-10 pb-6 sm:pb-0" src="../section-31-logo.png"></img>
                <p className="text-2xl"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.linkedin.com/company/section-thirty-one/">Section 31</a> is an agile software development start-up under the Space and Missile Systems Center of the US Space Force. Its mission is to create a digital US Space Force where extraordinary software propels space dominance.</p>
                <p className="text-2xl">S31 is initially focused on modernizing our Space Domain Awareness (SDA) capabilities and deprecating legacy systems, but it will grow to encompass the greater SDA enterprise overtime. Above all else, we commit to continuously delivering impactful software that Space Operators love.</p>
                <p className="text-2xl">S31 is a Star Trek reference to an unacknowledged Starfleet Intelligence organization that allows "bending the rules" during times of extraordinary threats. They operate on the basis that extraordinary threates warrant extraordinary measures to accomplish the mission.</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center text-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/rogue-squadron">Dowding</a></h1>
            </div>
        </div>
    )
}