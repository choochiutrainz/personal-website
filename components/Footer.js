import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <footer className="w-screen flex flex-col bg-s31-blue justify-center items-center space-y-9 py-12">
                <a className="flex text-3xl text-yellow-300 text-center">Let’s write the next<br className="sm:hidden"/> big success story together.</a>
                <div className="hidden sm:flex flex-row space-x-10 text-yellow-300 text-xl leading-snug">
                    <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/">
                        Home
                    </a>
                    <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/portfolio">
                        Portfolio
                    </a>
                    <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/passions">
                        Passions
                    </a>
                    <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/resume">
                        Resume
                    </a>
                    <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/contact">
                        Contact
                    </a>
                </div>
                <div className="sm:hidden flex flex-col items-center space-y-3 text-yellow-300 text-xl">
                    <div className="flex-row space-x-10">
                        <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/">
                            Home
                        </a>
                        <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/portfolio">
                            Portfolio
                        </a>
                        <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/passions">
                            Passions
                        </a>
                    </div>
                    <div className="flex-row space-x-10">
                        <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/resume">
                            Resume
                        </a>
                        <a className="transition duration-300 ease-in-out hover:text-gray-100 transform hover:scale-110" href="/contact">
                            Contact
                        </a>
                    </div>
                </div>
                <p className="text-center text-gray-300 text-sm">Powered by <a className="underline transition duration-300 ease-in-out hover:text-gray-100" href="https://nextjs.org/">Next.js</a> and <a className="underline transition duration-300 ease-in-out hover:text-gray-100" href="https://tailwindcss.com/">Tailwind CSS.</a> See the code on <a className="underline transition duration-300 ease-in-out hover:text-gray-100" href="https://github.com/choochiutrainz/choochiutrainz.github.io">GitHub!</a><br/>I appreciate any feedback to make this website better 🤗</p>
            </footer>
        </div>
    )
}