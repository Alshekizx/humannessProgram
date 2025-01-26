import React from "react";

const SocialMediaFeed = () => {
    return (
        <section className="bg-secondary py-10 px-5 sm:px-10">
            <div className="max-w-5xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    Follow Us on Social Media
                </h2>
                <p className="mt-2 text-sm sm:text-base text-primary">
                    Engage with us and see how your contributions are making an impact.
                </p>

                {/* Embedded Social Media Posts */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Replace iframe src with actual embedded post URLs */}
                    <iframe
                        src="https://www.instagram.com/humannessprog/" // Example URL
                        className="w-full h-72 rounded-lg border border-gray-300"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title="Instagram Post 1"
                    ></iframe>
                    <iframe
                        src="https://www.instagram.com/humannessprog/" // Example URL
                        className="w-full h-72 rounded-lg border border-gray-300"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title="Instagram Post 2"
                    ></iframe>
                    <iframe
                        src="https://www.instagram.com/humannessprog/" // Example URL
                        className="w-full h-72 rounded-lg border border-gray-300"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        allowFullScreen
                        title="Instagram Post 3"
                    ></iframe>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex justify-center gap-6">
                    <a
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary text-lg"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://www.facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary text-lg"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary text-lg"
                    >
                        Twitter
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaFeed;