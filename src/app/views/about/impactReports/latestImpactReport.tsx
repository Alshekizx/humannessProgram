"use client";

import Image from "next/image";
import React from "react";

const LatestImpactReport = () => {
    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary mb-4">
                    Our Latest Impact Report
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-700 mb-8">
                    Explore our detailed breakdown of initiatives, expenses, and success
                    stories from the past year.
                </p>

                {/* Download Button */}
                <a
                    href="/path/to/impact-report-2024.pdf"
                    download
                    className="inline-block bg-accentGreen text-white font-bold py-3 px-6 rounded-md shadow-lg hover:bg-accentGreen/90 transition duration-300"
                >
                    Download 2024 Impact Report
                </a>

                {/* Preview Section */}
                <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Report Cover Preview */}
                    <div className="w-full md:w-1/3 relative h-64">
                        <Image
                            src="/test.jpeg"
                            alt="Impact Report Cover"
                            className="rounded-lg shadow-lg object-cover"
                            fill
                            priority // Ensures the image loads faster
                        />
                    </div>

                    {/* Highlights */}
                    <div className="w-full md:w-2/3 text-left">
                        <h3 className="text-2xl font-semibold text-primary mb-4">
                            Key Highlights
                        </h3>
                        <ul className="text-gray-700 space-y-3">
                            <li>
                                <span className="font-bold text-accentGreen">✔</span> Over
                                250,000 meals provided in 2024.
                            </li>
                            <li>
                                <span className="font-bold text-accentGreen">✔</span> Reached 50+
                                communities across Africa.
                            </li>
                            <li>
                                <span className="font-bold text-accentGreen">✔</span> Engaged
                                5,000+ active volunteers.
                            </li>
                            <li>
                                <span className="font-bold text-accentGreen">✔</span> Donated
                                10,000+ branded apparel items.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestImpactReport;