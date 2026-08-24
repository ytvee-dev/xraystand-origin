import Spinner from "@components/common/Spinner";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import * as contentRu from "../../modules/safetyInNature/locales/rus.json";
import * as contentKz from "../../modules/safetyInNature/locales/kaz.json";
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

const SafetyInNature = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

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
            {/* {!isContentLoaded && <Spinner />} */}
            <CoverSection content={textContent.coverSection} />
        </BrightnessLayout>
    );
};

export default SafetyInNature;
