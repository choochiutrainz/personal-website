import Head from 'next/head'

export default function blog() {
    return (
        <div>
            <Head>
                <title>Blog | Wesley Chiu</title>
                <meta property="og:site_name" content="choochiutrain.com" />
                <meta property="og:title" content="Product Management Tips and Insights" />
                <meta property="og:description" content="Sharing my thoughts and philosophy as I go through my learning journey. Let's have a conversation ☕" />
                <meta property="og:image" content="thumbnail.png" />
                <meta property="og:url" content="https://choochiutrain.com/blog" />
            </Head>
            <div id="section1" className="flex flex-row justify-around bg-s31-blue space-x-20">
            <p className="text-2xl text-gray-100 leading-normal">Blog coming soon!</p>
            </div>
        </div>
    )
}