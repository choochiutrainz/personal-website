import Head from 'next/head'

const streetcodeacademy = () => {
    return (
        <div>
            <Head>
                <title>Streetcode Academy - Wesley "Chewy" Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Promoting and practicing allyship with Streetcode Academy" />
                <meta property="og:description" content="Empowering underprivileged communities to fulfill their full potential. See how my commitment to allyship is helping budding engineers succeed in the tech industry." />
                <meta property="og:image" content="" />
                <meta property="og:url" content="https://choochiutrain.com/streetcode-academy" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">How I got Involved</h1>
                <p className="text-2xl text-gray-300">While living in Silicon Valley, I saw the world's leading hotbed of innovation and genius. But I also saw an environment that still struggles with <a className="text-yellow-300 transition duration-300 ease-in-out hover:text-gray-100 hover:underline" href="https://www.cnbc.com/2018/06/20/silicon-valleys-diversity-problem-is-its-achilles-heel.html">diversity and unconscious bias.</a> Tech giants like Google, Apple, and Facebook still have a white majority, especially in leadership positions. Their overall workforce are typically less than 10% black, 5% hispanic, 30% asian, or 25% women. The vast majority of companies that I worked with while at the Defense Innovation Unit were run and staffed by white men.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../streetcode-team.png" alt="Streetcode Academy team photo" />
                <p className="text-2xl text-gray-300">We need strong diversity to stay ahead as a nation in this extremely competitive innovation and tech sphere. Underprivileged communities, especially those of color, lacked the resources and opportunities to learn the technical skills and find the networks essential succeeding in Silicon Valley's tech industry. That's when I ran into <a className="text-yellow-300 transition duration-300 ease-in-out hover:text-gray-100 hover:underline" href="https://www.streetcode.us/">Streetcode Academy.</a></p>
            </div>
            <div className="flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16">
                <h1 className="text-center w-screen text-4xl pt-16 p-6 font-bold">We investigate the untapped genius of our community by:</h1>
                <p className="text-2xl">Providing free high-quality, quarterly tech education classes</p>
                <p className="text-2xl">Teaching fundamental coding practices and programming skills</p>
                <p className="text-2xl">Nurturing a strong entrepreneurship mindset</p>
                <p className="text-2xl">Expanding each individual's creativity</p>
                <div className="flex flex-row space-x-6 py-6 justify-center items-center">
                    <img className="max-w-sm rounded-md" src="../streetcode.png" alt="Preflight checking drone" />
                    <img className="max-w-sm rounded-md" src="../streetcode-1.png" alt="Recovering drone" />
                    <img className="max-w-sm rounded-md" src="../streetcode-2.png" alt="Drone recovery system" />
                </div>
                <p className="px-24 py-6 text-xl text-center">I joined Streetcode Academy as a volunteer instructor for two of their <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.streetcode.us/classes">classes,</a> where I taught children aged 7-12 basic programming and nurtured their curiosity to explore technology.</p>
                <p className="px-24 py-6 text-xl text-center">In the Jr. Game Design course, I taught first-time coders how to use Scratch, a block-based language, to learn the basics of programming and Game Design, and how to build out several apps and games.</p>
                <p className="px-24 py-6 text-xl text-center">In the Engineering Design course, I taught budding engineers the design process so they can explore their ideas and turn them into physical products. Much of waht they created involved circuitry, 3D printing, and vinyl cutting.</p>
            </div>
            <div className="py-16 bg-white space-y-8">
                <h1 className="text-center w-screen text-4xl font-bold">About Streetcode Academy</h1>
                <img className="h-52 float-left px-10" src="../streetcode-academy-logo.png" alt="Streetcode Academy Logo"></img>
                <p className="text-2xl clear-none"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.streetcode.us/">Streetcode Academy</a> is a nonprofit that is more than another coding class. It is a community-based ecosystem in East Palo Alto to bridge the digital divide in Silicon Valley and empower underprivileged communities with the skills, mindsets, and networks to diversify and succeed in the tech industry.</p>
                <p className="text-2xl clear-none">It operates with a very special model of connecting young people to their talents, to jobs, and to a bright future through a support system of leaders from their own community.</p>
                <p className="text-2xl">Streetcode offers many classes that teach not only modern coding skills but also non-programming related topics, such as entrepreneurship, computer literacy, and more. Above all, Streetcode strives to instill an undying curiosity towards technology in all of its students.</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/darpa">DARPA Swarm Drone Challenge</a></h1>
            </div>
        </div>
    )
}

export default streetcodeacademy