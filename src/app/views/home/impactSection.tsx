import React from "react";
import Image from "next/image";

const Impact: React.FC = () => {
    return (
        <section className="py-16 px-6 sm:px-12 bg-primary-light">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl font-heading text-black font-bold text-center mb-8">
                    Our Impact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Side: Impact Statistics */}
                    <div>
                        <h3 className="text-2xl font-bold text-secondary mb-4">
                            Making a Difference Together
                        </h3>
                        <p className="text-gray-700 mb-6">
                            At Humanness, every purchase you make helps us provide food, shelter, and support to those in need. Together, we’ve made a real impact!
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-accentGreen">10,000+</span>
                                <span className="text-gray-800">Meals provided to homeless communities</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-accentGreen">500+</span>
                                <span className="text-gray-800">Families supported with essentials</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <span className="text-3xl font-bold text-accentGreen">200+</span>
                                <span className="text-gray-800">Volunteers working for the cause</span>
                            </li>
                        </ul>
                        <button className="mt-8 px-6 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-secondary-dark transition">
                            Donate Now
                        </button>
                    </div>

                    {/* Right Side: Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/charity-work2.jpg"
                                alt="Volunteers providing meals"

                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/charity-work3.jpg"
                                alt="Team supporting families"

                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/charity-work4.jpg"
                                alt="Charity event"

                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/charity-work.jpg"
                                alt="Children receiving food"
                                fill
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;