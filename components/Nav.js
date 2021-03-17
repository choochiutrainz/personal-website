import React from 'react'

export default function Nav() {
    const [hidden, toggleHidden] = React.useState(true)

    const getHidden = () => {
        if (hidden) return 'opacity-0 absolute'
        else return ''
    }

    const transformMenuButton = (id) => {
        if (!hidden) {
            switch (id) {
                case "top": return 'transform rotate-45 translate-y-3'
                case "middle": return 'opacity-0'
                case "bottom": return 'transform -rotate-45 -translate-y-3'
                default: return ''
            }
        }
        else return ''
    }

    return (
        <div>
            <nav className="relative w-screen bg-gray-50 bg-opacity-60 flex items-center px-12 py-2 lg:px-32 lg:py-0">
                <a href="/">
                    <img className="py-3 h-20 uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-110" src="chewy-logo.png" alt="Home" />
                </a>
                <div className="hidden md:flex md:space-x-8 lg:space-x-20 justify-center flex-grow uppercase font-bold text-lg text-black ">
                    <a className="transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/portfolio">
                        Portfolio
                    </a>
                    <a className="text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/passions">
                        Passions
                    </a>
                    <a className="text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/resume">
                        Resume
                    </a>
                </div>
                <div className="hidden md:flex justify-end items-center md:space-x-2">
                    <a className="uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/contact">
                        Contact
                    </a>
                    <a href="https://github.com/choochiutrainz">
                        <img className="lg:px-2 py-3 uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:opacity-50 transform hover:scale-110" src="github-logo.png" alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/choochiutrain">
                        <img className="lg:px-2 py-3 uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:opacity-75 transform hover:scale-110" src="linkedin-logo.png" alt="LinkedIn" />
                    </a>
                </div>
                <div className="flex justify-end flex-grow md:hidden px-9">
                    <button className="focus:outline-none" onClick={() => toggleHidden(!hidden)} >
                        <span class="sr-only">toggle main menu</span>
                        <div className="block w-8 absolute transform -translate-x-1/2 -translate-y-1/2 text-indigo-600 space-y-2">
                            <span className={`rounded-lg block h-1 w-9 bg-current transform transition duration-500 ease-in-out ${transformMenuButton("top")}`}></span>
                            <span className={`rounded-lg block h-1 w-9 bg-current transform transition duration-500 ease-in-out ${transformMenuButton("middle")}`}></span>
                            <span className={`rounded-lg block h-1 w-9 bg-current transform transition duration-500 ease-in-out ${transformMenuButton("bottom")}`}></span>
                        </div>
                    </button>
                </div>
            </nav>
            <div className={`${getHidden()} absolute text-black flex flex-col w-screen h-screen items-end space-y-5 p-12 bg-gray-50 bg-opacity-60 transform transition duration-500 ease-in-out uppercase font-bold text-2xl text-black`}>
                <a className="text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/portfolio">
                    Portfolio
                </a>
                <a className="text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/passions">
                    Passions
                </a>
                <a className="text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/resume">
                    Resume
                </a>
                <a className="text-black transition duration-300 ease-in-out hover:text-indigo-600 transform hover:scale-110" href="/contact">
                    Contact
                </a>
                <div className="flex flex-row space-x-5">
                    <a className="uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:opacity-50 transform hover:scale-110" href="https://github.com/choochiutrainz">
                        <img className="lg:px-2 py-3 h-16" src="github-logo.png" alt="GitHub" />
                    </a>
                    <a className="uppercase font-bold text-lg text-black transition duration-300 ease-in-out hover:opacity-50 transform hover:scale-110" href="https://www.linkedin.com/in/choochiutrain">
                        <img className="lg:px-2 py-3 h-16" src="linkedin-logo.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    )
}