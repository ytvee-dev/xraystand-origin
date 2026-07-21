import Spinner from "@components/common/Spinner";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import * as paths from "@modules/cardiovascularSystem/locales/path.json";
import * as contentRu from "@modules/cardiovascularSystem/locales/rus.json";
import * as contentKz from "@modules/cardiovascularSystem/locales/kaz.json";
import CoverSection from "@modules/cardiovascularSystem/Sections/CoverSection";
import FirstSection from "@modules/cardiovascularSystem/Sections/FirstSection";
import SecondSection from "@modules/cardiovascularSystem/Sections/SecondSection";
import ThirdSection from "@modules/cardiovascularSystem/Sections/ThirdSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import BrightnessLayout from "@layout/Brightness";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#C85B72",
    boldTextColor: "#FFFFFF",
    textColor: "#FFFFFF",
    copyrightColor: "#FFFFFF",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return (
        <div className="cardiovascular-logo">
            <SpriteIcon
                iconId="logo-color"
                width="100%"
                height="100%"
                color="#474747"
            />
        </div>
    );
};

const CardiovascularSystem: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <div className="cardiovascular-container">
            <BrightnessLayout
                logo={<MainLogo />}
                stickyHeader={true}
                isLanguageSwitcher={true}
                switcherColor="#C85B72"
                sx={pageLayoutSX}
                headerBackgroundColor="transparent"
            >
                {!isContentLoaded && <Spinner />}
                <CoverSection content={textContent.coverSection} />
                <FirstSection content={textContent.firstSection} />
                <SecondSection content={textContent.secondSection} />
                <ThirdSection content={textContent.thirdSection} />
            </BrightnessLayout>
        </div>
    );
};

export default CardiovascularSystem;
