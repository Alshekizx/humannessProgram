const Introduction = () => {
    return (
        <section className="bg-white text-black py-[150px] px-6 sm:px-12">
            <div className="max-w-4xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
                    Who We Are
                </h2>

                {/* Content */}
                <p className="text-lg sm:text-xl font-body leading-relaxed mb-6">
                    At <span className="font-bold text-primary">Humanness</span>, we are driven by a mission to make the world a better place through compassion and purposeful action.
                    Our vision is to empower communities, inspire change, and create sustainable solutions for those in need.
                </p>
                <p className="text-lg sm:text-xl font-body leading-relaxed">
                    We’ve built a unique model where <span className="font-bold text-secondary">selling branded apparel</span>
                    directly supports our feeding programs for the homeless across Africa. Every purchase you make helps feed and uplift lives,
                    turning everyday actions into extraordinary impact.
                </p>
            </div>
        </section>
    );
};

export default Introduction;