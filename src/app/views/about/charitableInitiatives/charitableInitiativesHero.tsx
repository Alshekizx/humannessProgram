"use client";

import Link from "next/link";

const CharitableHero = () => {
    return (
        <section className="relative h-[70vh] overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/charity-work4.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
                <h1 className="text-4xl text-white md:text-6xl font-extrabold">
                    Humanness Charitable Initiatives
                </h1>
                <p className="mt-4 text-white text-lg md:text-xl max-w-2xl">
                    Empowering communities, providing support, and making a lasting impact through every product sold.
                </p>

                <div className="mt-8">
                    <Link
                        href="/get-involved"
                        className="px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md hover:bg-primary-dark transition"
                    >
                        Get Involved
                    </Link>
                    <Link
                        href="/about"
                        className="ml-4 px-6 py-3 text-lg font-semibold text-primary bg-white rounded-md hover:bg-gray-200 transition"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CharitableHero;