import React from "react";
import { FaLeaf, FaHandsHelping, FaTshirt } from "react-icons/fa";

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const benefits: Benefit[] = [
    {
        icon: <FaLeaf className="text-primary text-4xl mb-4" />,
        title: "Ethical & Sustainable Fashion",
        description: "We prioritize eco-friendly materials and ethical production processes to protect the environment.",
    },
    {
        icon: <FaHandsHelping className="text-primary text-4xl mb-4" />,
        title: "Profits Support Charity Work",
        description: "Every purchase helps fund initiatives to feed the homeless in Africa.",
    },
    {
        icon: <FaTshirt className="text-primary text-4xl mb-4" />,
        title: "High-Quality Products",
        description: "Our products are crafted with care, ensuring durability and comfort.",
    },
];

const Benefits: React.FC = () => {
    return (
        <section className=" py-16 px-6 sm:px-12">
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-black">Why Choose Us?</h2>
                    <p className="text-gray-700 mt-4">
                        Discover what makes Humanness a unique and impactful choice.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="p-6 bg-gray-50 rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
                        >
                            {benefit.icon}
                            <h3 className="text-xl font-semibold text-black mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;