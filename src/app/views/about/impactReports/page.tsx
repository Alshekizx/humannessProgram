"use client";
import HeroSection from "./impactHero";
import ImpactHighlights from "./impactHighlights";
import LatestImpactReport from "./latestImpactReport";
import StoryHighlights from "./storyHighlights";
import FinancialTransparency from "./financialTransparency";
import ArchiveReports from "./archiveOfPreviousReports";
import CallToAction from "./impactCallToAction";
export default function ImpactPage() {


    return (
        <div >
            <HeroSection
                headline="Making an Impact Together"
                subheading="Discover how your support helps us feed the homeless and create meaningful change."
                backgroundImage="/test.jpeg"
                ctaButtons={[
                    { label: "Download Latest Report", link: "/reports/latest" },
                    { label: "View Previous Reports", link: "/reports/archives" },
                ]}
            />
            <ImpactHighlights />
            <LatestImpactReport />
            <StoryHighlights />
            <FinancialTransparency />
            <ArchiveReports />
            <CallToAction />

        </div>
    );
}
