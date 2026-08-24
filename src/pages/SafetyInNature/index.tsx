import Spinner from "@components/common/Spinner";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import * as contentRu from "../../modules/safetyInNature/locales/rus.json";
import * as contentKz from "../../modules/safetyInNature/locales/kaz.json";
import * as paths from "../../modules/safetyInNature/locales/paths.json";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import { useSelector } from "react-redux";
import type { TRootState } from "@store/index";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/safetyInNature/sections/CoverSection";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#407C84",
    boldTextColor: "#FFFFFF",
    textColor: "#FFFFFF",
    copyrightColor: "#FFFFFF",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return (
        <div className="safety-in-nature-logo">
            <SpriteIcon
                iconId="logo-color"
                width="100%"
                height="100%"
                color="#FFFFFF"
            />
        </div>
    );
};

const SafetyInNature = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <BrightnessLayout
            logo={<MainLogo />}
            stickyHeader={true}
            isLanguageSwitcher={true}
            switcherColor="#FFFFFF"
            sx={pageLayoutSX}
            headerBackgroundColor="transparent"
        >
            {!isContentLoaded && <Spinner />}
            <CoverSection content={textContent.coverSection} />
        </BrightnessLayout>
    );
};

export default SafetyInNature;
