const MissionAndVision = () => {
    return (
        <section className="bg-secondary text-white py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-8">
                    Mission and Vision
                </h2>

                {/* Mission Statement */}
                <div className="mb-12">
                    <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                    <p className="text-lg sm:text-xl font-body leading-relaxed">
                        To transform lives by creating sustainable solutions for homelessness through innovation, compassion, and purpose-driven branding. We aim to empower communities by providing meals funded by ethically produced branded apparel.
                    </p>
                </div>

                {/* Vision Statement */}
                <div>
                    <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
                    <p className="text-lg sm:text-xl font-body leading-relaxed">
                        A world where no one goes hungry, and individuals everywhere have the opportunity to thrive. We aspire to redefine how businesses give back, creating a global community united by compassion and impactful action.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionAndVision;