"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedInitiatives = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-primary">
                    Highlighted Projects
                </h2>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/charity-work2.jpg" // Replace with your image path
                                alt="Project 1"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary">
                                Feed The Homeless Initiative
                            </h3>
                            <p className="mt-4 text-gray-700">
                                Our Feed The Homeless Initiative provides essential meals and support to
                                the homeless communities across major cities in Africa. With every item
                                sold, a portion of the proceeds goes directly into feeding the most vulnerable.
                            </p>
                            <Link
                                href="/about/feed-the-homeless"
                                className="mt-4 inline-block text-primary font-semibold hover:text-primary-dark"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/charity-work4.jpg" // Replace with your image path
                                alt="Project 2"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary">
                                Education Empowerment Program
                            </h3>
                            <p className="mt-4 text-gray-700">
                                Our Education Empowerment Program focuses on providing educational
                                resources and scholarships to underprivileged children, empowering the next
                                generation with knowledge and opportunity.
                            </p>
                            <Link
                                href="/about/education-empowerment"
                                className="mt-4 inline-block text-primary font-semibold hover:text-primary-dark"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative w-full h-48">
                            <Image
                                src="/images/charity-work3.jpg" // Replace with your image path
                                alt="Project 3"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary">
                                Sustainable Food Security
                            </h3>
                            <p className="mt-4 text-gray-700">
                                We are working towards promoting sustainable food security by supporting
                                local farms, providing resources, and ensuring that fresh, healthy food
                                reaches those in need across the continent.
                            </p>
                            <Link
                                href="/about/sustainable-food-security"
                                className="mt-4 inline-block text-primary font-semibold hover:text-primary-dark"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedInitiatives;