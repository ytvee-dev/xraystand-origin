import Spinner from "@components/common/Spinner";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import * as paths from "../../modules/aiProfession/locales/path.json";
import * as contentRu from "../../modules/aiProfession/locales/rus.json";
import * as contentKz from "../../modules/aiProfession/locales/kaz.json";
import { useLocaleContent } from "@hooks/useLocale";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useSelector } from "react-redux";
import type { TRootState } from "@store/index";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "../../modules/aiProfession/Sections/CoverSection";
import FirstSection from "../../modules/aiProfession/Sections/FirstSection";
import SecondSection from "../../modules/aiProfession/Sections/SecondSection";
import ThirdSection from "@modules/aiProfession/Sections/ThirdSection";
import FourthSection from "@modules/aiProfession/Sections/FourthSection";
import "@modules/aiProfession/Sections/components/glass.css";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#9F1A4C",
    boldTextColor: "#FFFFFF",
    textColor: "#FFFFFF",
    copyrightColor: "#FFFFFF",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return (
        <div className="ai-profession-logo">
            <SpriteIcon
                iconId="logo-color"
                width="100%"
                height="100%"
                color="#474747"
            />
        </div>
    );
};

const AiProfession = () => {
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
            switcherColor="#474747"
            sx={pageLayoutSX}
            headerBackgroundColor="transparent"
        >
            {!isContentLoaded && <Spinner />}
            <CoverSection content={textContent.coverSection} />
            <FirstSection content={textContent.firstSection} />
            <SecondSection content={textContent.secondSection} />
            <ThirdSection content={textContent.thirdSection}/>
            <FourthSection content={textContent.fourthSection} />
        </BrightnessLayout>
    );
};

export default AiProfession;
