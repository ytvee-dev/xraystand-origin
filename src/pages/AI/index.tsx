import Spinner from "@components/common/Spinner";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import * as paths from "@modules/ai/locales/paths.json";
import * as contentRu from "@modules/ai/locales/rus.json";
import * as contentKz from "@modules/ai/locales/kaz.json";
import CoverSection from "@modules/ai/Sections/CoverSection";
import ThirdSection from "@modules/ai/Sections/ThirdSection";
import FirstSection from "@modules/ai/Sections/FirstSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import BrightnessLayout from "@layout/Brightness";
import "./style.css";

const MainLogo = () => {
    return (
        <div className="ai-logo">
            <SpriteIcon
                iconId="logo-color"
                width="100%"
                height="100%"
                color="#474747"
            />
        </div>
    );
};

const AI: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <div className="ai-container">
            <BrightnessLayout
                logo={<MainLogo />}
                stickyHeader={true}
                isLanguageSwitcher={true}
                switcherColor="#ffffff"
                headerBackgroundColor="transparent"
                footerClassName="ai-footer"
                sx={{
                    backgroundColor: "transparent",
                    boldTextColor: "#FFFFFF",
                    textColor: "#FFFFFF",
                    copyrightColor: "#FFFFFF",
                    logoColorMode: "light",
                    madeByColorMode: "light",
                }}
            >
                {!isContentLoaded && <Spinner />}
                <CoverSection content={textContent.coverSection} />
                <FirstSection content={textContent.firstSection} />
                <ThirdSection content={textContent.thirdSection} />
            </BrightnessLayout>
        </div>
    );
};

export default AI;
