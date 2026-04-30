import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/seasons/sections/CoverSection";
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
    // const textContent = useLocaleContent(contentRu, contentKz);

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
            </BrightnessLayout>
       </div>
    );
};

export default Seasons;