import Head from 'next/head'

export default function defenseinnovationunit() {
    return (
        <div>
            <Head>
                <title>Defense Innovation Unit | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Transforming military capabilities with commercial technologies" />
                <meta property="og:description" content="Using drones to deliver lifesaving blood and medical supplies to the front line. See how I apply user-centered design and to transform the military's capabilities with commercial technology." />
                <meta property="og:image" content="../thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio/defense-innovation-unit" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">The Lore</h1>
                <p className="text-2xl text-gray-300">A wounded person's chances of survival increase nearly threefold if they receive a blood transfusion within an hour of being injured. Unfortunately, blood supplies are typically so far that that it's unlikely to deliver the blood or evacuate that person in time, especially in combat zones or disaster locations. Then we thought, "what if we used drones to do that?"</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../zipline-team.jpg" alt="Zipline team photo" />
                <p className="text-2xl text-gray-300">Drones cost less to procure and maintain, put fewer lives at risk, and much more quickly deploy and deliver supplies to wherever needed. We had to add them to the toolbox. I helped with the project as a Product Manager to ideate adapting commercial technology to national defense applications, guide private companies through the Department of Defense's (DoD) complex acquisitions process, and mediate between companies and frontline personnel to balance mission needs and business priorities.</p>
            </div>
            <div className="flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16">
                <h1 className="text-center w-screen text-4xl pt-16 p-6 font-bold">We sought out a solution that fulfilled these critical values in mind:</h1>
                <p className="text-2xl">Rapid Prototyping</p>
                <p className="text-2xl">User-Centered Design</p>
                <p className="text-2xl">Commercially viable, mature technology</p>
                <p className="text-2xl">A nimble value stream from request to delivery</p>
                <div className="flex flex-row space-x-6 py-6 justify-center items-center">
                    <img className="max-w-sm rounded-md" src="../zipline-team-2.jpg" alt="Preflight checking drone" />
                    <img className="max-w-sm rounded-md" src="../zipline-team-3.jpg" alt="Recovering drone" />
                    <img className="max-w-sm rounded-md" src="../zipline-team-4.jpg" alt="Drone recovery system" />
                </div>
                <p className="px-24 py-6 text-xl text-center">Since the project's inception, a dozen companies have pitched their ideas, and three companies were invited to provide a full proposal to us and the end-users. One of the main contenders, Zipline, which already has a mature operation in Rwanda, has most recently participated in a joint exercise with the US Marine Corps and the Australian Defence Force.</p>
            </div>
            <div className="py-16 bg-white space-y-8">
                <h1 className="text-center w-screen text-4xl font-bold">About the Defense Innovation Unit</h1>
                <img className="h-52 float-left px-10" src="../defense-innovation-unit-logo.png" alt="Rogue Squadron Logo"></img>
                <p className="text-2xl clear-none">The <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.linkedin.com/company/diux-rogue-squadron">Defense Innovation Unit</a> is a fast-moving Department of Defense (DoD) organization that contracts with commercial companies to solve national security problems with commercial talent and innovation.</p>
                <p className="text-2xl clear-none">It is the only DoD organization focused exclusively on fielding and scaling commercial technology across the U.S. Armed Forces to help solve critical problems. It has been lowering barriers to entry into the defense market for commercial companies driving innovation in emerging and foundational technology areas.</p>
                <p className="text-2xl">By focusing on the fundamental problem and the tangible value that solving it would bring to the end user, we've created a new way for businesses to bring modern technology to the DoD at commercial speeds that the on-the-ground user actually loves and values.</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/streetcode-academy">Streetcode Academy</a></h1>
            </div>
        </div>
    )
}