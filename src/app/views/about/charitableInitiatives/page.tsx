"use client";
import CharitableHero from "./charitableInitiativesHero";
import CharitableInitiativesIntro from "./charitableInitiativesIntro";
import FeaturedInitiatives from "./futureInitiative";
import HowYouCanHelp from "./howYouCanHelp";

export default function CharitableInitiative() {
    return (
        <div >

            <CharitableHero />
            <CharitableInitiativesIntro />
            <FeaturedInitiatives />
            <HowYouCanHelp />
        </div>
    );
}
