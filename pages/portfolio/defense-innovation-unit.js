import Head from 'next/head'

export default function defenseinnovationunit() {
    return (
        <div className="w-screen">
            <Head>
                <title>Defense Innovation Unit | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Transforming military capabilities with commercial technologies" />
                <meta property="og:description" content="Using drones to deliver lifesaving blood and medical supplies to the front line. See how I apply user-centered design and to transform the military's capabilities with commercial technology." />
                <meta property="og:image" content="../thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio/defense-innovation-unit" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-10 lg:px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">The Lore</h1>
                <p className="text-2xl text-gray-300">The chance of surviving an injury increases nearly threefold if you receive a blood transfusion within an hour. But blood supplies are often too far away to administer in time, especially in combat zones or disaster sites. But we thought "drones can help solve that!"</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../zipline-team.jpg" alt="Zipline team photo" />
                <p className="text-2xl text-gray-300">We sought out companies solving this problem to add them to our toolbox. As product manager, I helped them navigate the bureaucracy, adapt their technology to the military, and balance mission needs with business priorities.</p>
            </div>
            <div className="flex flex-col bg-gray-200 items-center space-y-4 pb-16 px-6 lg:px-24 text-center">
                <h1 className="text-center w-screen text-4xl pt-16 p-6 font-bold">We envisioned this partnership with these values in mind:</h1>
                <li className="text-2xl">Rapid Prototyping</li>
                <li className="text-2xl">User-Centered Design</li>
                <li className="text-2xl">Commercially viable, mature technology</li>
                <li className="text-2xl">A nimble, minimal value stream from request sent to supplies delivered</li>
                <div className="flex flex-col lg:flex-row flex-wrap lg:space-x-6 py-6 justify-center items-center space-y-8 lg:space-y-0">
                    <img className="max-w-sm rounded-md" src="../zipline-team-2.jpg" alt="Preflight checking drone" />
                    <img className="max-w-sm rounded-md" src="../zipline-team-3.jpg" alt="Recovering drone" />
                    <img className="max-w-sm rounded-md" src="../zipline-team-4.jpg" alt="Drone recovery system" />
                </div>
                <p className="py-6 text-xl text-center">A dozen companies have pitched their ideas, and we invited three of them to provide a full proposal to us and the end-users. One of the main contenders, Zipline, has been operating in Rwanda. It most recently participated in a joint exercise with the US Marine Corps and the Australian Defence Force.</p>
            </div>
            <div className="px-6 py-16 bg-white space-y-8 items-center text-center sm:text-left">
                <h1 className="text-center text-4xl font-bold">About the <br className="sm:hidden" />Defense Innovation Unit</h1>
                <img className="w-80 sm:h-auto sm:float-left px-10 pb-6 sm:pb-0" src="../defense-innovation-unit-logo.png" alt="Rogue Squadron Logo"></img>
                <p className="text-2xl">The <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.linkedin.com/company/diux-rogue-squadron">Defense Innovation Unit</a> is a fast-moving Department of Defense (DoD) organization that contracts with commercial companies to solve national security problems with commercial talent and innovation.</p>
                <p className="text-2xl">It is the only DoD organization focused exclusively on radidly fielding and scaling commercial technology across the U.S. Armed Forces. It lowers barriers to entry into the defense market for commercial companies driving innovation in emerging and foundational technology areas.</p>
                <p className="text-2xl">By focusing on the fundamental problem and the tangible value that solving it would bring to the end user, we've created a new way for businesses to bring modern technology to the DoD at commercial speeds that the on-the-ground user actually loves and values.</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center text-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/streetcode-academy">Streetcode Academy</a></h1>
            </div>
        </div>
    )
}