import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import * as paths from "@modules/seasons/locales/paths.json";
import * as contentRu from "@modules/seasons/locales/rus.json";
import * as contentKz from "@modules/seasons/locales/kaz.json";
import CoverSection from "@modules/seasons/sections/CoverSection";
import AutumnSection from "@modules/seasons/sections/AutumnSection";
import SummerSection from "@modules/seasons/sections/SummerSection";
import SpringSection from "@modules/seasons/sections/SpringSection";
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
                <SpringSection content={textContent.springSection} />
                <SummerSection content={textContent.summerSection} />
                <AutumnSection content={textContent.autumnSection} />
            </BrightnessLayout>
        </div>
    );
};

export default Seasons;
