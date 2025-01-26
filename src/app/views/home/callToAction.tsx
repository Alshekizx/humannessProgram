import React from "react";

const CallToActionBanner = () => {
    return (
        <section className="bg-tertiary py-16 px-5 sm:px-10">
            <div className="max-w-4xl mx-auto text-center">
                {/* Bold Message */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
                    Shop Now to Make a Difference!
                </h2>
                <p className="mt-4 text-lg sm:text-xl text-white">
                    Every purchase helps feed the homeless in Africa. Your support makes a real impact.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/products"
                        className="px-6 py-3 bg-accentGreen text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Shop Now
                    </a>
                    <a
                        href="/donate"
                        className="px-6 py-3 bg-accentRed text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Donate
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToActionBanner;
