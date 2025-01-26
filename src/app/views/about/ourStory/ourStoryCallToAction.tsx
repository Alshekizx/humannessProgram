import Link from "next/link";

const CallToAction = () => {
    return (
        <section className="bg-primary py-16 px-6 sm:px-12 text-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8">
                    Join Us on This Journey
                </h2>
                <p className="text-lg sm:text-xl font-body mb-8">
                    Your support can make a lasting impact. Whether you shop, volunteer, or donate, together we can change lives.
                </p>
                <div className="flex justify-center gap-8">
                    <Link
                        href="/shop"
                        className="bg-accentGreen text-white py-3 px-8 rounded-lg shadow-md hover:bg-accentGreen/80 transition-colors duration-300"
                    >
                        Shop to Make a Difference
                    </Link>
                    <Link
                        href="/volunteer"
                        className="bg-accentRed text-white py-3 px-8 rounded-lg shadow-md hover:bg-accentRed/80 transition-colors duration-300"
                    >
                        Volunteer With Us
                    </Link>
                    <Link
                        href="/donate"
                        className="bg-secondary text-white py-3 px-8 rounded-lg shadow-md hover:bg-secondary/80 transition-colors duration-300"
                    >
                        Donate Today
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;