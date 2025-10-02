import {type ReactElement} from "react";
import {usePreloadImages} from "@hooks/usePreloadImages.ts";
import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
import {usePageData} from "@hooks/usePageData";
import DefaultLayout from "@layout/Default";
import CoverSection from "@modules/rusLitModule/Sections/CoverSection";
import FirstSection from "@modules/rusLitModule/Sections/FirstSection";
import SecondSection from "@modules/rusLitModule/Sections/SecondSection";
import ThirdSection from "@modules/rusLitModule/Sections/ThirdSection";
import Spinner from "@components/common/Spinner";
import * as paths from '@modules/rusLitModule/locales/paths.json';
import "./style.css";

const RusLit = (): ReactElement => {
    const imgUrls = collectFromPathsJson(paths)
    usePreloadImages(imgUrls);

    const { isContentLoaded } = usePageData();

    return (
        <DefaultLayout strictLanguage='ru'>
            <div className="ruslit-page" >
                {!isContentLoaded && (<Spinner />)}
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default RusLit;