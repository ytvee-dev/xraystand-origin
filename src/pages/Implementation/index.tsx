import "./style.css";
import * as paths from "@modules/aiSafety/locales/path.json";
import * as contentKz from "../../modules/aiSafety/locales/kaz.json";
import * as contentRu from "../../modules/aiSafety/locales/rus.json"
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import ImgTopicCard from "@modules/aiSafety/components/ImgTopicCard";

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
    const card = textContent.fourthSection.cards[1]
    return (
        <BrightnessLayout
            logo={<MainLogo />}
            isLanguageSwitcher={true}
            switcherColor="#181818"
            sx={pageLayoutSX}
            headerBackgroundColor="rgb(255, 255, 255)"
            languageSwitcherClassName="kaz-music-language-switcher"
        >
            <ImgTopicCard
                title={card.title}
                description={card.description}
                list={card.list}
                imgPath={paths.cards[0]}
            />
        </BrightnessLayout>
    );
};

export default SeasonPage;
