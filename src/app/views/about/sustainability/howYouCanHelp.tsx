"use client";

import React from "react";

const HowYouCanHelp = () => {
    return (
        <section className="py-16 bg-primary text-white px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Headline */}
                <h2 className="text-4xl font-bold mb-6">Join Us in Our Sustainability Mission</h2>
                <p className="text-lg mb-12">
                    Together, we can make a meaningful difference. Here are a few ways you can get involved in our sustainability efforts:
                </p>

                {/* Actionable Ways to Help */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Volunteer */}
                    <div className="bg-white text-primary p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Volunteer</h3>
                        <p className="text-gray-600 mb-4">
                            Join our environmental programs and help us take action in communities, organize clean-ups, plant trees, and more!
                        </p>
                        <a
                            href="/volunteer"
                            className="inline-block bg-accentGreen text-white font-semibold py-3 px-6 rounded-lg hover:bg-accentGreen-dark transition"
                        >
                            Volunteer
                        </a>
                    </div>

                    {/* Donate */}
                    <div className="bg-white text-primary p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Donate</h3>
                        <p className="text-gray-600 mb-4">
                            Support our green projects and initiatives by donating to fund sustainable practices, renewable energy projects, and more!
                        </p>
                        <a
                            href="/donate"
                            className="inline-block bg-accentGreen text-white font-semibold py-3 px-6 rounded-lg hover:bg-accentGreen-dark transition"
                        >
                            Donate
                        </a>
                    </div>

                    {/* Adopt Sustainable Practices */}
                    <div className="bg-white text-primary p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold mb-4">Adopt Sustainable Practices</h3>
                        <p className="text-gray-600 mb-4">
                            You can make a big impact by adopting eco-friendly habits in your daily life or business operations.
                        </p>
                        <a
                            href="/learn-more"
                            className="inline-block bg-accentGreen text-white font-semibold py-3 px-6 rounded-lg hover:bg-accentGreen-dark transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowYouCanHelp;