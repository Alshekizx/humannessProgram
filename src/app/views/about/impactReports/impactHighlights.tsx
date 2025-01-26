"use client";

import { motion } from "framer-motion";
import { FaUtensils, FaUsers, FaTshirt, FaMapMarkerAlt } from "react-icons/fa";

interface Highlight {
    icon: React.ReactNode;
    title: string;
    value: string;
    description: string;
}

const highlights: Highlight[] = [
    {
        icon: <FaUtensils size={40} className="text-secondary" />,
        title: "Meals Provided",
        value: "250,000+",
        description: "meals served in 2024",
    },
    {
        icon: <FaMapMarkerAlt size={40} className="text-secondary" />,
        title: "Communities Reached",
        value: "50+",
        description: "communities impacted across Africa",
    },
    {
        icon: <FaUsers size={40} className="text-secondary" />,
        title: "Volunteers Engaged",
        value: "5,000+",
        description: "active volunteers",
    },
    {
        icon: <FaTshirt size={40} className="text-secondary" />,
        title: "Clothing Distributed",
        value: "10,000+",
        description: "branded apparel items donated",
    },
];

const ImpactHighlights: React.FC = () => {
    return (
        <section className="bg-light py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Impact Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{highlight.icon}</div>
                            <h3 className="text-xl font-semibold text-primary mb-2">
                                {highlight.title}
                            </h3>
                            <motion.p
                                className="text-4xl font-bold text-tertiary"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                }}
                            >
                                {highlight.value}
                            </motion.p>
                            <p className="text-gray-600 mt-2">{highlight.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactHighlights;
