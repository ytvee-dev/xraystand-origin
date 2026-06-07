import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import * as paths from "@modules/kazTarih/locales/paths.json";
import * as contentRu from "@modules/kazTarih/locales/rus.json";
import * as contentKz from "@modules/kazTarih/locales/kaz.json";
import ThirdSection from "@modules/kazTarih/Sections/ThirdSection";
import CoverSection from "@modules/kazTarih/Sections/CoverSection";
import FirstSection from "@modules/kazTarih/Sections/FirstSection";
import TwelfthSection from "@modules/kazTarih/Sections/TwelfthSection";
import EleventhSection from "@modules/kazTarih/Sections/EleventhSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#FCF1EB",
    boldTextColor: "#474747",
    textColor: "#474747",
    copyrightColor: "#474747",
    logoColorMode: "dark",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return <div className="seasons-logo">История Казахстана</div>;
};

const KazHistory: React.FC = () => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const textContent = useLocaleContent(contentRu, contentKz);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <div className="seasons-container">
            <BrightnessLayout
                logo={<MainLogo />}
                isLanguageSwitcher={true}
                switcherColor="#fcc10c"
                sx={pageLayoutSX}
                headerBackgroundColor="#e9dbde"
                languageSwitcherClassName="seasons-switcher"
            >
                {!isContentLoaded && <Spinner />}
                <CoverSection
                    className="kt-cover-section"
                    content={textContent.coverSection}
                />
                <FirstSection content={textContent.firstSection} />
                <ThirdSection
                    className="kt-third-section"
                    content={textContent.thirdSection}
                />
                <EleventhSection
                    className="kt-eleventh-section"
                    content={textContent.eleventhSection}
                />
                <TwelfthSection
                    className="kt-twelfth-section"
                    content={textContent.twelfthSection}
                />
            </BrightnessLayout>
        </div>
    );
};

export default KazHistory;
