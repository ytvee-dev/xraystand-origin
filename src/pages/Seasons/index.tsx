import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import * as paths from "@modules/seasons/locales/paths.json";
import * as contentRu from "@modules/seasons/locales/rus.json";
import * as contentKz from "@modules/seasons/locales/kaz.json";
import CoverSection from "@modules/seasons/sections/CoverSection";
import FifthSection from "@modules/seasons/sections/FifthSection";
import FourthSection from "@modules/seasons/sections/FourthSection";
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
    return <div className="seasons-logo">Времена года</div>;
};

const Seasons: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

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
                <CoverSection />
                <FourthSection
                    className="seasons-fourth-section"
                    content={textContent.springSection.fourthSection}
                />
                <FifthSection
                    className="seasons-fifth-section"
                    content={textContent.springSection.fifthSection}
                />
            </BrightnessLayout>
        </div>
    );
};

export default Seasons;
