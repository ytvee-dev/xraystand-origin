import React from "react";
import BrightnessLayout from "@layout/Brightness";
import Spinner from "@components/common/Spinner";
import * as paths from "@modules/firesafety/locales/paths.json";
import CoverSection from "@modules/fireSafety/Sections/CoverSection";
import FirstSection from "@modules/fireSafety/Sections/FirstSection";
import ThirdSection from "@modules/fireSafety/Sections/ThirdSection";
import FifthSection from "@modules/fireSafety/Sections/FifthSection";
import SixthSection from "@modules/fireSafety/Sections/SixthSection";
import FourthSection from "@modules/fireSafety/Sections/FourthSection";
import SecondSection from "@modules/fireSafety/Sections/SecondSection";
import SeventhSection from "@modules/fireSafety/Sections/SeventhSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { usePageData } from "@hooks/usePageData";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "rgba(54, 19, 19, 1)",
    boldTextColor: "#FFFFFF",
    textColor: "rgba(255, 255, 255, 0.4)",
    copyrightColor: "rgba(255, 255, 255, 0.4)",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const FireSafetyLogo = () => {
    return (
        <div className="fire-safety-logo">
            <span>Пожарная безопастность</span>
        </div>
    );
};

const FireSafety: React.FC = () => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const { isMobile } = usePageData();

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <BrightnessLayout
            logo={<FireSafetyLogo />}
            isLanguageSwitcher={true}
            stickyHeader
            switcherColor="rgba(199, 73, 60, 1)"
            sx={pageLayoutSX}
            headerBackgroundColor="rgba(51, 18, 18, 1)"
        >
            <div className="fire-safety-page">
                {!isContentLoaded && <Spinner />}
                <CoverSection
                    className="fire-safety-section"
                    style={{
                        position: "relative",
                        marginBottom: !isMobile ? "12rem" : "5rem",
                    }}
                />
                <FirstSection
                    className="fire-safety-section"
                    style={{ position: "relative", zIndex: "1" }}
                />
                <SecondSection className="fire-safety-section" />
                <ThirdSection className="fire-safety-section" />
                <FourthSection className="fire-safety-section" />
                <FifthSection
                    className="fire-safety-section"
                    style={{
                        position: "relative",
                        zIndex: "1",
                        overflow: "hidden",
                    }}
                />
                <SixthSection className="fire-safety-section" />
                <SeventhSection
                    className="fire-safety-section"
                    style={{
                        position: "relative",
                        zIndex: "1",
                        overflow: "hidden",
                    }}
                />
            </div>
        </BrightnessLayout>
    );
};

export default FireSafety;
