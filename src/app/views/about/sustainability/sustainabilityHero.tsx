"use client";

import React from "react";

const SustainabilityHero = () => {
    return (
        <section
            className="relative h-[500px]  flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/images/charity-work3.jpg')" }}
        >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-7xl md:text-6xl font-bold text-white mb-4">
                    Empowering Communities Through Sustainability
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-6">
                    At Humanness, we are dedicated to creating a better world by promoting sustainable solutions and empowering those in need.
                </p>

                {/* Call-to-Actions */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a
                        href="/sustainability-initiatives"
                        className="bg-accentGreen text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-accentGreen/80 transition duration-300"
                    >
                        Explore Our Initiatives
                    </a>
                    <a
                        href="/donate"
                        className="bg-white text-accentGreen font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                    >
                        Support Our Mission
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SustainabilityHero;