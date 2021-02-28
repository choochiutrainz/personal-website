import Head from 'next/head'

const blog = () => {
    return (
        <div>
            <Head>
                <title>Passions - Wesley "Chewy" Chiu</title>
                <meta property="og:site_name" content={`Wesley "Chewy" Chiu`} />
                <meta property="og:title" content={`Blog - Wesley "Chewy" Chiu`} />
                <meta property="og:description" content="Sharing my thoughts and philosophy as I go through my learning journey. Let's have a conversation ☕" />
                <meta property="og:image" content="" />
                <meta property="og:url" content="https://choochiutrain.com/blog" />
            </Head>
            <div id="section1" className="flex flex-row justify-around bg-s31-blue space-x-20">
            <p className="text-2xl text-gray-100 leading-normal">Blog coming soon!</p>
            </div>
        </div>
    )
}

export default blog