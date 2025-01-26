"use client";

import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 object-cover w-full h-full"
                src="/videos/mainHeroVid.mp4" // Replace with your video path
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white">
                    Welcome to Humaness
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">
                    Empowering lives through sustainable products and impactful
                    initiatives. Join us in making a difference.
                </p>

                <div className="mt-8">
                    <Link
                        href="/views/shop/allProducts"
                        className="px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md hover:bg-primary-dark transition"
                    >
                        Shop Now
                    </Link>
                    <Link
                        href="/views/about/ourStory"
                        className="ml-4 px-6 py-3 text-lg font-semibold text-primary bg-white rounded-md hover:bg-gray-200 transition"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;