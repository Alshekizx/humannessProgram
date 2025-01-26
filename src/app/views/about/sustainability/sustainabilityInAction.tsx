"use client";

import Image from "next/image";
import React from "react";

const SustainabilityInAction = () => {
    const projects = [
        {
            title: "Feeding the Homeless",
            description: "Through our charitable initiatives, we provide meals and basic necessities to homeless individuals across Africa, ensuring that no one goes to bed hungry.",
            image: "/images/charity-work.jpg",
        },
        {
            title: "Branded Clothing for Change",
            description: "Our sustainable clothing line is designed to fund impactful initiatives. Each purchase directly supports feeding programs and community outreach efforts.",
            image: "/images/menCloth.jpg",
        },
        {
            title: "Community Empowerment Workshops",
            description: "We host workshops to empower local communities with skills like urban farming, entrepreneurship, and sustainable living, creating a brighter future for all.",
            image: "/images/charity-work.jpg",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        What We’re Doing Right Now
                    </h2>
                    <p className="text-lg text-gray-600">
                        Dive into our ongoing sustainability projects, and see how we’re actively making a positive impact.
                    </p>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                                width={500}
                                height={300}
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-700 mb-4">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SustainabilityInAction;