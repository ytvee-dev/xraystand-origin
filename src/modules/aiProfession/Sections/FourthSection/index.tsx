import Carousel from "@modules/kazTarih/components/Carousel";
import { usePageData } from "@hooks/usePageData";
import { type ReactElement } from "react";
import SectionHeadingPanel from "../components/SectionHeadingPanel";
import SectionMediaBlock, {
    type TSectionMediaPosition,
} from "../components/SectionMediaBlock";
import SectionNotice from "../components/SectionNotice";
import SectionTextCard from "../components/SectionTextCard";
import * as paths from "../../locales/path.json";
import "./style.css";

interface IFourthSectionContentItem {
    title: string;
    subTitle?: string;
    description?: string;
}

interface IFourthSectionContent {
    title: string;
    subTitle: string;
    description: string;
    content: IFourthSectionContentItem[][];
    aiProffesionDescription: string;
}

interface IFourthSectionProps {
    content: IFourthSectionContent;
}

const splitNoticeText = (value: string): [string, string] => {
    const separatorIndex = value.indexOf(":");

    if (separatorIndex === -1) {
        return [value, ""];
    }

    return [
        value.slice(0, separatorIndex + 1),
        value.slice(separatorIndex + 1).trim(),
    ];
};

const mediaPositions: TSectionMediaPosition[] = ["right", "left", "right"];

const FourthSection = ({ content }: IFourthSectionProps): ReactElement => {
    const { screenWidth } = usePageData();
    const isMobile = screenWidth <= 800;
    const creativityContent = content.content[0];
    const authorshipContent = content.content[1];
    const analogyContent = creativityContent[0];
    const ruleCards = creativityContent.slice(1);
    const authorshipIntro = authorshipContent[0];
    const copyrightContent = authorshipContent[1];
    const mediaContent = authorshipContent.slice(2);
    const [noticeTitle, noticeDescription] = splitNoticeText(
        content.aiProffesionDescription,
    );

    const createRuleCard = (
        item: IFourthSectionContentItem,
        index: number,
    ): ReactElement => (
        <SectionTextCard
            key={`${index}-${item.title}`}
            title={item.title}
            description={item.description ?? ""}
            className="kaz-tarih-carousel-card ai-profession-fourth-rule-card"
            titleClassName="ai-profession-fourth-rule-title"
            descriptionClassName="ai-profession-fourth-rule-description"
        />
    );

    const createMediaBlock = (
        item: IFourthSectionContentItem,
        index: number,
    ): ReactElement => (
        <SectionMediaBlock
            key={`${index}-${item.title}`}
            title={item.title}
            description={item.description ?? ""}
            image={paths.images.fourthSection[index + 1]}
            imagePosition={mediaPositions[index]}
            className={`ai-profession-fourth-media ai-profession-fourth-media-${index + 1}`}
        />
    );

    return (
        <section className="ai-profession-fourth-section">
            <img
                className="ai-profession-fourth-background ai-profession-fourth-background-top"
                src={paths.backgrounds.fourthSection[0]}
                alt=""
                aria-hidden="true"
            />
            <img
                className="ai-profession-fourth-background ai-profession-fourth-background-bottom"
                src={paths.backgrounds.fourthSection[1]}
                alt=""
                aria-hidden="true"
            />

            <div className="ai-profession-fourth-content">
                <SectionHeadingPanel
                    title={content.title}
                    description={content.subTitle}
                    className="ai-profession-fourth-heading"
                    titleClassName="ai-profession-fourth-heading-title"
                    descriptionClassName="ai-profession-fourth-heading-description"
                />

                <div className="ai-profession-fourth-lead">
                    <p className="ai-profession-fourth-lead-text">
                        {content.description}
                    </p>
                    <img
                        className="ai-profession-fourth-lead-image"
                        src={paths.images.fourthSection[0]}
                        alt=""
                        aria-hidden="true"
                    />
                </div>

                <div className="ai-profession-fourth-analogy">
                    <h2 className="ai-profession-fourth-section-title">
                        {analogyContent.title}
                    </h2>
                    <p className="ai-profession-fourth-section-description">
                        {analogyContent.subTitle}
                    </p>
                </div>

                {isMobile ? (
                    <Carousel className="ai-profession-fourth-rules-carousel">
                        {ruleCards.map(createRuleCard)}
                    </Carousel>
                ) : (
                    <div className="ai-profession-fourth-rules">
                        {ruleCards.map(createRuleCard)}
                    </div>
                )}

                <SectionHeadingPanel
                    title={authorshipIntro.title}
                    description={authorshipIntro.subTitle ?? ""}
                    className="ai-profession-fourth-heading ai-profession-fourth-authorship-heading"
                    titleClassName="ai-profession-fourth-heading-title"
                    descriptionClassName="ai-profession-fourth-heading-description"
                />

                <div className="ai-profession-fourth-copyright">
                    <h2 className="ai-profession-fourth-section-title">
                        {copyrightContent.title}
                    </h2>
                    <p className="ai-profession-fourth-section-description">
                        {copyrightContent.description}
                    </p>
                </div>

                <div className="ai-profession-fourth-media-list">
                    {mediaContent.map(createMediaBlock)}
                </div>

                <SectionNotice
                    title={noticeTitle}
                    description={noticeDescription}
                    className="ai-profession-fourth-notice"
                />
            </div>
        </section>
    );
};

export default FourthSection;
