import "./style.css";
import * as contentKz from "@modules/physicalCulture/locales/kaz.json";
import * as contentRu from "@modules/physicalCulture/locales/rus.json";
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import SecondSection from "@modules/physicalCulture/Sections/SecondSection";

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
        <div className="kaz-music-logo">Физическая культура</div>
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
            <div className="bgc">
                <SecondSection content={textContent.secondSection} />
            </div>
        </BrightnessLayout>
    );
};

export default SeasonPage;
