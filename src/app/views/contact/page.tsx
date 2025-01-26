"use client";
import ContactHero from "./contactHero";
import ContactInformation from "./contactInfo";
import ContactForm from "./contactForm";
import LocationMap from "./contactLocationMap";
import FAQSection from "./faqSection";

export default function Home() {


    return (
        <div >
            <ContactHero />
            <ContactInformation />
            <ContactForm />
            <LocationMap />
            <FAQSection />

        </div>
    );
}
