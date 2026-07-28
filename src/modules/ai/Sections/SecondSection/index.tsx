import { type ReactElement } from "react";
import Carousel from "@modules/kazTarih/components/Carousel";
import { usePageData } from "@hooks/usePageData";
import * as paths from "@modules/ai/locales/paths.json";
import leftNetwork from "@modules/ai/locales/left_network.svg";
import rightNetwork from "@modules/ai/locales/right_network.svg";
import "./style.css";

interface SecondSectionContentItem {
    title?: string;
    description?: string;
    subTitle?: string;
    content?: SecondSectionContentItem[];
    listIntro?: string;
    note?: string;
}

interface SecondSectionContent {
    title: string;
    subTitle: string;
    content: SecondSectionContentItem[][];
    aiDescription: string;
}

interface SecondSectionProps {
    content: SecondSectionContent;
}

interface CardProps {
    item: SecondSectionContentItem;
    image: string;
}

interface CardCollectionProps {
    items: SecondSectionContentItem[];
    isMobile: boolean;
}

interface TextProps {
    text: string;
}

interface MainRuleProps {
    item?: SecondSectionContentItem;
}

interface SplitText {
    label: string;
    body: string;
}

const APPLICATION_LABELS = [
    "Как применять:",
    "Қалай қолдануға болады:",
];

const normalizeContentText = (text: string): string => {
    return text
        .replace(
            /([.!?])(?=[A-ZА-ЯЁӘІҢҒҮҰҚӨҺ])/g,
            "$1 ",
        )
        .trim();
};

const splitAtFirstColon = (text: string): SplitText | null => {
    const colonIndex = text.indexOf(":");

    if (colonIndex < 0) {
        return null;
    }

    return {
        label: text.slice(0, colonIndex + 1).trim(),
        body: text.slice(colonIndex + 1).trim(),
    };
};

const splitAtApplicationLabel = (text: string): SplitText | null => {
    const normalizedText = normalizeContentText(text);
    const hasApplicationLabel = (applicationLabel: string): boolean => {
        return normalizedText.includes(applicationLabel);
    };
    const label = APPLICATION_LABELS.find(hasApplicationLabel);

    if (!label) {
        return null;
    }

    const labelIndex = normalizedText.indexOf(label);
    const introduction = normalizedText.slice(0, labelIndex).trim();
    const application = normalizedText
        .slice(labelIndex + label.length)
        .trim();

    return {
        label: `${introduction}\n${label}`,
        body: application,
    };
};

const LeadingLabelText = ({ text }: TextProps): ReactElement => {
    const splitText = splitAtFirstColon(text);

    if (!splitText) {
        return <>{text}</>;
    }

    const { label, body } = splitText;

    return (
        <>
            <strong>{label}</strong> {body}
        </>
    );
};

const ModernAiCard = ({ item, image }: CardProps): ReactElement => {
    const title = item.title?.trim() ?? "";
    const description = normalizeContentText(item.description ?? "");

    return (
        <article className="ai-second-modern-card kaz-tarih-carousel-card">
            <h3 className="ai-second-card-heading">{title}</h3>
            <div className="ai-second-modern-card-body">
                <p className="ai-second-modern-card-text">{description}</p>
                <img
                    className="ai-second-modern-card-image"
                    src={image}
                    alt=""
                    aria-hidden="true"
                />
            </div>
        </article>
    );
};

const createModernAiCard = (
    item: SecondSectionContentItem,
    index: number,
): ReactElement => {
    return (
        <ModernAiCard
            item={item}
            image={paths.modernAiCards[index] ?? ""}
            key={`${item.title ?? "modern-ai-card"}-${index}`}
        />
    );
};

const ModernAiCards = ({
    items,
    isMobile,
}: CardCollectionProps): ReactElement => {
    if (isMobile) {
        return (
            <Carousel className="ai-second-carousel ai-second-modern-carousel">
                {items.map(createModernAiCard)}
            </Carousel>
        );
    }

    return (
        <div className="ai-second-modern-grid">
            {items.map(createModernAiCard)}
        </div>
    );
};

const PromptAnatomyCard = ({ item, image }: CardProps): ReactElement => {
    const title = item.title?.trim() ?? "";
    const description = item.description?.trim() ?? "";

    return (
        <article className="ai-second-anatomy-card">
            <img
                className="ai-second-anatomy-card-image"
                src={image}
                alt=""
                aria-hidden="true"
            />
            <p className="ai-second-anatomy-card-text">
                <strong>{title}:</strong> {description}
            </p>
        </article>
    );
};

const createPromptAnatomyCard = (
    item: SecondSectionContentItem,
    index: number,
): ReactElement => {
    return (
        <PromptAnatomyCard
            item={item}
            image={paths.promtAnatomyCards[index] ?? ""}
            key={`${item.title ?? "prompt-anatomy-card"}-${index}`}
        />
    );
};

const PromptTemplateCard = ({
    item,
}: {
    item: SecondSectionContentItem;
}): ReactElement => {
    const title = item.title?.trim() ?? "";
    const description = item.description ?? "";
    const splitDescription = splitAtApplicationLabel(description);

    if (!splitDescription) {
        return (
            <article className="ai-second-template-card kaz-tarih-carousel-card">
                <h3 className="ai-second-card-heading">{title}</h3>
                <p className="ai-second-template-card-text">
                    {normalizeContentText(description)}
                </p>
            </article>
        );
    }

    const labelParts = splitDescription.label.split("\n");
    const introduction = labelParts[0] ?? "";
    const applicationLabel = labelParts[1] ?? "";

    return (
        <article className="ai-second-template-card kaz-tarih-carousel-card">
            <h3 className="ai-second-card-heading">{title}</h3>
            <div className="ai-second-template-card-text">
                <p>{introduction}</p>
                <p>
                    <strong>{applicationLabel}</strong>{" "}
                    {splitDescription.body}
                </p>
            </div>
        </article>
    );
};

const createPromptTemplateCard = (
    item: SecondSectionContentItem,
    index: number,
): ReactElement => {
    return (
        <PromptTemplateCard
            item={item}
            key={`${item.title ?? "prompt-template-card"}-${index}`}
        />
    );
};

const PromptTemplateCards = ({
    items,
    isMobile,
}: CardCollectionProps): ReactElement => {
    if (isMobile) {
        return (
            <Carousel className="ai-second-carousel ai-second-template-carousel">
                {items.map(createPromptTemplateCard)}
            </Carousel>
        );
    }

    return (
        <div className="ai-second-template-grid">
            {items.map(createPromptTemplateCard)}
        </div>
    );
};

const createMainRuleItem = (
    item: SecondSectionContentItem,
    index: number,
): ReactElement => {
    return (
        <li key={`${item.description ?? "main-rule-item"}-${index}`}>
            {item.description}
        </li>
    );
};

const MainRule = ({ item }: MainRuleProps): ReactElement | null => {
    if (!item) {
        return null;
    }

    const {
        title,
        description,
        listIntro,
        content: listItems = [],
        note,
    } = item;

    return (
        <section className="ai-second-main-rule">
            <h2 className="ai-second-section-heading">{title}</h2>
            <p>{normalizeContentText(description ?? "")}</p>
            <p className="ai-second-main-rule-list-intro">{listIntro}</p>
            <ul>{listItems.map(createMainRuleItem)}</ul>
            <p className="ai-second-main-rule-note">{note}</p>
        </section>
    );
};

const SecondSection = ({
    content,
}: SecondSectionProps): ReactElement => {
    const { isMobile } = usePageData();
    const { title, subTitle, content: groups, aiDescription } = content;
    const modernAiCards = groups[0] ?? [];
    const promptAnatomy = groups[1]?.[0];
    const promptTemplates = groups[2]?.[0];
    const mainRule = groups[3]?.[0];

    return (
        <section className="ai-second-section">
            <img className="ai-second-bg" src={paths.otherSectionsBg} alt="" />
            <img
                className="ai-second-purple-figure ai-second-purple-figure-top"
                src={paths.figures.purple}
                alt=""
                aria-hidden="true"
            />
            <img
                className="ai-second-purple-figure ai-second-purple-figure-bottom"
                src={paths.figures.purple}
                alt=""
                aria-hidden="true"
            />

            <div className="ai-second-content">
                <header className="ai-second-introduction">
                    <h2 className="ai-second-section-heading">{title}</h2>
                    <p>{normalizeContentText(subTitle)}</p>
                </header>

                <ModernAiCards
                    items={modernAiCards}
                    isMobile={isMobile}
                />

                {promptAnatomy && (
                    <section className="ai-second-content-block">
                        <header className="ai-second-block-heading">
                            <h2 className="ai-second-section-heading">
                                {promptAnatomy.title}
                            </h2>
                            <p>{promptAnatomy.subTitle}</p>
                        </header>
                        <div className="ai-second-anatomy-grid">
                            {(promptAnatomy.content ?? []).map(
                                createPromptAnatomyCard,
                            )}
                        </div>
                    </section>
                )}

                {promptTemplates && (
                    <section className="ai-second-content-block">
                        <h2 className="ai-second-section-heading ai-second-template-title">
                            {promptTemplates.title}
                        </h2>
                        <PromptTemplateCards
                            items={promptTemplates.content ?? []}
                            isMobile={isMobile}
                        />
                    </section>
                )}

                <aside className="ai-second-example">
                    <LeadingLabelText text={aiDescription} />
                </aside>

                <MainRule item={mainRule} />
            </div>
        </section>
    );
};

export default SecondSection;
