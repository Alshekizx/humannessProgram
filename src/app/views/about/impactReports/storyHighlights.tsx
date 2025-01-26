"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoryHighlights = () => {
    const stories = [
        {
            id: 1,
            image: "/test.jpeg",
            title: "A Fresh Start",
            description:
                "John, who lived on the streets for years, received meals and support to start his journey toward stability.",
        },
        {
            id: 2,
            image: "/test.jpeg",
            title: "A Volunteer’s Perspective",
            description:
                "Sarah shares her heartwarming experience of volunteering and connecting with the community.",
        },
        {
            id: 3,
            image: "/test.jpeg",
            title: "Impactful Projects",
            description:
                "Our clothing drive in Lagos distributed 5,000+ items, bringing smiles to many families.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary text-center mb-12">
                    Real Stories, Real Change
                </h2>

                {/* Carousel */}
                <Slider {...settings}>
                    {stories.map((story) => (
                        <div key={story.id} className="px-4">
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                {/* Image */}
                                <div className="relative w-full md:w-1/2 h-64">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        className="rounded-lg shadow-lg object-cover"
                                        fill
                                    />
                                </div>

                                {/* Story Content */}
                                <div className="w-full md:w-1/2 text-left">
                                    <h3 className="text-2xl font-semibold text-primary mb-4">
                                        {story.title}
                                    </h3>
                                    <p className="text-gray-700">{story.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default StoryHighlights;