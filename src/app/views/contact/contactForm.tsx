"use client";

const ContactForm = () => {
    return (
        <section className="py-16 px-6 sm:px-12 bg-white">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">
                    Send Us a Message
                </h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
                    Have any questions, feedback, or suggestions? Fill out the form below, and we’ll get back to you as soon as possible.
                </p>

                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900"
                            placeholder="Your Name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900"
                            placeholder="yourname@example.com"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary text-gray-900"
                            placeholder="Write your message here..."
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center px-6 py-3 text-white bg-primary font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;