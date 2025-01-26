"use client";

import Link from "next/link";

interface HeroSectionProps {
    headline: string;
    subheading: string;
    backgroundImage: string;
    ctaButtons: { label: string; link: string }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
    headline,
    subheading,
    backgroundImage,
    ctaButtons,
}) => {
    return (
        <section
            className="relative bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${backgroundImage})`, height: "60vh" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">{headline}</h1>
                <p className="mt-4 text-lg sm:text-xl lg:text-2xl">{subheading}</p>
                <div className="flex mt-6 space-x-4">
                    {ctaButtons.map((button, index) => (
                        <Link
                            key={index}
                            href={button.link}
                            className="px-6 py-3 bg-secondary text-white rounded-md transition duration-300 hover:bg-tertiary hover:text-black"
                        >
                            {button.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
