import React from "react";
import Image from "next/image";

type AboutUsProps = {
    title: string;
    description: string;
    image: string;
    onLearnMore: () => void; // Callback for the "Learn More" button
};

const AboutUs: React.FC<AboutUsProps> = ({ title, description, image, onLearnMore }) => {
    return (
        <section className="bg-gray-50 px-6 sm:px-12">
            <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10">
                {/* Left: Text Content */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-4xl font-heading font-bold text-black mb-6">{title}</h2>
                    <p className="text-lg text-gray-700 mb-6">{description}</p>
                    <button
                        onClick={onLearnMore}
                        className="px-6 py-3 bg-primary text-white font-bold rounded-lg shadow-md hover:bg-primary/90 transition-all"
                    >
                        Learn More
                    </button>
                </div>

                {/* Right: Image */}
                <div className="lg:w-1/2">
                    <div className="relative w-full h-72 lg:h-96">
                        <Image
                            src={image}
                            alt="About Us"
                            fill
                            className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;