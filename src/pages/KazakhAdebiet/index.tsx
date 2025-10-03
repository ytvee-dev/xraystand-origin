import {type ReactElement} from "react";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import {usePageData} from "@hooks/usePageData";
import DefaultLayout from "../../layout/Default";
import CoverSection from "../../modules/kazakhAdebietModule/Sections/CoverSection";
import FirstSection from "../../modules/kazakhAdebietModule/Sections/FirstSection";
import SecondSection from "../../modules/kazakhAdebietModule/Sections/SecondSection";
import ThirdSection from "../../modules/kazakhAdebietModule/Sections/ThirdSection";
import Spinner from "@components/common/Spinner";
import * as paths from '@modules/kazakhAdebietModule/locales/paths.json';
import "./style.css";

const KazakhAdebiet = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths)
    const { isContentLoaded } = usePageData();
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