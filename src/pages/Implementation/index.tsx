import "./style.css";
import * as paths from "../../modules/aiSecurity/locales/path.json";
import * as contentKz from "../../modules/aiSecurity/locales/kaz.json";
import * as contentRu from "../../modules/aiSecurity/locales/rus.json"
import { useLocaleContent } from "@hooks/useLocale";
import BrightnessLayout from "@layout/Brightness";
import DSNotification from "@components/common/DSNotification";

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
                <DSNotification
                    content={
                        <div className="ai-security-notification-content">
                            <h3 className="ai-security-notification-title">{textContent.secondSection.topics[0].lawsCard.title}</h3>
                            <p className="ai-security-notification-description">{textContent.secondSection.topics[0].lawsCard.description}</p>
                        </div>
                    }
                    className="ai-security-notification"
                    fullWidth={true}
                    borderColor="rgba(255, 255, 255, 0.35)"
                    textColor="#4390C0"
                    iconName="aiSecurityScales"
                    iconColor="#4EA4DA"
                    backgroundColor="rgba(255, 255, 255, 0.55)"
                    borderRadius="20px"
                    iconWidth="87px"
                    iconHeight="82px"
                    imgPosition="flex-start"
                    cardGap="24px"
                    padding="24px 36px"
                />
            </div>

        </BrightnessLayout>
    );
};

export default SeasonPage;
