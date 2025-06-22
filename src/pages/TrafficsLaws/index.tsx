import { type ReactElement } from "react";
import DefaultLayout from "@layout/Default";
import FirstSection from "@pages/TrafficsLaws/Sections/FirstSection";
import SecondSection from "@pages/TrafficsLaws/Sections/SecondSection";
import ThirdSection from "@pages/TrafficsLaws/Sections/ThirdSection";
import FourthSection from "@pages/TrafficsLaws/Sections/FourthSection";
import FifthSection from "@pages/TrafficsLaws/Sections/FifthSection";
import SixthSection from "@pages/TrafficsLaws/Sections/SixthSection";
import SeventhSection from "@pages/TrafficsLaws/Sections/SeventhSection";
import EighthSection from "@pages/TrafficsLaws/Sections/EighthSection";
import NinthSection from "@pages/TrafficsLaws/Sections/NinthSection";
import CoverSection from "@components/trafficLaws/CoverSection";
import "./style.css";

const TrafficsLawsPage = (): ReactElement => {
    return (
        <DefaultLayout>
            <div className="traffics-laws-page">
                <CoverSection/>
                <FirstSection />
                <SecondSection />
                <ThirdSection />
                <FourthSection />
                <FifthSection />
                <SixthSection />
                <SeventhSection />
                <EighthSection />
                <NinthSection />
            </div>
        </DefaultLayout>
    );
};

export default TrafficsLawsPage;
