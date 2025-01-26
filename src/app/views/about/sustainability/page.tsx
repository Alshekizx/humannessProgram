"use client";
import SustainabilityHero from "./sustainabilityHero";
import WhySustainabilityMatters from "./whySustainabilityMatters";
import SustainabilityInitiatives from "./ourSustainabilityInitiative";
import ImpactAndResults from "./impartAndResult";
// import CollaborationsAndPartnerships from "./collaborationsAndPartnership";
import SustainabilityInAction from "./sustainabilityInAction";
import HowYouCanHelp from "./howYouCanHelp";
import FuturePlansAndGoals from "./futurePlansAndGoals";

export default function Sustainability() {


    return (
        <div >
            <SustainabilityHero />
            <WhySustainabilityMatters />
            <SustainabilityInitiatives />
            <ImpactAndResults />
            {/*<CollaborationsAndPartnerships />*/}
            <SustainabilityInAction />
            <HowYouCanHelp />
            <FuturePlansAndGoals />
        </div>
    );
}
