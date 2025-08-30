import {type ReactElement, useMemo} from "react";
import Spinner from "@components/common/Spinner";
import useImagesPreloader from "@hooks/useImagesPreloader";
import usePageImagesIds from "@hooks/usePageImagesIds";
import { PageIds } from "@domains/Translate";
import DefaultLayout from "@layout/Default";
import CoverSection from "@modules/kazakhAdebietModule/Sections/CoverSection";
import FirstSection from "@modules/kazakhAdebietModule/Sections/FirstSection";
import SecondSection from "@modules/kazakhAdebietModule/Sections/SecondSection";
import ThirdSection from "@modules/kazakhAdebietModule/Sections/ThirdSection";
import "./style.css";

const KazakhAdebiet = (): ReactElement => {
    const { pageImageIdData } = usePageImagesIds(PageIds.KAZAKH_ADEBIET_PAGE);
    const imageIds = useMemo(() => {
        if (!pageImageIdData) return [];
        return Array.from(
            new Set(
                Object.values(pageImageIdData).flatMap(section => [
                    ...section.globalData,
                    ...section.contentListData,
                ]),
            ),
        );
    }, [pageImageIdData]);
    const { isLoaded } = useImagesPreloader(imageIds);

    if (!isLoaded) {
        return <Spinner />;
    }
    return (
        <DefaultLayout strictLanguage='kz'>
            <div className="kazakh-adebiet-page">
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default KazakhAdebiet;