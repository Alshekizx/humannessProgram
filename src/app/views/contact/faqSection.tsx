"use client";

const FAQSection = () => {
    const faqs = [
        {
            question: "How can I get involved with Humanness?",
            answer:
                "You can get involved by volunteering, donating, or starting your own fundraising campaign. Visit our 'Get Involved' page for more details.",
        },
        {
            question: "Where does my donation go?",
            answer:
                "Your donations directly support our charitable initiatives, such as feeding the homeless, providing educational resources, and promoting food security across Africa.",
        },
        {
            question: "How can I start a fundraiser?",
            answer:
                "To start a fundraiser, you can contact us through our 'Get Involved' page or email us at info@humanness.org for guidance and support.",
        },
    ];

    return (
        <section className="py-16 px-6 sm:px-12 bg-gray-100">
            <div className="max-w-7xl mx-auto ">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
                    Have questions? Check out our FAQs below for answers to some of the
                    most common inquiries about Humanness.
                </p>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-lg font-semibold text-primary">
                                {faq.question}
                            </h3>
                            <p className="mt-2 text-gray-700">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;