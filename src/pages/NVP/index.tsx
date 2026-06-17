import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import * as paths from "@modules/nvp/locales/paths.json";
// import * as contentRu from "@modules/nvp/locales/rus.json";
// import * as contentKz from "@modules/nvp/locales/kaz.json";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
// import { useLocaleContent } from "@hooks/useLocale";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import "./style.css";

const MainLogo = () => {
    return <div className="nvp-logo">Гражданская безопасность (ОБЖ)</div>;
};

const NVP: React.FC = () => {
    // const textContent = useLocaleContent(contentRu, contentKz);

    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <div className="nvp-container">
            <BrightnessLayout
                logo={<MainLogo />}
                isLanguageSwitcher={true}
                headerBackgroundColor=""
                languageSwitcherClassName="nvp-switcher"
            >
                {!isContentLoaded && <Spinner />}
            </BrightnessLayout>
        </div>
    );
};

export default NVP;
