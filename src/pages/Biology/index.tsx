import Spinner from "@components/common/Spinner";
import BrightnessLayout from "@layout/Brightness";
import FirstSection from "@modules/biology/Sections/FirstSection";
import ThirdSection from "@modules/biology/Sections/ThirdSection";
import FifthSection from "@modules/biology/Sections/FifthSection";
import CoverSection from "@modules/biology/Sections/CoverSection";
import SecondSection from "@modules/biology/Sections/SecondSection";
import FourthSection from "@modules/biology/Sections/FourthSection";
import { collectFromPathsJson } from "@utils/collectAssetUrls";
import { usePreloadImages } from "@hooks/usePreloadImages";
import { type TRootState } from "@store/index";
import { useSelector } from "react-redux";
import { type ReactElement } from "react";
import { paths } from "@router/routes";

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
                    <SecondSection className='biology-section biology-second-section' />
                    <ThirdSection className='biology-section biology-third-section' />
                    <FourthSection className='biology-section biology-fourth-section'/>
                    <FifthSection className='biology-section biology-fifth-section' />
                </div>
            </BrightnessLayout>
        );

};

export default Biology;