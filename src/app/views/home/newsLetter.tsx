import React from "react";

const NewsletterSignup = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted!");
    };

    return (
        <section className="bg-primary py-10 px-5 sm:px-10">
            <div className="max-w-3xl mx-auto text-center">
                {/* Title and Description */}
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Stay Connected
                </h2>
                <p className="mt-2 text-sm sm:text-base text-secondary">
                    Get updates on new arrivals and learn how your purchases make an impact.
                </p>
                {/* Signup Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        className="w-full sm:w-auto px-4 py-2 rounded-md bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 bg-accentGreen text-white font-bold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewsletterSignup;