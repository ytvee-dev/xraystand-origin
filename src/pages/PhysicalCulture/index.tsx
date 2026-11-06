import Spinner from "@components/common/Spinner";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import * as paths from "@modules/physicalCulture/locales/paths.json";
import * as contentRu from "@modules/physicalCulture/locales/rus.json";
import * as contentKz from "@modules/physicalCulture/locales/kaz.json";
import { useLocaleContent } from "@hooks/useLocale";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useSelector } from "react-redux";
import type { TRootState } from "@store/index";
import BrightnessLayout from "@layout/Brightness";
import FirstSection from "@modules/physicalCulture/Sections/FirstSection";
import FourthSection from "@modules/physicalCulture/Sections/FourthSection";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#C21E23",
    boldTextColor: "#FFFFFF",
    textColor: "#FFFFFF",
    copyrightColor: "#FFFFFF",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return (
        <div className="physical-culture-logo">
            <SpriteIcon
                iconId="logo-color"
                width="100%"
                height="100%"
                color="#474747"
            />
        </div>
    );
};

const PhysicalCulture = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );
    return (
        <BrightnessLayout
            logo={<MainLogo />}
            isLanguageSwitcher={true}
            switcherColor="#0DC5FD"
            sx={pageLayoutSX}
            headerBackgroundColor="transparent"
        >
            {!isContentLoaded && <Spinner />}
            <FirstSection content={textContent.firstSection} />
            <FourthSection content={textContent.fourthSection} />
        </BrightnessLayout>
    );
};

export default PhysicalCulture;
