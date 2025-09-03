import {type ReactElement} from "react";
import type {TRootState} from "@store/index.ts";
import {useSelector} from "react-redux";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import DefaultLayout from "../../layout/Default";
import CoverSection from "../../modules/kazakhAdebietModule/Sections/CoverSection";
import FirstSection from "../../modules/kazakhAdebietModule/Sections/FirstSection";
import SecondSection from "../../modules/kazakhAdebietModule/Sections/SecondSection";
import ThirdSection from "../../modules/kazakhAdebietModule/Sections/ThirdSection";
import Spinner from "@components/common/Spinner";
import nutritionContent from "@modules/nutrition/locales/paths.json";
import "./style.css";

const KazakhAdebiet = (): ReactElement => {
    const imgUrls = collectFromPathsJson(nutritionContent)
    const isContentLoaded: boolean = useSelector(
        (state: TRootState) => state.application.isContentLoaded
    );
    usePreloadImages(imgUrls);

    return (
        <DefaultLayout strictLanguage='kz'>
            <div className="kazakh-adebiet-page">
                {!isContentLoaded && (<Spinner />)}
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default KazakhAdebiet;