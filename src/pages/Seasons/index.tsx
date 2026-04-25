import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/seasons/sections/CoverSection";

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
        <div className="kaz-music-logo">Времена года</div>
    );
};

const KazMusic: React.FC = () => {
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

export default KazMusic;