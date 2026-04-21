import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/english/Sections/CoverSection";
import FirstSection from "@modules/english/Sections/FirstSection";
import ThirdSection from "@modules/english/Sections/ThirdSection";
import FifthSection from "@modules/english/Sections/FifthSection";
import * as textContentEn from "@modules/english/locales/en.json";
import SixthSection from "@modules/english/Sections/SixthSection";
import * as textContentKz from "@modules/english/locales/kaz.json";
import * as textContentRu from "@modules/english/locales/rus.json";
import NinethSection from "@modules/english/Sections/NinethSection";
import SecondSection from "@modules/english/Sections/SecondSection";
import FourthSection from "@modules/english/Sections/FourthSection";
import EighthSection from "@modules/english/Sections/EighthSection";
import SeventhSection from "@modules/english/Sections/SeventhSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import type { ReactElement } from "react";
import { paths } from "@router/routes";
import "./style.css";

const EnglishLogo = () => {
    return (
        <div className="english-logo">
            <span>English Grammar</span>
        </div>
    );
};

const English = (): ReactElement => {
    const textContent = useLocaleContent(
        textContentEn,
        textContentKz,
        textContentRu,
    );

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <BrightnessLayout
            logo={<EnglishLogo />}
            stickyHeader={true}
            isLanguageSelect={true}
            headerBackgroundColor="#2769A5"
        >
            <div className="english-page">
                {!isContentLoaded && <Spinner />}
                <CoverSection
                    className="english-section english-cover-section"
                    content={textContent.coverSection}
                />
                <FirstSection
                    className="english-section english-first-section"
                    content={textContent.firstSection}
                />
                <SecondSection
                    className="english-section english-second-section"
                    content={textContent.secondSection}
                />
                <ThirdSection
                    className="english-section english-third-section"
                    content={textContent.thirdSection}
                />
                <FourthSection
                    className="english-section english-fourth-section"
                    content={textContent.fourthSection}
                />
                <FifthSection
                    className="english-section english-fifth-section"
                    content={textContent.fifthSection}
                />
                <SixthSection
                    className="english-section english-sixth-section"
                    content={textContent.sixthSection}
                />
                <SeventhSection
                    className="english-section english-seventh-section"
                    content={textContent.seventhSection}
                />
                <EighthSection
                    className="english-section english-eighth-section"
                    content={textContent.eighthSection}
                />
                <NinethSection
                    className="english-section english-nineth-section"
                    content={textContent.ninethSection}
                />
            </div>
        </BrightnessLayout>
    );
};

export default English;
