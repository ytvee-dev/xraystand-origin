import { useLocaleContent } from "@hooks/useLocale";
import * as contentRu from "@modules/KazMusInstruments/locales/rus.json";
import * as contentKz from "@modules/KazMusInstruments/locales/kaz.json";
import * as paths from "@modules/KazMusInstruments/locales/paths.json";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/KazMusInstruments/Sections/CoverSection";
import FirstSection from "@modules/KazMusInstruments/Sections/FirstSection";
import SecondSection from "@modules/KazMusInstruments/Sections/SecondSection";
import ThirdSection from "@modules/KazMusInstruments/Sections/ThirdSection";
import FourthSection from "@modules/KazMusInstruments/Sections/FourthSection";
import './style.css';

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
        <div className="kaz-music-logo">Музыкальные инструменты</div>
    );
};

const KazMusic: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    return(
       <div className="kaz-music-container">
            <BrightnessLayout
            logo={<MainLogo />}
            isLanguageSwitcher={true}
            switcherColor="#181818"
            sx={pageLayoutSX}
            headerBackgroundColor="rgb(255, 255, 255)"
            languageSwitcherClassName="kaz-music-language-switcher"
            >
                <CoverSection backgroundImage={paths.backgrounds.cover} content={textContent.coverSection} />
                <FirstSection content={textContent.PluckedInstrumentsSection} />
                <SecondSection content={textContent.BowedInstrumentsSection}/>
                <ThirdSection content={textContent.PercussionInstrumentsSection} />
                <FourthSection content={textContent.WindInstrumentsSection} />
            </BrightnessLayout>
       </div>
    );
};

export default KazMusic;