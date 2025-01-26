import Image from "next/image";

const MeetTheTeam = () => {
    const teamMembers = [
        {
            name: "Oyinkansola Oluwajana",
            role: "Founder & CEO",
            bio: "Oyinkansola has been the driving force behind Humanness, bringing together a passionate team to support communities in need.",
            image: "/images/oyin.png",
        },

    ];

    const partners = [
        {
            name: "CharityX",
            logo: "/test.jpeg", // Corrected the logo path
            link: "https://charityx.org",
        },
        {
            name: "SponsorY",
            logo: "/test.jpeg", // Corrected the logo path
            link: "https://sponsory.com",
        },
    ];

    return (
        <section className="bg-background-light py-16 px-6 sm:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center text-black mb-8">
                    Meet the Team
                </h2>

                {/* Team Members Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                            <Image
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                                width={128} // Set width and height for optimization
                                height={128}
                            />
                            <h3 className="text-xl font-heading font-bold text-black">{member.name}</h3>
                            <p className="text-sm font-body text-secondary mb-2">{member.role}</p>
                            <p className="text-base font-body text-black">{member.bio}</p>
                        </div>
                    ))}
                </div>

                {/* Partners Section */}
                {partners.length > 0 && (
                    <div className="mb-16">
                        <h3 className="text-2xl font-heading font-bold text-center text-black mb-8">
                            Our Partners & Sponsors
                        </h3>
                        <div className="flex justify-center gap-12">
                            {partners.map((partner, index) => (
                                <a
                                    key={index}
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-32 h-32 flex justify-center items-center bg-white border border-gray-200 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                                >
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-full max-w-full object-contain"
                                        width={128} // Set width and height for optimization
                                        height={128}
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MeetTheTeam;
