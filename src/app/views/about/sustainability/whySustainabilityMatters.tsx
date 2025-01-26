"use client";

import React from "react";
import { FaUtensils, FaTshirt, FaHandsHelping, FaSeedling } from "react-icons/fa";

const WhySustainabilityMatters = () => {
    return (
        <section className="py-16 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Headline */}
                <h2 className="text-4xl font-bold text-primary mb-6">
                    Why We Care
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600 mb-12">
                    At Humanness, our mission goes beyond selling clothes. We are dedicated to feeding the homeless in Africa through the profits from our branded apparel, while promoting sustainability, ethical practices, and positive change for communities and the planet.
                </p>

                {/* Icons and Core Areas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Icon Card 1 */}
                    <div className="flex flex-col items-center text-center">
                        <FaUtensils className="text-4xl text-accentGreen mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Feeding the Homeless
                        </h3>
                        <p className="text-gray-500">
                            Providing meals and support to those in need, creating a ripple of hope and kindness.
                        </p>
                    </div>

                    {/* Icon Card 2 */}
                    <div className="flex flex-col items-center text-center">
                        <FaTshirt className="text-4xl text-accentGreen mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Purpose-Driven Apparel
                        </h3>
                        <p className="text-gray-500">
                            Designing branded clothing that inspires and fuels our mission to make a difference.
                        </p>
                    </div>

                    {/* Icon Card 3 */}
                    <div className="flex flex-col items-center text-center">
                        <FaHandsHelping className="text-4xl text-accentGreen mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Community Support
                        </h3>
                        <p className="text-gray-500">
                            Collaborating with local communities to empower lives and provide essential resources.
                        </p>
                    </div>

                    {/* Icon Card 4 */}
                    <div className="flex flex-col items-center text-center">
                        <FaSeedling className="text-4xl text-accentGreen mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            Sustainability Matters
                        </h3>
                        <p className="text-gray-500">
                            Upholding eco-friendly practices to ensure a better future for our planet and its people.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhySustainabilityMatters;