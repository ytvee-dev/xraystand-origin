import "./style.css";
import * as paths from "../../modules/safetyInNature/locales/paths.json";
import * as contentKz from "../../modules/safetyInNature/locales/kaz.json";
import * as contentRu from "../../modules/safetyInNature/locales/rus.json"
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import SafetyNatureBlocks from "@modules/safetyInNature/components/SafetyNatureBlocks";

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

const parksIcons = [
    "natureSafetyTicks",
    "natureSafetyAnimalInfections",
    "natureSafetyQuiet",
    "natureSafetyInfrastructure",
];

const reserveIcons = [
    "natureSafetyTrailRule",
    "natureSafetyDrone",
    "natureSafetyWildlifeDistance",
    "natureSafetyMicroclimate",
];

const waterIcons = [
    "natureSafetyConcreteBanks",
    "natureSafetyCrossing",
    "natureSafetyWaterRise",
    "natureSafetySwimming",
];

const parksImages = [
    paths.cards.firstPresidentPark,
    paths.cards.botanicalGargen,
];

const reserveImages = [
    paths.cards.almatyPreacher,
    paths.cards.ileAlatau,
];

const waterImages = [
    paths.cards.terrenkur,
    paths.cards.esentay,
];

interface ISafetyNatureBlockItem {
    title: string;
    description: string;
}

interface ISafetyNatureSectionContent {
    title: string;
    content: ISafetyNatureBlockItem[];
}

interface ISafetyInNatureContent {
    parksSection: ISafetyNatureSectionContent;
    reserveSection: ISafetyNatureSectionContent;
    waterSection: ISafetyNatureSectionContent;
}

interface ISafetyInNatureProps {
    content: ISafetyInNatureContent;
}


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
                <SafetyNatureBlocks
                    title={textContent.firstSection.cards[0].title}
                    content={textContent.firstSection.cards[0].content}
                    iconId={parksIcons}
                    images={parksImages}
                    contentSide="left"
                    backgroundColor="#77BA8FB2"
                    titleBackgroundColor="#9CCFAE"
                />

                <SafetyNatureBlocks
                    title={textContent.firstSection.cards[1].title}
                    content={textContent.firstSection.cards[1].content}
                    iconId={reserveIcons}
                    images={reserveImages}
                    contentSide="right"
                    backgroundColor="#4DAC90B2"
                    titleBackgroundColor="#6CC2B4"
                />

                <SafetyNatureBlocks
                    title={textContent.firstSection.cards[2].title}
                    content={textContent.firstSection.cards[2].content}
                    iconId={waterIcons}
                    images={waterImages}
                    contentSide="left"
                    backgroundColor="#348F91B2"
                    titleBackgroundColor="#18AFAE"
                />
            </div>

        </BrightnessLayout>
    );
};

export default SeasonPage;
