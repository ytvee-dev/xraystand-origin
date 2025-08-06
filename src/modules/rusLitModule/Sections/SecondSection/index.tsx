import {type ReactElement} from "react";
import {type DSContentBlockColorScheme} from "@components/common/DSContentBlock";
import BackgroundBlock from "@modules/rusLitModule/components/BackgroundBlock";
import * as content from "@modules/rusLitModule/locales/rus.json";
import "./style.css";

const rusLitTextColors: DSContentBlockColorScheme = {
    titleColor: "#871A16",
    subtitleColor: "#871A16",
    descriptionColor: "#871A16",
}

const SecondSection = (): ReactElement => {

    return (
        <section className="ruslit-second-section">
            <div className="ruslit-content-section-text-container">
                <h1
                    className="ruslit-content-section-title"
                    style={{color: rusLitTextColors.titleColor,}}
                >{content.secondSection.title}</h1>

                <h2 className="ruslit-content-section-description">
                    {content.secondSection.description}
                </h2>
            </div>
            <BackgroundBlock
                subtitle={content.secondSection.subTitle as string}
                cards={content.secondSection.content}
                cardsWidth={"210px"}
                era="old"
            />
            <BackgroundBlock
                subtitle={content.thirdSection.subTitle as string}
                cards={content.thirdSection.content}
                cardsWidth={"270px"}
                isCardsWrap={true}
                era="gold"
            />
            <BackgroundBlock
                subtitle={content.fourthSection.subTitle as string}
                cards={content.fourthSection.content}
                cardsWidth={"300px"}
                era="silver"
            />
            <BackgroundBlock
                subtitle={content.fifthSection.subTitle as string}
                cards={content.fifthSection.content}
                cardsWidth={"300px"}
                era="sssr"
                notificationText={content.fifthSection.notificationLabel}
            />

        </section>
    );
};

export default SecondSection;



