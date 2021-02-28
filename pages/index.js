import Head from 'next/head'

export default function Home({projects}) {
  return (
    <div>
      <Head>
        <title>Home - Wesley "Chewy" Chiu</title>
        <meta name='keywords' content='web development, agile, XP, air force, product manager, pm' />
        <meta property="og:site_name" content={`Wesley "Chewy" Chiu`} />
        <meta property="og:title" content={`Home - Wesley "Chewy" Chiu`} />
        <meta property="og:description" content="Product Manager pushing the art of possible in tech and software. Check out what I've done and what I can do for you." />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://choochiutrain.com" />
      </Head>
      <div id="section1" className="flex flex-row justify-center bg-s31-blue space-x-20">
        <img className="h-96 text-gray-100 m-40 mr-0 rounded-md" src="personal-portrait.png" alt="Portrait of me" />
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-4xl text-yellow-300 mr-40">My passion and focus is leading<br/>agile software product teams.</h1>
          <p className="text-2xl text-gray-100 leading-normal mr-40">I strive to build and lead diverse, collaborative, and kick-ass teams that deliver a working, reliable product that users love. If you want to learn more about working together, <a className="text-yellow-300 transition duration-300 ease-in-out hover:text-gray-100 hover:underline" href="/contact">contact me</a> today!</p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 justify-center items-center pb-16">
        <h1 className="text-center w-screen text-4xl p-14 font-bold">I also do portrait photography. And I like to hack things.</h1>
        <div className="flex flex-row space-x-20 pb-14">
          <div className="flex flex-col space-y-8 items-center pl-24 pr-8">
            <img className="h-96 rounded-md" src="wes-at-sans.jpg" alt="Portrait of me" />
            <p className="text-center text-xl">I am a U.S. Air Force Cyberwarfare Officer by trade. I get a good kick out of penetration testing my home devices and participating in Capture-The-Flag events to test my skills.</p>
          </div>
          <div className="flex flex-col space-y-8 items-center pr-24 pl-8">
            <img className="h-96 rounded-md" src="wes-photographer.jpg" alt="Portrait of me" />
            <p className="text-center text-xl">I love capturing priceless moments on my camera and sharing the stories of amazing people that I meet around the world. I’d be honored to photograph your special occasion.</p>
          </div>
        </div>
        <a href="/passions">
          <button className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
            <span className="pr-1">Learn More About Me</span>
            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          </a>
      </div>
      <div className="flex flex-col space-y-8 py-16 justify-center items-center bg-white">
        <h1 className="text-center w-screen text-4xl font-bold">My Projects</h1>
        <p className="text-center text-xl">It's a wonderful opportunity to work with people who are so passionate about their own craft<br/>and to enable them to achieve new heights. Check out my latest projects that I've been working on.</p>
        <div className="flex flex-row justify-center items-center space-x-20">
          <a href="/portfolio/section-31">
            <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="wes-with-starfox-2.jpg" alt="Section 31 project" />
          </a>
          <a className="pt-24" href="/portfolio/rogue-squadron">
            <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="rogue-squadron.png" alt="Rogue Squadron project" />
          </a>
          <a href="/portfolio/defense-innovation-unit">
            <img className="h-96 rounded-md transition duration-300 ease-in-out hover:opacity-75" src="zipline-team-1.png" alt="DIUx project" />
          </a>
        </div>
        <a className="pt-12" href="/portfolio">
          <button className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
            <span className="pr-1">More Projects</span>
            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </a>
      </div>
      <div className="bg-indigo-100 flex flex-col space-y-8 py-10 justify-center items-center">
        <h1 className="text-center w-screen text-2xl font-bold">Product Manager | Penetration Tester | Portrait Photographer</h1>
        <h1 className="text-center w-screen text-4xl font-bold">Ready to build the next great thing together?</h1>
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