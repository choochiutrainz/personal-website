import Head from 'next/head'

const roguesquadron = () => {
    return (
        <div>
            <Head>
                <title>Rogue Squadron - Wesley "Chewy" Chiu</title>
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-s31-blue space-y-8 py-16 px-24">
                <h1 className="text-4xl text-yellow-300 font-bold">The Dowding Story</h1>
                <p className="text-2xl text-gray-300">In early 2017, the Islamic State was using comercially available drones to drop grenades on coalition troops almost every day, sometimes flying as many as 12 drones at once. The Department of Defense (DoD) needed a quality UAS red team and a modern solution for detecting drones to protect friendly forces and the general populace. That's where Dowding came in.</p>
                <img className="rounded-md transition duration-300 ease-in-out" src="../dowding-homepage.png" alt="Dowding homepage" />
                <p className="text-2xl text-gray-300">Dowding is capable of fusing various data sources into one Common Operating Picture that anyone, from law enforcement to national defense forces, could use to detect and track drone incursions in realtime. I helped build it as a Software Engineer.</p>
            </div>
            <div className="flex flex-col bg-gray-200 justify-center items-center space-y-4 pb-16">
                <h1 className="text-center w-screen text-4xl pt-16 p-6 font-bold">We envisioned Dowding with the following principles:</h1>
                <p className="text-2xl">Agile Software Development</p>
                <p className="text-2xl">Continuous Integration and Deployment</p>
                <p className="text-2xl">Mobile-Centric</p>
                <p className="text-2xl">Built on a modern tech stack</p>
                <p className="text-2xl">Clean, minimal UI's that our users love</p>
                <p className="px-24 py-6 text-xl text-center">We demo-ed our MVP to numerous DoD stakeholders, and they enthusiastically supported the project. I helped rewrite the server from scratch using NodeJS, TypeScript, PostgreSQL, Docker, Vault, MapBox, and Swagger. This was where I first truly learned and practiced agile software development principles.</p>
                <p className="px-24 text-xl text-center">(Fun Fact: Dowding was named for the <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://en.wikipedia.org/wiki/Dowding_system">Dowding System</a>, the world’s first integrated air defense system that helped win the Battle of Britain)</p>
            </div>
            <div className="py-16 bg-white space-y-8">
                <h1 className="text-center w-screen text-4xl font-bold">About Rogue Squadron</h1>
                <img className="h-52 float-left px-10" src="../rogue-squadron-logo.png" alt="Rogue Squadron Logo"></img>
                <p className="text-2xl clear-none"><a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.linkedin.com/company/diux-rogue-squadron">Rogue Squadron</a> is the DoD's premier UAS/Counter-UAS team. It was born to solve a DoD-wide problem of detecting, penetration testing, and hardening commercially available drones for national defense and law enforcement. The DoD had several programs related to drones, but they were bureaucratic, slow, strictly education/research focused, and/or using old paradigms and technologies.</p>
                <p className="text-2xl clear-none">We're the only organization with the resources and capability to meet the immediate operational needs around drones, and we have been providing support to over 200 organizations across the Department of Defense, the Department of Homeland Security, the Department of Interior, the Department of Justice, and allied partners.</p>
                <p className="text-2xl">Rogue Squadron was originally part of the Defense Innovation Unit Experimental (DIUx), now the <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://www.diu.mil/">Defense Innovation Unit</a>. In March 2020, RS went through a <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="https://dds.mil/media/announcements/2020-05-rogue-squadron-transitions-from-defense-innovation-unit-to-defense-digital-service">successful acquisition</a> by the Defense Digital Service (DDS).</p>
            </div>
            <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center">
                <h1 className="text-4xl font-bold">Check out my next project: <a className="underline text-indigo-600 transition duration-300 ease-in-out hover:text-yellow-500 hover:opacity-70" href="/portfolio/defense-innovation-unit">Drone Medical Resupply</a></h1>
            </div>
        </div>
    )
}

export default roguesquadron