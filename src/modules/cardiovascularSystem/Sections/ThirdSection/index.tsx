import useScreenWidth from "@hooks/useScreenWidth";
import Carousel from "@modules/kazTarih/components/Carousel";
import type { ReactElement } from "react";
import * as paths from "../../locales/path.json";
import "./style.css";

interface FactorContentItem {
    title: string;
    description: string;
}

type FactorGroupContent = FactorContentItem[];

interface ThirdSectionContent {
    title: string;
    subTitle: string;
    description: string;
    content: FactorGroupContent[];
}

interface ThirdSectionProps {
    content: ThirdSectionContent;
}

interface FactorGroupHeadingProps {
    title: string;
}

interface FactorCardProps {
    content: FactorContentItem;
    iconSource: string;
    className?: string;
}

const FactorGroupHeading = ({
    title,
}: FactorGroupHeadingProps): ReactElement => (
    <header className="cardiovascular-third-group-heading">
        <img
            className="cardiovascular-third-pulse cardiovascular-third-pulse-left"
            src={paths.images.pulse_white_third_section}
            alt=""
        />

        <h3 className="cardiovascular-third-group-title">{title}</h3>

        <img
            className="cardiovascular-third-pulse cardiovascular-third-pulse-right"
            src={paths.images.pulse_white_third_section}
            alt=""
        />
    </header>
);

const FactorCard = ({
    content,
    iconSource,
    className = "",
}: FactorCardProps): ReactElement => (
    <article className={`cardiovascular-third-card ${className}`.trim()}>
        <div className="cardiovascular-third-card-icon">
            <img src={iconSource} alt="" />
        </div>
        <h4 className="cardiovascular-third-card-title">{content.title}</h4>
        <p className="cardiovascular-third-card-description">
            {content.description}
        </p>
    </article>
);

const ThirdSection = ({ content }: ThirdSectionProps): ReactElement => {
    const screenWidth = useScreenWidth();
    const isMobile = screenWidth <= 768;

    return (
        <section className="cardiovascular-third-section">
            <div className="cardiovascular-third-content">
                <header className="cardiovascular-third-intro">
                    <h2 className="cardiovascular-third-title">
                        {content.title}
                    </h2>
                    {content.subTitle && (
                        <h3 className="cardiovascular-third-subtitle">
                            {content.subTitle}
                        </h3>
                    )}
                    <p className="cardiovascular-third-description">
                        {content.description}
                    </p>
                </header>

                <div className="cardiovascular-third-groups">
                    {content.content.map((group, groupIndex) => {
                        const [heading, ...cards] = group;

                        if (!heading) {
                            return null;
                        }

                        return (
                            <section
                                className={`cardiovascular-third-group cardiovascular-third-group-${groupIndex + 1}`}
                                key={`${heading.title}-${groupIndex}`}
                            >
                                <FactorGroupHeading title={heading.title} />

                                {isMobile ? (
                                    <Carousel className="cardiovascular-third-carousel">
                                        {cards.map((card, cardIndex) => (
                                            <FactorCard
                                                className="kaz-tarih-carousel-card cardiovascular-third-carousel-card"
                                                content={card}
                                                iconSource={
                                                    paths.cards[
                                                        groupIndex * 3 + cardIndex
                                                    ] ?? ""
                                                }
                                                key={`${card.title}-${cardIndex}`}
                                            />
                                        ))}
                                    </Carousel>
                                ) : (
                                    <div className="cardiovascular-third-cards">
                                        {cards.map((card, cardIndex) => (
                                            <FactorCard
                                                content={card}
                                                iconSource={
                                                    paths.cards[
                                                        groupIndex * 3 + cardIndex
                                                    ] ?? ""
                                                }
                                                key={`${card.title}-${cardIndex}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </section>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
