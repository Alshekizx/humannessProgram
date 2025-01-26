"use client";

import React from "react";
import { FaBreadSlice, FaHandsHelping, FaGlobeAfrica, FaSmileBeam, FaHandHoldingUsd } from "react-icons/fa";

const SustainabilityInitiatives = () => {
    const initiatives = [
        {
            icon: <FaBreadSlice className="text-5xl text-accentGreen mb-4" />,
            title: "Providing Daily Meals",
            description: "We ensure that homeless individuals have access to nutritious meals every day, funded by your purchases.",
        },
        {
            icon: <FaHandsHelping className="text-5xl text-accentGreen mb-4" />,
            title: "Building Support Networks",
            description: "Our efforts focus on partnering with local organizations to provide resources and support systems for those in need.",
        },
        {
            icon: <FaGlobeAfrica className="text-5xl text-accentGreen mb-4" />,
            title: "Empowering African Communities",
            description: "We work to uplift communities in Africa by addressing hunger and providing sustainable opportunities.",
        },
        {
            icon: <FaSmileBeam className="text-5xl text-accentGreen mb-4" />,
            title: "Spreading Hope and Joy",
            description: "Every item purchased brings a smile to someone's face and hope for a brighter future.",
        },
        {
            icon: <FaHandHoldingUsd className="text-5xl text-accentGreen mb-4" />,
            title: "Funding Change",
            description: "Profits from our clothing sales directly support feeding programs and initiatives for the homeless.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">Our Core Initiatives</h2>
                    <p className="text-lg text-gray-600">
                        At Humanness, we strive to make a lasting impact through initiatives that prioritize humanity, compassion, and sustainability.
                    </p>
                </div>

                {/* Initiatives Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {initiatives.map((initiative, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                            {/* Icon */}
                            {initiative.icon}
                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{initiative.title}</h3>
                            {/* Description */}
                            <p className="text-gray-500">{initiative.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SustainabilityInitiatives;