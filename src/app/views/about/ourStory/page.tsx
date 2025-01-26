"use client";
import ImpactHero from "./ourStoryHero";
import Introduction from "./introduction";
import TheBeginning from "./theBeginning";
import MissionAndVision from "./missionAndVision";
import OurValues from "./ourValue";
import ImpactOverYears from "./impactSoFar";
import MeetTheTeam from "./myTeam";
import SustainabilityCommitment from "./sustainabilityCommitment";
import CallToAction from "./ourStoryCallToAction";

export default function Home() {


    return (
        <div >
            <ImpactHero />
            <Introduction />
            <TheBeginning />
            <MissionAndVision />
            <OurValues />
            <ImpactOverYears />
            <MeetTheTeam />
            <SustainabilityCommitment />
            <CallToAction />
        </div>
    );
}
