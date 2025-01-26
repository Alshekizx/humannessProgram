"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactInformation = () => {
    return (
        <section className="py-16 px-6 sm:px-12 bg-gray-100">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">
                    Our Contact Details
                </h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
                    Reach out to us for inquiries, partnerships, or general feedback. We&apos;re here to help!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Phone Number */}
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                        <FaPhoneAlt className="text-primary text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-primary">Phone Number</h3>
                        <p className="text-gray-700 mt-2">+234 123 456 7890</p>
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                        <FaEnvelope className="text-primary text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-primary">Email Address</h3>
                        <p className="text-gray-700 mt-2">info@humanness.org</p>
                    </div>

                    {/* Physical Address */}
                    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md">
                        <FaMapMarkerAlt className="text-primary text-4xl mb-4" />
                        <h3 className="text-lg font-semibold text-primary">Physical Address</h3>
                        <p className="text-gray-700 mt-2">
                            123 Humanness Avenue, Abuja, Nigeria
                        </p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-12 text-center">
                    <h3 className="text-lg font-semibold text-primary mb-4">
                        Follow Us on Social Media
                    </h3>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://facebook.com/humanness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-3xl hover:text-primary-dark"
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href="https://instagram.com/humanness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-3xl hover:text-primary-dark"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://twitter.com/humanness"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-3xl hover:text-primary-dark"
                        >
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInformation;