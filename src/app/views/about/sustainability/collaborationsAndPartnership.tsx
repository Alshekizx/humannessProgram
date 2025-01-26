"use client";

import Image from "next/image";
import React from "react";

const CollaborationsAndPartnerships = () => {
    const partners = [
        {
            name: "Green Future Initiative",
            logo: "/test.jpeg",
            website: "https://greenfuture.org",
        },
        {
            name: "EcoAlliance",
            logo: "/test.jpeg",
            website: "https://ecoalliance.com",
        },
        {
            name: "Sustainably Together",
            logo: "/test.jpeg",
            website: "https://sustainablytogether.org",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Headline */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Our Sustainability Partners
                    </h2>
                    <p className="text-lg text-gray-600">
                        We collaborate with organizations, businesses, and communities to promote sustainability worldwide.
                    </p>
                </div>

                {/* Partner Logos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {partners.map((partner, index) => (
                        <a
                            key={index}
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-6 bg-white border rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="relative w-40 h-16">
                                <Image
                                    src={partner.logo}
                                    alt={`${partner.name} Logo`}
                                    className="object-contain"
                                    fill
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Callout */}
                <div className="text-center">
                    <p className="text-lg text-gray-700 mb-4">
                        Interested in partnering with us?
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CollaborationsAndPartnerships;