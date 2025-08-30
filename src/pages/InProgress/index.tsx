import {type ReactElement, useMemo} from "react";
import Spinner from "@components/common/Spinner";
import useImagesPreloader from "@hooks/useImagesPreloader";
import usePageImagesIds from "@hooks/usePageImagesIds";
import { PageIds } from "@domains/Translate";
import DefaultLayout from "@layout/Default";
import ContentSection from "@components/common/Sections/DSContentSection";
import useWindowWidth from "@hooks/useScreenWidth.ts";
import DSNotification from "@components/common/DSNotification";
import "./style.css";

const textContent = {
    title: "Ведутся технические работы",
    description: "",
    notificationLabel: "string;",
    alertText:"Уважаемые гости нашего сайта, мы делаем всё, чтобы данная страница радовала вас и несла пользу. " +
        "Вы можете пока посмотреть другие страницы сайта." +
        "Спасибо за понимание!",
}

const InProgress = (): ReactElement => {
    const screenWidth = useWindowWidth();

    const { pageImageIdData } = usePageImagesIds(PageIds.IN_PROGRESS_PAGE);
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
        <DefaultLayout disabled={true}>
            <ContentSection textData={textContent}>
                <div className="in-progress-container">
                    <svg className="animated-svg">
                        <use
                            href={`./assets/images/sprite.svg#${
                                screenWidth > 800 ? 
                                    "inProgressDesktop" : 
                                    "inProgressMobile"
                            }`}/>
                    </svg>
                </div>
                <div className="content-section-alert-wrapper">
                    <DSNotification label={textContent.alertText} />
                </div>
            </ContentSection>

        </DefaultLayout>
    );
};

export default InProgress;