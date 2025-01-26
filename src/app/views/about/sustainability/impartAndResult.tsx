"use client";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ImpactAndResults = () => {
    return (
        <section className="py-16 bg-white px-4">
            <div className="max-w-7xl mx-auto">
                {/* Headline and Subheading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Our Impact
                    </h2>
                    <p className="text-lg text-gray-600">
                        See how far we’ve come in making a difference.
                    </p>
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-accentGreen mb-2">
                            12K+
                        </h3>
                        <p className="text-gray-600">
                            Meals provided to the homeless across Africa.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-accentGreen mb-2">
                            85%
                        </h3>
                        <p className="text-gray-600">
                            Recyclable materials used in our products.
                        </p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-5xl font-bold text-accentGreen mb-2">
                            150+
                        </h3>
                        <p className="text-gray-600">
                            Sustainable partnerships formed globally.
                        </p>
                    </div>
                </div>

                {/* Case Studies */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                        Case Studies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Case Study 1 */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Feeding Hope Initiative
                            </h4>
                            <p className="text-gray-600">
                                In 2024, we partnered with local communities to
                                provide over 5,000 meals to homeless individuals,
                                significantly reducing food insecurity in urban
                                areas.
                            </p>
                        </div>
                        {/* Case Study 2 */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                                Eco-friendly Merchandise
                            </h4>
                            <p className="text-gray-600">
                                By transitioning to 85% recyclable materials in
                                our branded clothing, we reduced waste and
                                inspired others to embrace sustainability.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                        Testimonials
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Testimonial 1 */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <div className="flex items-start gap-4">
                                <FaQuoteLeft className="text-accentGreen text-3xl" />
                                <p className="text-gray-600 italic">
                                    &quot;Humanness has not only provided meals but
                                    also restored dignity to countless lives. Their
                                    work is truly transformative.&quot;
                                </p>
                            </div>
                            <p className="text-gray-700 font-semibold mt-4">
                                — Jane Doe, Community Leader
                            </p>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="p-6 border rounded-lg shadow-md">
                            <div className="flex items-start gap-4">
                                <FaQuoteLeft className="text-accentGreen text-3xl" />
                                <p className="text-gray-600 italic">
                                    &quot;Their commitment to sustainability and
                                    ethical practices is inspiring. They set a
                                    benchmark for others to follow.&quot;
                                </p>
                            </div>
                            <p className="text-gray-700 font-semibold mt-4">
                                — John Smith, Industry Expert
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactAndResults;