import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import FifthSection from "@modules/biology/Sections/FifthSection";
import SixthSection from "@modules/biology/Sections/SixthSection";
import SeventhSection from "@modules/biology/Sections/SeventhSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import type { ReactElement } from "react";
import { paths } from "@router/routes";
import "./style.css";

const pageLayoutSX = {
    backgroundColor: "#2769A5",
    boldTextColor: "#FFFFFF",
    textColor: "rgba(255,255,255,0.4)",
    copyrightColor: "rgba(255,255,255,0.4)",
    logoColorMode: "light",
    madeByColorMode: "light",
};

const BiologyLogo = () => {
    return (
        <div className="biology-logo">
            <span>Биология</span>
        </div>
    );
};

const Biology: React.FC = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded,
    );

    return (
        <BrightnessLayout
            logo={<BiologyLogo />}
            stickyHeader={true}
            isLanguageSwitcher={true}
            switcherColor={"#071A22"}
            headerBackgroundColor={pageLayoutSX.backgroundColor}
        >
            <div className="biology-page">
                {!isContentLoaded && <Spinner />}
                <FifthSection className="biology-section biology-fifth-section" />
                <SixthSection className="biology-section biology-sixth-section" />
                <SeventhSection className="biology-section biology-seventh-section" />
            </div>
        </BrightnessLayout>
    );
};

export default Biology;
