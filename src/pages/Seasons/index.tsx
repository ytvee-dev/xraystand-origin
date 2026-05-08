import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/seasons/sections/CoverSection";
import WinterSection from "@modules/seasons/sections/WinterSection";
import './style.css';
import { useLocaleContent } from "@hooks/useLocale";
import textContentRu from "@modules/seasons/locales/rus.json";
import textContentKz from "@modules/seasons/locales/kaz.json";

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
    const textContent = useLocaleContent(textContentRu, textContentKz);

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
                <WinterSection content={textContent.winterSection}/>
            </BrightnessLayout>
       </div>
    );
};

export default Seasons;