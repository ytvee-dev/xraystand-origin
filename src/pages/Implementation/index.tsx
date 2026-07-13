import "./style.css";
import SecondSection from "@modules/emotionalIntelligence/Sections/SecondSection";
import * as path from "../../modules/emotionalIntelligence/locales/path.json";
import * as contentRu from "../../modules/emotionalIntelligence/locales/rus.json";
import * as contentKz from "../../modules/emotionalIntelligence/locales/kaz.json";
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";


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
        <div className="kaz-music-logo">Эмоциональный интеллект</div>
    );
};


const SeasonPage = () => {
    const textContent = useLocaleContent(contentRu, contentKz);
    return (
        // <BrightnessLayout
        //     logo={<MainLogo />}
        //     isLanguageSwitcher={true}
        //     switcherColor="#181818"
        //     sx={pageLayoutSX}
        //     headerBackgroundColor="rgb(255, 255, 255)"
        //     languageSwitcherClassName="kaz-music-language-switcher"
        // >
            <div className="implementation">
                <SecondSection content={textContent.secondSection} />
            
            </div>
        // </BrightnessLayout>
    );
};

export default SeasonPage;
