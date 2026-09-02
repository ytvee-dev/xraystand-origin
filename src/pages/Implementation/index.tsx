import "./style.css";
import * as paths from "../../modules/aiSecurity/locales/path.json";
import * as contentKz from "../../modules/aiSecurity/locales/kaz.json";
import * as contentRu from "../../modules/aiSecurity/locales/rus.json"
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import DSNotification from "@components/common/DSNotification";
import TopicBlock from "@modules/aiSecurity/components/TopicBlock";

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
                <TopicBlock
                    title={textContent.secondSection.topics[1].title}
                    description={textContent.secondSection.topics[1].description}
                    listDescription={textContent.secondSection.topics[1].listDescription}
                    list={textContent.secondSection.topics[1].list}
                    image={paths.blockImages[1]}
                    imagePosition="right"
                />
            </div>

        </BrightnessLayout>
    );
};

export default SeasonPage;
