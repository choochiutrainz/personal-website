import Head from 'next/head'
import { Formik } from 'formik'

const contact = () => {
    return (
        <div>
            <Head>
                <title>Contact Me - Wesley "Chewy" Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Hire a Product Manager to broaden the art of possible" />
                <meta property="og:description" content="All great things start as one small thing. Let's chat and make it happen 👋🏼" />
                <meta property="og:image" content="thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/contact" />
            </Head>
            <div id="section1" className="w-screen flex flex-col justify-center items-center bg-s31-blue space-y-10 py-16">
                <h1 className="text-center text-3xl text-yellow-300">Feel free to reach out if you have any questions or comments about<br/>what I have to offer. Also, you can always just send me a friendly hello! 👋🏼</h1>
                <form action="#" className="bg-gray-100 shadow-sm rounded-md p-8">
                    <p className="block mb-2 text-gray-700 font-bold capitalize">full name *</p>
                    <p className="block mb-2 text-sm text-gray-500">I always like to know who I'm speaking with 🙂</p>
                    <div className="flex flex-row justify-center space-x-4">
                        <div className="mb-6">
                            <input type="text" id="name" maxlength="50" className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="John" required/>
                            <label for="first-name" className="text-sm text-gray-500 capitalize">first name</label>
                        </div>
                        <div className="mb-6">
                            <input type="text" id="name" maxlength="50" className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="Doe" required/>
                            <label for="first-name" className="text-sm text-gray-500 capitalize">last name</label>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label for="email" className="mb-3 block text-gray-700 font-bold capitalize">email address *</label>
                        <input type="email" id="email" maxlength="50" className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="john.doe@company.com" required/>
                    </div>
                    <div className="mb-8">
                        <label for="message" className="block mb-2 text-gray-700 font-bold capitalize">your message *</label>
                        <p className="block mb-2 text-sm text-gray-500">Send something awesome my way! 🤟</p>
                        <textarea rows="5" id="message" className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" required />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="inline-flex items-center bg-indigo-500 text-gray-100 font-bold py-2 px-4 my-4 rounded-md transition duration-300 ease-in-out hover:bg-indigo-600 transform hover:-translate-y-1 hover:scale-110">
                            <span className="pr-1">Send Message</span>
                            <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
            <img className="w-full bg-center" src="map.png" alt="location" />
        </div>
    )
}

export default contact