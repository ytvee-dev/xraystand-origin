import {type ReactElement, useMemo} from "react";
import Spinner from "@components/common/Spinner";
import useImagesPreloader from "@hooks/useImagesPreloader";
import usePageImagesIds from "@hooks/usePageImagesIds";
import { PageIds } from "@domains/Translate";

const NotFoundPage = (): ReactElement => {
    const { pageImageIdData } = usePageImagesIds(PageIds.NOT_FOUND_PAGE);
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
    return <div className="not-found-page">Not Found Page</div>;
};

export default NotFoundPage;
