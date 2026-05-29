import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
// import * as contentRu from "@modules/seasons/locales/rus.json";
// import * as contentKz from "@modules/seasons/locales/kaz.json";
// import { useLocaleContent } from "@hooks/useLocale";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";

const pageLayoutSX = {
    backgroundColor: "#FCF1EB",
    boldTextColor: "#474747",
    textColor: "#474747",
    copyrightColor: "#474747",
    logoColorMode: "dark",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return <div className="seasons-logo">История Казахстана</div>;
};

const KazHistory: React.FC = () => {
    // const textContent = useLocaleContent(contentRu, contentKz);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

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
                {!isContentLoaded && <Spinner />}
            </BrightnessLayout>
        </div>
    );
};

export default KazHistory;
