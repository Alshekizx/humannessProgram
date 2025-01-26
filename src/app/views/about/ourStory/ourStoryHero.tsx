import React from "react";
import Image from "next/image";

const ImpactHero = () => {
    return (
        <section className="relative bg-primary text-white h-[90vh] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/hero-background.jpg" // Replace with your image path
                    alt="Humanness in Action"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black opacity-50" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                    A Journey of Compassion and Purpose
                </h1>
                <p className="text-lg md:text-xl font-body mb-6">
                    How Humanness Turned Passion Into Impact.
                </p>
                <button className="px-6 py-3 bg-tertiary text-black font-bold rounded-lg hover:bg-tertiary2 transition duration-300">
                    Learn More About Us
                </button>
            </div>
        </section>
    );
};

export default ImpactHero;