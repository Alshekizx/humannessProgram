"use client";

import React from "react";

const CallToAction = () => {
    return (
        <section className="bg-accentGreen py-16 px-4 text-center">
            <div className="max-w-7xl mx-auto text-white">
                {/* Headline */}
                <h2 className="text-4xl font-bold mb-4">
                    Be Part of the Change!
                </h2>

                {/* Subheading */}
                <p className="text-xl mb-8">
                    Support our mission and make an impact today.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-6">
                    <a
                        href="/donate"
                        className="bg-white text-accentGreen font-semibold py-3 px-8 rounded-lg hover:bg-opacity-80 transition duration-300"
                    >
                        Donate Now
                    </a>
                    <a
                        href="/volunteer"
                        className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-accentGreen transition duration-300"
                    >
                        Volunteer with Us
                    </a>
                    <a
                        href="/contact"
                        className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-accentGreen transition duration-300"
                    >
                        Contact Us for Partnerships
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
