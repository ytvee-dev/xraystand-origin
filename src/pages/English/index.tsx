import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import type { ReactElement } from "react";
import { paths } from "@router/routes";
import "./style.css";

const EnglishLogo = () => {
    return (
        <div className="english-logo">
            <span>English Grammar</span>
        </div>
    );
};

const English = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <BrightnessLayout
            logo={<EnglishLogo />}
            stickyHeader={true}
            isLanguageSelect={true}
            headerBackgroundColor="#2769A5"
        >
            <div className="english-page">
                {!isContentLoaded && <Spinner />}
            </div>
        </BrightnessLayout>
    );
};

export default English;
