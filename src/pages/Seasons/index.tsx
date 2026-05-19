import BrightnessLayout from "@layout/Brightness";
import * as contentRu from "@modules/seasons/locales/rus.json";
import * as contentKz from "@modules/seasons/locales/kaz.json";
import CoverSection from "@modules/seasons/sections/CoverSection";
import NinthSection from "@modules/seasons/sections/NinethSection";
import AutumnSection from "@modules/seasons/sections/AutumnSection";
import { useLocaleContent } from "@hooks/useLocale";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#FCF1EB",
    boldTextColor: "#474747",
    textColor: "#474747",
    copyrightColor: "#474747",
    logoColorMode: "dark",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return <div className="seasons-logo">Времена года</div>;
};

const Seasons: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    const ninthSectionCards = textContent.summerSection.content.slice(8);

    return (
        <div className="seasons-container">
            <BrightnessLayout
                logo={<MainLogo />}
                isLanguageSwitcher={true}
                switcherColor="#fcc10c"
                sx={pageLayoutSX}
                headerBackgroundColor="#e9dbde"
                languageSwitcherClassName="seasons-switcher"
            >
                <CoverSection />
                <AutumnSection content={textContent.autumnSection} />
                <NinthSection
                    title={textContent.summerSection.content[8].title}
                    cards={ninthSectionCards}
                />
            </BrightnessLayout>
        </div>
    );
};

export default Seasons;
