"use client";


import Hero from "./hero";
import FeaturedProducts from "./featuredProguct";
import AboutUs from "./about";
import Benefits from "./benefits";
import ShopByCategory from "./shopByCategory";

import Impact from "./impactSection";
import NewsletterSignup from "./newsLetter";
//import SocialMediaFeed from "./socialMediaFeed";
import CallToActionBanner from "./callToAction";
import BlogHighlights from "./blogHilightes";

export default function Home() {


    const handleLearnMore = () => {
        window.location.href = "/about-us";
    };

    return (
        <div >

            <Hero />
            <FeaturedProducts />
            <AboutUs
                title="Transforming Fashion into Compassion"
                description="Humanness transforms fashion into compassion by using profits to feed the homeless in Africa. Join us in making a difference."
                image="/images/charity-work.jpg"
                onLearnMore={handleLearnMore}
            />
            <Benefits />
            <ShopByCategory />
            <Impact />
            <NewsletterSignup />
            {/*<SocialMediaFeed />*/}
            <CallToActionBanner />
            <BlogHighlights />

        </div>
    );
}
