import { FaHeart, FaUsers, FaLeaf, FaEye, FaLightbulb } from "react-icons/fa";

const OurValues = () => {
    const values = [
        {
            icon: <FaHeart className="text-primary text-4xl mb-4" />,
            title: "Compassion",
            description: "Empathy and care guide everything we do, from feeding the homeless to connecting with our supporters.",
        },
        {
            icon: <FaUsers className="text-primary text-4xl mb-4" />,
            title: "Community",
            description: "We foster a sense of belonging and collaboration to create lasting impact.",
        },
        {
            icon: <FaLeaf className="text-primary text-4xl mb-4" />,
            title: "Sustainability",
            description: "Our efforts are rooted in creating long-term, positive change for people and the planet.",
        },
        {
            icon: <FaEye className="text-primary text-4xl mb-4" />,
            title: "Transparency",
            description: "We maintain honesty and openness in all our processes, ensuring trust and accountability.",
        },
        {
            icon: <FaLightbulb className="text-primary text-4xl mb-4" />,
            title: "Empowerment",
            description: "We aim to uplift individuals and communities, enabling them to lead better lives.",
        },
    ];

    return (
        <section className="bg-white py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-black mb-12">
                    What We Stand For
                </h2>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center bg-secondary p-6 rounded-lg shadow-lg"
                        >
                            {value.icon}
                            <h3 className="text-xl font-heading font-bold text-gray-700 mb-2">
                                {value.title}
                            </h3>
                            <p className="text-base font-body text-gray-700 leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurValues;