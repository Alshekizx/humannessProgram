import Image from "next/image";

const SustainabilityCommitment = () => {
    return (
        <section className="bg-background-light py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-black mb-8">
                    A Sustainable Future
                </h2>

                {/* Content Section */}
                <div className="mb-16">
                    <p className="text-lg font-body text-black mb-8">
                        At <strong>Humanness</strong>, we understand that true impact goes beyond just providing meals. We are committed to building a sustainable future, not only through our humanitarian work but also in our daily operations and products.&apos;
                    </p>

                    <h3 className="text-2xl font-heading font-bold text-black mb-4">
                        Eco-Friendly Materials
                    </h3>
                    <p className="text-base font-body text-black mb-8">
                        We are dedicated to using eco-friendly materials in all of our branded apparel. From sustainably sourced fabrics to biodegradable packaging, every product we create is designed with the planet in mind. By working with ethical suppliers, we ensure that the materials we use have a minimal impact on the environment.
                    </p>

                    <h3 className="text-2xl font-heading font-bold text-black mb-4">
                        Balancing Growth with Responsibility
                    </h3>
                    <p className="text-base font-body text-black mb-8">
                        While we continue to expand and grow our business to reach more communities in need, we also prioritize our environmental responsibility. We believe that business growth and sustainability can go hand in hand. Our team is continuously exploring innovative solutions to reduce our carbon footprint, including optimizing our supply chain and reducing waste across all aspects of our operation.
                    </p>

                    <h3 className="text-2xl font-heading font-bold text-black mb-4">
                        Green Initiatives
                    </h3>
                    <ul className="list-disc pl-8 text-base font-body text-black mb-8">
                        <li><strong>Sustainable Production:</strong> We work closely with manufacturers who share our commitment to sustainability, ensuring that all our products are produced in eco-friendly factories with fair labor practices.</li>
                        <li><strong>Carbon Offset Programs:</strong> We&apos;re actively involved in carbon offset programs, investing in renewable energy projects and reforestation efforts to reduce our environmental impact.</li>
                        <li><strong>Recycling and Waste Reduction:</strong> We have implemented a strict recycling policy within our offices and are working to ensure that our product packaging is fully recyclable or compostable.</li>
                    </ul>

                    <h3 className="text-2xl font-heading font-bold text-black mb-4">
                        Looking Ahead
                    </h3>
                    <p className="text-base font-body text-black">
                        We believe that sustainability is a journey, and we are committed to continuously improving our practices. As we scale, we will continue to challenge ourselves to find new ways to reduce our environmental impact, ensuring a sustainable future for the next generations.
                    </p>
                </div>

                {/* Optional Image Section */}
                <div className="relative w-full h-64 sm:h-96 rounded-lg overflow-hidden">
                    <Image
                        src="/test.jpeg"
                        alt="Sustainable Materials"
                        className="w-full h-full object-cover rounded-lg"
                        fill
                    />
                </div>
            </div>
        </section>
    );
};

export default SustainabilityCommitment;