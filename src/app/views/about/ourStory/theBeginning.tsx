const TheBeginning = () => {
    return (
        <section className="bg-primary text-white py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-8">
                    Where It All Started
                </h2>

                {/* Content */}
                <div className="text-lg sm:text-xl font-body leading-relaxed space-y-6">
                    <p>
                        Humanness began with a simple yet profound realization: the power of community and compassion to transform lives. Founded in <strong>2021</strong>, Humanness was born out of the desire to address two pressing challenges—providing sustainable meals to the homeless and empowering individuals to give back meaningfully.
                    </p>
                    <p>
                        Inspired by the struggles of underserved communities in Africa, our founder envisioned a unique approach—merging creativity, fashion, and philanthropy. What started as a small idea grew into a bold initiative to sell branded apparel and use the proceeds to fund feeding programs.
                    </p>
                    <p>
                        From humble beginnings, Humanness has reached key milestones, making a tangible difference in the lives of many. Join us on this journey as we continue to pursue our vision of a world where every individual thrives.
                    </p>
                </div>

                {/* Timeline */}
                <div className="mt-10">
                    <h3 className="text-2xl font-heading font-bold mb-6">Our Milestones</h3>
                    <div className="space-y-8">
                        {/* Milestone 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-bold text-lg">2021 - Humanness Founded</h4>
                                <p className="text-sm">
                                    Started with a vision to combine branded products with social impact, addressing the needs of the homeless.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-bold text-lg">2022 - First Feeding Program</h4>
                                <p className="text-sm">
                                    Organized our first feeding program, reaching over 500 individuals in local communities.
                                </p>
                            </div>
                        </div>

                        {/* Milestone 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="w-3 h-3 bg-white rounded-full mt-2"></div>
                            <div>
                                <h4 className="font-bold text-lg">2023 - Expanded Reach</h4>
                                <p className="text-sm">
                                    Scaled operations to multiple cities across Africa, impacting thousands of lives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheBeginning;