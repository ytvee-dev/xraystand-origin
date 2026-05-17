import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/seasons/sections/CoverSection";
import AutumnSection from "@modules/seasons/sections/AutumnSection";
import SeventhSection from "@modules/seasons/sections/SeventhSection";
import { useLocaleContent } from "@hooks/useLocale";
import * as contentRu from "@modules/seasons/locales/rus.json";
import * as contentKz from "@modules/seasons/locales/kaz.json";
import './style.css';

const pageLayoutSX = {
    backgroundColor: "#FCF1EB",
    boldTextColor: "#474747",
    textColor: "#474747",
    copyrightColor: "#474747",
    logoColorMode: "dark",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return (
        <div className="seasons-logo">Времена года</div>
    );
};

const Seasons: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    return(
       <div className="seasons-container">
            <BrightnessLayout
            logo={<MainLogo/>}
            isLanguageSwitcher={true}
            switcherColor="#fcc10c"
            sx={pageLayoutSX}
            headerBackgroundColor="#e9dbde"
            languageSwitcherClassName="seasons-switcher"
            >
                <CoverSection />
                <AutumnSection content={textContent.autumnSection}/>
                <SeventhSection content={textContent.summerSection.seventhSection}/>
            </BrightnessLayout>
       </div>
    );
};

export default Seasons;