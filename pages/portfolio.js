import Head from 'next/head'

const portfolio = () => {
    return (
        <div>
            <Head>
                <title>Portfolio - Wesley "Chewy" Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Product Manager and Software Engineer Portfolio" />
                <meta property="og:description" content="Here you'll find my most recent work. Check out what I've done and see what I can do for you.." />
                <meta property="og:image" content="" />
                <meta property="og:url" content="https://choochiutrain.com/portfolio" />
            </Head>
            <div id="section1" className="flex flex-col justify-center items-center text-center bg-gray-200 space-y-8 py-16 px-24">
                <h1 className="text-4xl font-bold">I'm always looking to solve the next big challenge.</h1>
                <p className="text-2xl">I’ve centered my career around solving compelling problems and producing real, tangible impact for the business and the end user. There is no problem that I can't tackle. Here are some of my most recent projects that showcase how we broadened the art of possible.</p>
                <div className="flex flex-row justify-center items-center space-x-20">
                    <a href="/portfolio/section-31">
                        <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="wes-with-starfox-2.jpg" alt="Section 31 project" />
                    </a>
                    <a href="/portfolio/rogue-squadron">
                        <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="rogue-squadron.png" alt="Rogue Squadron project" />
                    </a>
                    <a href="/portfolio/defense-innovation-unit">
                        <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="zipline-team-1.png" alt="DIUx project" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col bg-white justify-center items-center p-24">
                <h1 className="text-4xl font-bold">Check out some of the other projects that I've been part of.</h1>
                <div className="flex flex-row justify-center items-center space-x-20 pt-16">
                    <a href="/portfolio/streetcode-academy">
                        <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="streetcode-team-1.png" alt="Section 31 project" />
                    </a>
                    <a href="/portfolio/darpa">
                        <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="wes-holding-uas.jpg" alt="Rogue Squadron project" />
                    </a>
                </div>
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

export default portfolio