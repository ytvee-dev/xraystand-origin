import {type ReactElement} from "react";
import DefaultLayout from "@layout/Default";
import ContentSectionAlert from "@components/common/Other/ContentSectionAlert";
import ContentSection from "@components/common/Sections/ContentSection";
import useWindowWidth from "@hooks/useScreenWidth.ts";
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
                    <ContentSectionAlert label={textContent.alertText}/>
                </div>
            </ContentSection>

        </DefaultLayout>
    );
};

export default InProgress;