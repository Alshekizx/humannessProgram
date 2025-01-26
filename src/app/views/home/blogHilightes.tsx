import React from "react";

const BlogHighlights = () => {
    // Example blog data
    const blogPosts = [
        {
            id: 1,
            title: "How Your Purchases Make a Difference",
            snippet:
                "Every item you buy helps provide meals for the homeless in Africa. Learn more about the impact of your support.",
            link: "/blog/how-your-purchases-make-a-difference",
        },
        {
            id: 2,
            title: "5 Fashion Tips for a Sustainable Wardrobe",
            snippet:
                "Discover how you can stay stylish while making eco-friendly choices. It's easier than you think!",
            link: "/blog/fashion-tips-sustainable-wardrobe",
        },
        {
            id: 3,
            title: "Our Latest Charity Events",
            snippet:
                "Take a look at the incredible events we've hosted recently to support our cause and how you can get involved.",
            link: "/blog/latest-charity-events",
        },
    ];

    return (
        <section className=" py-16 px-6 sm:px-12">
            <div className="container mx-auto max-w-7xl text-center">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-black">
                    Blog Highlights
                </h2>
                <p className="mt-4 text-lg sm:text-xl text-gray-600">
                    Stories, fashion tips, and updates from our community.
                </p>

                {/* Blog Posts */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-secondary rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
                        >
                            <h3 className="text-xl font-heading font-bold text-white">
                                {post.title}
                            </h3>
                            <p className="mt-2 text-sm text-gray-700">{post.snippet}</p>
                            <a
                                href={post.link}
                                className="mt-4 inline-block text-accentGreen font-semibold hover:underline"
                            >
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogHighlights;