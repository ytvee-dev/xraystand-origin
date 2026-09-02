import Spinner from "@components/common/Spinner";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import * as paths from "@modules/aiSafety/locales/path.json";
import * as contentRu from "@modules/aiSafety/locales/rus.json";
import * as contentKz from "@modules/aiSafety/locales/kaz.json";
import { useLocaleContent } from "@hooks/useLocale";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useSelector } from "react-redux";
import type { TRootState } from "@store/index";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/aiSafety/Sections/CoverSection";
// import SecondSection from "@modules/aiSafety/Sections/SecondSection";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#D7E2E9",
    boldTextColor: "#474747",
    textColor: "#474747",
    copyrightColor: "#474747",
    logoColorMode: "dark",
    madeByColorMode: "dark",
};

const MainLogo = () => {
    return (
        <div className="ai-safety-logo">
            <SpriteIcon
                iconId="logo-color"
                width="100%"
                height="100%"
                color="#FFFFFF"
            />
        </div>
    );
};

const AiSafety = () => {
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
           {/* <SecondSection textContent={textContent.secondSection} /> */}
           <CoverSection сontent={textContent.coverSection} />
        </BrightnessLayout>
    );
};

export default AiSafety;