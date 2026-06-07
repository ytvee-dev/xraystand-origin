import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import * as paths from "@modules/kazTarih/locales/paths.json"
import * as contentRu from "@modules/kazTarih/locales/rus.json";
import * as contentKz from "@modules/kazTarih/locales/kaz.json";
import CoverSection from "@modules/kazTarih/Sections/CoverSection";
import FirstSection from "@modules/kazTarih/Sections/FirstSection";
import SecondSection from "@modules/kazTarih/Sections/SecondSection";
import FourthSection from "@modules/kazTarih/Sections/FourthSection";
import FifthSection from "@modules/kazTarih/Sections/FifthSection";
import SixthSection from "@modules/kazTarih/Sections/SixthSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import useWindowWidth from '@hooks/useScreenWidth';
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#28A9E1",
    boldTextColor: "#474747",
    textColor: "#474747",
    copyrightColor: "#474747",
    logoColorMode: "dark",
    madeByColorMode: "light",
};

const MainLogo = () => {
    return <div className="kt-logo">История Казахстана</div>;
};

const KazHistory: React.FC = () => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);
    
    const textContent = useLocaleContent(contentRu, contentKz);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    const screenWidth = useWindowWidth();
    const summaryFontSize = String(screenWidth <= 768 ? 14 : 20);

    return (
        <div className="kt-container">
            <BrightnessLayout
                logo={<MainLogo />}
                isLanguageSwitcher={true}
                switcherColor="#61361E"
                sx={pageLayoutSX}
                headerBackgroundColor="#cebda7"
                languageSwitcherClassName="kt-switcher"
            >
                {!isContentLoaded && <Spinner />}

                <CoverSection className="kt-cover-section" content={textContent.coverSection}/>
                <FirstSection content={textContent.firstSection} summaryCardFontSize={summaryFontSize}/>
                <SecondSection content={textContent.secondSection} summaryCardFontSize={summaryFontSize}/>
                <FourthSection content={textContent.fourthSection} summaryCardFontSize={summaryFontSize}/>
                <FifthSection content={textContent.fifthSection} summaryCardFontSize={summaryFontSize}/>
                <SixthSection content={textContent.sixthSection} summaryCardFontSize={summaryFontSize}/>
            </BrightnessLayout>
        </div>
    );
};

export default KazHistory;
