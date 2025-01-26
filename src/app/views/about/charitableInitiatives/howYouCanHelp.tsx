"use client";

import Link from "next/link";

const HowYouCanHelp = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-primary">
                    Get Involved
                </h2>
                <p className="mt-4 text-lg text-center text-gray-700 max-w-2xl mx-auto">
                    There are many ways you can make a difference and support our mission. Whether you&apos;re giving your time, contributing financially, or starting a fundraiser, your support helps us make a positive impact on the lives of those who need it the most.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Volunteer Section */}
                    <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-primary">
                            Volunteer Your Time
                        </h3>
                        <p className="mt-4 text-gray-700">
                            Join our network of passionate volunteers and offer your time and skills to help those in need. Whether it&apos;s working directly with communities or supporting our events, your involvement matters.
                        </p>
                        <Link
                            href="/volunteer"
                            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md hover:bg-primary-dark transition"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Donate Section */}
                    <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-primary">
                            Donate Today
                        </h3>
                        <p className="mt-4 text-gray-700">
                            Your donations help fund our projects and provide essential resources to those in need. No matter the amount, every contribution goes a long way in making a difference.
                        </p>
                        <Link
                            href="/donate"
                            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-accentGreen rounded-md hover:bg-accentGreen-dark transition"
                        >
                            Donate Now
                        </Link>
                    </div>

                    {/* Fundraise Section */}
                    <div className="bg-gray-100 rounded-lg p-6 shadow-lg text-center">
                        <h3 className="text-xl font-semibold text-primary">
                            Fundraise for a Cause
                        </h3>
                        <p className="mt-4 text-gray-700">
                            Start a fundraising campaign to support our mission. Rally your friends, family, and community to make a difference together. We provide all the tools you need to get started!
                        </p>
                        <Link
                            href="/fundraise"
                            className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-accentRed rounded-md hover:bg-accentRed-dark transition"
                        >
                            Start Fundraising
                        </Link>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Link
                        href="/get-involved"
                        className="inline-block px-8 py-4 text-xl font-semibold text-white bg-primary rounded-md hover:bg-primary-dark transition"
                    >
                        Explore More Ways to Help
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HowYouCanHelp;