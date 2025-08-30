import {type ReactElement, useMemo} from "react";
import Spinner from "@components/common/Spinner";
import useImagesPreloader from "@hooks/useImagesPreloader";
import usePageImagesIds from "@hooks/usePageImagesIds";
import { PageIds } from "@domains/Translate";
import "./style.css";

const SafetyPrecautions = (): ReactElement => {
    const { pageImageIdData } = usePageImagesIds(PageIds.SAFETY_PRECAUTIONS_PAGE);
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
        <></>
    );
};

export default SafetyPrecautions;