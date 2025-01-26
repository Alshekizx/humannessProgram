import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

// Settings for the slider
const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
};

const AllProductsHeroSection = () => {
    const [activeSlide, setActiveSlide] = useState(0); // State to track the active slide

    const slides = [
        {
            id: 1,
            heading: "Discover Our Collection",
            subtitle: "Shop for a cause and make a difference.",
            image: "/images/hero-banner-1.jpg",
        },
        {
            id: 2,
            heading: "Exclusive Limited Editions",
            subtitle: "Get access to our unique and exclusive products.",
            image: "/images/hero-banner-2.jpg",
        },
        {
            id: 3,
            heading: "Shop Sustainable Products",
            subtitle: "Support eco-friendly and sustainable initiatives.",
            image: "/images/hero-banner-3.jpg",
        },
    ];

    const handleBeforeChange = (oldIndex: number, newIndex: number) => {
        setActiveSlide(newIndex);
    };

    return (
        <section className="relative text-white h-[70vh]">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0">
                <Slider
                    {...sliderSettings}
                    beforeChange={handleBeforeChange} // Update active slide index
                    aria-label="Hero Section Slider"
                >
                    {slides.map((slide) => (
                        <div key={slide.id} className="relative w-full h-[70vh]">
                            <Image
                                src={slide.image}
                                alt={slide.heading}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="rounded-lg"
                                priority // Ensures images load faster
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 flex items-center justify-center h-[70vh] bg-black bg-opacity-50">
                <div className="container mx-auto px-4 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        {slides[activeSlide].heading}
                    </h1>
                    <p className="text-lg mb-6">{slides[activeSlide].subtitle}</p>
                    <a
                        href="#products"
                        className="inline-block bg-tertiary hover:bg-tertiary2 text-black font-bold py-3 px-6 rounded-lg transition"
                    >
                        Shop Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AllProductsHeroSection;