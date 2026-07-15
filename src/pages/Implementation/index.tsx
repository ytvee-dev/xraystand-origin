import "./style.css";
import * as path from "../../modules/cardiovascularSystem/locales/path.json";
import * as contentRu from "../../modules/cardiovascularSystem/locales/rus.json";
import * as contentKz from "../../modules/cardiovascularSystem/locales/kaz.json";
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "../../modules/cardiovascularSystem/Sections/CoverSection"


const pageLayoutSX = {
    backgroundColor: "#181818",
    boldTextColor: "#FFFFFF",
    textColor: "rgba(255, 255, 255, 0.4)",
    copyrightColor: "rgba(255, 255, 255, 0.4)",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return (
        <div className="kaz-music-logo">Сердечно сосудистая система</div>
    );
};


const SeasonPage = () => {
    const textContent = useLocaleContent(contentRu, contentKz);
    return (
        <BrightnessLayout
            logo={<MainLogo />}
            isLanguageSwitcher={true}
            switcherColor="#181818"
            sx={pageLayoutSX}
            headerBackgroundColor="rgb(255, 255, 255)"
            languageSwitcherClassName="kaz-music-language-switcher"
        >
            <div className="implementation">
                <CoverSection content={textContent.coverSection} />
            
            </div>
        </BrightnessLayout>
    );
};

export default SeasonPage;
