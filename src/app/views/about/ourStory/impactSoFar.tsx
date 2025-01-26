import CountUp from "react-countup";

const ImpactOverYears = () => {
    const stats = [
        { number: 50000, label: "Meals Provided" }, // Number as a value, not a string
        { number: 20, label: "Communities Supported" },
        { number: 10000, label: "Lives Touched" },
    ];

    const testimonials = [
        {
            quote: "Humanness gave me a chance to smile again. Their support changed my life.",
            author: "Adebayo, Lagos, Nigeria",
        },
        {
            quote: "Seeing my community receive such love and care has been truly heartwarming.",
            author: "Fatima, Kano, Nigeria",
        },
    ];

    return (
        <section className="bg-background-light py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-black mb-8">
                    Our Impact So Far
                </h2>

                {/* Stats Section */}
                <div className="flex flex-col sm:flex-row justify-center gap-12 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Animated Number */}
                            <span className="text-4xl font-bold text-primary">
                                <CountUp start={0} end={stat.number} duration={3} separator="," />
                                {/* Add the plus sign outside of CountUp */}
                                <span className="text-2xl">+</span>
                            </span>
                            <span className="text-lg font-body text-black">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
                        >
                            <p className="text-base font-body italic text-black mb-4">
                                {testimonial.quote}
                            </p>
                            <span className="text-sm font-body text-secondary">
                                - {testimonial.author}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Image/Video Section */}
                <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.youtube.com/embed/D6U5ea9SGRc"
                        className="w-full h-full rounded-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};

export default ImpactOverYears;