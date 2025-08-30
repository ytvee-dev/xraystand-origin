import {type ReactElement, useMemo} from "react";
import Spinner from "@components/common/Spinner";
import useImagesPreloader from "@hooks/useImagesPreloader";
import usePageImagesIds from "@hooks/usePageImagesIds";
import { PageIds } from "@domains/Translate";
import DefaultLayout from "@layout/Default";
import CoverSection from "@modules/rusLitModule/Sections/CoverSection";
import FirstSection from "@modules/rusLitModule/Sections/FirstSection";
import SecondSection from "@modules/rusLitModule/Sections/SecondSection";
import ThirdSection from "@modules/rusLitModule/Sections/ThirdSection";
import "./style.css";

const RusLit = (): ReactElement => {
    const { pageImageIdData } = usePageImagesIds(PageIds.RUSLIT_PAGE);
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
        <DefaultLayout strictLanguage='ru'>
            <div className="ruslit-page" >
                <CoverSection />
                <FirstSection />
                <SecondSection />
                <ThirdSection />
            </div>
        </DefaultLayout>
    );
};

export default RusLit;