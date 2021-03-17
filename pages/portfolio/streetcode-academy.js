import Head from 'next/head'

export default function streetcodeacademy() {
    return (
        <div>
            <Head>
                <title>Streetcode Academy | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Promoting and practicing allyship with Streetcode Academy" />
                <meta property="og:description" content="Empowering underprivileged communities to fulfill their full potential. See how my commitment to allyship is helping budding engineers succeed in the tech industry." />
                <meta property="og:image" content="../thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio/streetcode-academy" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-6 sm:px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">How I got Involved</h1>
                <p className="text-2xl text-gray-300">Silicon Valley is a hotbed of innovation and genius, but it still struggles with <a className="text-yellow-300 transition duration-300 ease-in-out hover:text-gray-100 hover:underline" href="https://www.cnbc.com/2018/06/20/silicon-valleys-diversity-problem-is-its-achilles-heel.html">diversity and unconscious bias.</a> I wanted to promote diversity so we can stay ahead as a nation.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../streetcode-team.png" alt="Streetcode Academy team photo" />
                <p className="text-2xl text-gray-300">Underprivileged communities, especially those of color, lack the resources and opportunities to obtain the technical skills and networks essential succeeding in the tech industry. That's when I ran into <a className="text-yellow-300 transition duration-300 ease-in-out hover:text-gray-100 hover:underline" href="https://www.streetcode.us/">Streetcode Academy.</a></p>
            </div>
            <div className="flex flex-col bg-gray-200 items-center space-y-4 pb-16 px-6 lg:px-24 text-center">
                <h1 className="text-center text-4xl pt-16 p-6 font-bold">We investigate the untapped genius of our community by:</h1>
                <li className="text-2xl">Providing free high-quality, quarterly tech education classes</li>
                <li className="text-2xl">Teaching fundamental coding practices and programming skills</li>
                <li className="text-2xl">Nurturing a strong entrepreneurship mindset</li>
                <li className="text-2xl">Expanding each individual's creativity</li>
                <div className="flex flex-col lg:flex-row flex-wrap lg:space-x-6 py-6 justify-center items-center space-y-8 lg:space-y-0">
                    <img className="max-w-sm rounded-md" src="../streetcode.png" alt="Preflight checking drone" />
                    <img className="max-w-sm rounded-md" src="../streetcode-1.png" alt="Recovering drone" />
                    <img className="max-w-sm rounded-md" src="../streetcode-2.png" alt="Drone recovery system" />
                </div>
                <p className="px-6 text-xl text-center">I became a volunteer instructor for two of their <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.streetcode.us/classes">classes</a> and taught children aged 7-12 basic programming and engineering design to nurtur their curiosity to explore technology.</p>
            </div>
            <div className="px-6 py-16 bg-white space-y-8 items-center text-center sm:text-left">
                <h1 className="text-center text-4xl font-bold">About <br className="sm:hidden" />Streetcode Academy</h1>
                <img className="h-52 sm:float-left px-10 pb-6 sm:pb-0" src="../streetcode-academy-logo.png" alt="Streetcode Academy Logo"></img>
                <p className="px-6 text-2xl"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.streetcode.us/">Streetcode Academy</a> is a nonprofit that is more than another coding class. It is a community-based ecosystem in East Palo Alto to bridge the digital divide in Silicon Valley and empower underprivileged communities with the skills, mindsets, and networks to diversify and succeed in the tech industry.</p>
                <p className="px-6 text-2xl">It operates with a very special model of connecting young people to their talents, to jobs, and to a bright future through a support system of leaders from their own community.</p>
                <p className="px-6 text-2xl">Streetcode offers many classes that teach not only modern coding skills but also non-programming related topics, such as entrepreneurship, computer literacy, and more. Above all, Streetcode strives to instill an undying curiosity towards technology in all of its students.</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 px-6 justify-center items-center text-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/darpa">DARPA Swarm<br className="sm:hidden" /> Drone Challenge</a></h1>
            </div>
        </div>
    )
}