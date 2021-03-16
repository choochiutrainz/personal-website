import Head from 'next/head'

export default function Home({projects}) {
  return (
    <div>
      <Head>
        <title>Home | Wesley Chiu</title>
        <meta name='keywords' content='web development, agile, XP, air force, product manager, pm' />
        <meta property="og:site_name" content="choochiutrain.com" />
        <meta property="og:title" content={`Air Force Product Manager & Software Engineer`} />
        <meta property="og:description" content="Pushing the art of possible for tech and software in the world's largest bureaucracy. See how my experience in revolutionizing how the Air Force delivers software sets me apart from the others." />
        <meta property="og:image" content="thumbnail.png" />
        <meta property="og:url" content="https://choochiutrain.com" />
      </Head>
      <div id="section1" className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left bg-s31-blue p-16 lg:px-40 lg:py-20 lg:space-x-20 space-y-10 lg:space-y-0">
        <img className="w-96 sm:h-96 sm:w-auto text-gray-100 rounded-md" src="personal-portrait.png" alt="Wesley Portrait" />
        <div className="flex flex-col justify-center space-y-8">
          <h1 className="text-4xl text-yellow-300">My passion and focus is leading software product teams.</h1>
          <p className="text-2xl text-gray-100">I strive to build and lead diverse, collaborative, and kick-ass teams that deliver a working, reliable product that users love. If you want to learn more about working together, <a className="text-yellow-300 transition duration-300 ease-in-out hover:text-gray-100 hover:underline" href="/contact">contact me</a> today!</p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-200 justify-center items-center pb-16">
        <h1 className="text-center w-screen text-4xl p-14 font-bold">I also do portrait photography. And I like to hack things.</h1>
        <div className="lg:flex flex-row lg:space-x-20 px-14 pb-14 space-y-8 lg:space-y-0">
          <div className="flex flex-col space-y-8 items-center">
            <img className="w-96 sm:h-96 sm:w-auto rounded-md" src="wes-at-sans.jpg" alt="Wesley hacking" />
            <p className="text-center text-xl">I am a U.S. Air Force Cyberwarfare Officer by trade. I get a good kick out of penetration testing my home devices and participating in Capture-The-Flag events to test my skills.</p>
          </div>
          <div className="flex flex-col space-y-8 items-center">
            <img className="w-96 sm:h-96 sm:w-auto rounded-md" src="wes-photographer.jpg" alt="Wesley photographing" />
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
        <p className="text-center text-xl px-16 sm:px-32 md:px-40 lg:px-80">It's a wonderful opportunity to work with people who are so passionate about their own craft and to enable them to achieve new heights. Check out my latest projects that I've been working on.</p>
        <div className="lg:flex flex-row justify-center items-center lg:space-x-20 space-y-8 lg:space-y-0">
          <div className="relative transition duration-300 ease-in-out">  
            <img className="w-96 sm:h-96 sm:w-auto bg-gray-400 rounded-md darken-img" src="wes-with-starfox-2.jpg" alt="Section 31 project" />
            <div className="absolute inset-48 top-52 sm:inset-32 md:left-28 lg:inset-36 lg:inset-y-36 lg:inset-x-4 flex flex-col items-center space-y-3">
              <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300">SureFire</span>
              <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                <a href="/portfolio/section-31">View Project</a>
              </button>
            </div>
          </div>
          <div className="relative lg:pt-32 transition duration-300 ease-in-out">
            <img className="w-96 sm:h-96 sm:w-auto rounded-md darken-img" src="rogue-squadron.png" alt="Rogue Squadron project" />
            <div className="absolute inset-48 top-52 sm:inset-32 md:left-28 lg:inset-36 lg:inset-y-64 lg:inset-x-4 flex flex-col items-center space-y-3">
              <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300">Dowding</span>
              <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                <a href="/portfolio/rogue-squadron">View Project</a>
              </button>
            </div>
          </div>
          <div className="relative transition duration-300 ease-in-out">
            <img className="w-96 sm:h-96 sm:w-auto rounded-md darken-img" src="zipline-team-1.png" alt="DIUx project" />
            <div className="absolute inset-48 top-52 sm:inset-32 md:left-28 lg:inset-36 lg:inset-y-36 lg:inset-x-4 flex flex-col items-center space-y-3">
              <span className="uppercase tracking-wide text-2xl font-bold text-yellow-300">Zipline</span>
              <button className="uppercase border-4 rounded-md font-bold border-yellow-300 text-yellow-300 py-2 px-5 w-48 transition duration-300 ease-in-out hover:bg-yellow-300 hover:text-black">
                <a className="" href="/portfolio/defense-innovation-unit">View Project</a>
              </button>
            </div>
          </div>
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
        <h1 className="text-center w-screen text-2xl font-bold">Product Manager <br className="sm:hidden"/><span className="text-transparent sm:text-black">|</span> Penetration Tester | Portrait Photographer</h1>
        <h1 className="text-center w-screen text-4xl font-bold">Ready to build the<br className="sm:hidden"/> next great thing together?</h1>
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