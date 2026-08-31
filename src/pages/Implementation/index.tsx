import "./style.css";
import * as paths from "../../modules/aiSecurity/locales/path.json";
import * as contentKz from "../../modules/aiSecurity/locales/kaz.json";
import * as contentRu from "../../modules/aiSecurity/locales/rus.json"
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import InfoBlock from "@modules/aiSecurity/components/InfoBlock";

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
            <div className="container">
                <InfoBlock
                    title={textContent.secondSection.topics[0].lawsCard.title}
                    description={textContent.secondSection.topics[0].lawsCard.description}
                    image={paths.infoBlockImages.scales}
                />
            </div>

        </BrightnessLayout>
    );
};

export default SeasonPage;
