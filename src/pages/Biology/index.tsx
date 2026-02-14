import type { ReactElement } from "react";
import "./style.css";
import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import CoverSection from "@modules/biology/Sections/CoverSection";
import type { TRootState } from "@store/index";
import { useSelector } from "react-redux";
import FirstSection from "@modules/biology/Sections/FirstSection";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { paths } from "@router/routes";
import { collectFromPathsJson } from "@utils/collectAssetUrls";

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
        <div className='biology-logo'><span>Биология</span></div>
    );
}

const Biology: React.FC = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths);
    usePreloadImages(imgUrls);

    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded
    );

    return (
            <BrightnessLayout
                logo={<BiologyLogo/>}
                stickyHeader={true}
                isLanguageSwitcher={true}
                switcherColor={'#071A22'}
                headerBackgroundColor={pageLayoutSX.backgroundColor}
            >
                <div className="biology-page">
                    {!isContentLoaded && (<Spinner/>)}
                    <CoverSection className='biology-section biology-cover-section'/>
                    <FirstSection className='biology-section biology-first-section'/>
                </div>
            </BrightnessLayout>
        );

};

export default Biology;