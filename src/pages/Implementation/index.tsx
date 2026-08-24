import "./style.css";
import * as contentKz from "../../modules/safetyInNature/locales/kaz.json";
import * as contentRu from "../../modules/safetyInNature/locales/rus.json"
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import SafetyNatureCard from "@modules/safetyInNature/components/Cards";

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

const firstSectionIcons = [
    "natureSafetyTrail",
    "natureSafetyFire",
    "natureSafetyTrash",
    "natureSafetyFlora",
    "natureSafetyPets",
    "natureSafetyAnimals",
    "natureSafetyTransport",
];

const secondSectionIcons = [
    "natureSafetyPreparation",
    "natureSafetyClothes",
    "natureSafetyWeather",
    "natureSafetyWildlife",
    "natureSafetyNotification",
    "natureSafetyNoise",
];
const firstSectionColumns = [
    [0, 1],
    [2, 3],
    [4, 5, 6],
];

const secondSectionColumns = [
    [0, 1],
    [2, 3],
    [4, 5],
];

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
                <div className="safety-nature-cards">
                    {firstSectionColumns.map((column, columnIndex) =>
                        <div className="first-section-cards" key={columnIndex}>
                            {column.map((cardIndex) => (
                                <SafetyNatureCard
                                    key={textContent.firstSection.content[cardIndex].title}
                                    cardContent={textContent.firstSection.content[cardIndex]}
                                    iconId={firstSectionIcons[cardIndex]}
                                />
                            ))}
                        </div>
                    )}
                </div>
                <div className="second-section-cards">
                    {secondSectionColumns.map((column, columnIndex) => (
                        <div className="second-section-cards-column" key={columnIndex}>
                            {column.map((cardIndex) => (
                                <SafetyNatureCard
                                    key={textContent.secondSection.content[cardIndex].title}
                                    cardContent={textContent.secondSection.content[cardIndex]}
                                    iconId={secondSectionIcons[cardIndex]}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </BrightnessLayout>
    );
};

export default SeasonPage;
