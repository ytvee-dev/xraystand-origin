import Spinner from "@components/common/Spinner";
import * as paths from "@modules/nvp/locales/paths.json";
import * as contentRu from "@modules/nvp/locales/rus.json";
import * as contentKz from "@modules/nvp/locales/kaz.json";
import FirstSection from "@modules/nvp/Sections/FirstSection";
import CoverSection from "@modules/nvp/Sections/CoverSection";
import SecondSection from "@modules/nvp/Sections/SecondSection";
import CustomLayout from "@modules/nvp/components/CustomLayout";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { useLocaleContent } from "@hooks/useLocale";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import "./style.css";

const NVP: React.FC = () => {
    const textContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <div className="nvp-container">
            <CustomLayout
                isLanguageSwitcher={true}
                headerBackgroundColor="#697855"
                languageSwitcherClassName="nvp-switcher"
            >
                {!isContentLoaded && <Spinner />}

                <CoverSection
                    className="nvp-cover-section"
                    content={textContent.coverSection}
                />
                <FirstSection
                    className="nvp-first-section"
                    content={textContent.firstSection}
                />
                <SecondSection
                    className="nvp-second-section"
                    content={textContent.secondSection}
                />
            </CustomLayout>
        </div>
    );
};

export default NVP;
