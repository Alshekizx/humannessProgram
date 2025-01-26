"use client";


import Link from "next/link";

const ContactHero = () => {
    return (
        <section
            className="relative h-[70vh] bg-cover bg-primary bg-no-repeat"

        >
            <div className="absolute inset-0 bg-black bg-opacity-70"></div> {/* Overlay */}

            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    Get in Touch with Us
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl">
                    We’d love to hear from you!
                </p>

                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md hover:bg-primary-dark transition"
                    >
                        Send a Message
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;