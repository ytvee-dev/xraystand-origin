import Carousel from "@modules/kazTarih/components/Carousel";
import useScreenWidth from "@hooks/useScreenWidth";
import type { ReactElement } from "react";
import * as paths from "../../locales/path.json";
import "./style.css";

interface RiskContentItem {
    title: string;
    description: string;
}

type RiskCardContent = RiskContentItem[];

interface RiskGroupContent {
    title: string;
    subTitle: string;
    description: string;
    content: RiskCardContent[];
}

interface SecondSectionContent {
    title: string;
    subTitle: string;
    description: string;
    content: RiskGroupContent[];
}

interface SecondSectionProps {
    content: SecondSectionContent;
}

interface RiskHeadingProps {
    title: string;
    subTitle: string;
    description: string;
}

interface RiskCardProps {
    content: RiskCardContent;
    className?: string;
}

const RiskHeading = ({
    title,
    subTitle,
    description,
}: RiskHeadingProps): ReactElement => (
    <header className="cardiovascular-second-risk-heading">
        <img
            className="cardiovascular-second-pulse cardiovascular-second-pulse-left"
            src={paths.images.pulse_red}
            alt=""
        />

        <div className="cardiovascular-second-risk-heading-copy">
            <h3 className="cardiovascular-second-risk-title">{title}</h3>
            {subTitle && (
                <p className="cardiovascular-second-risk-subtitle">
                    {subTitle}
                </p>
            )}
            {description && (
                <p className="cardiovascular-second-risk-description">
                    {description}
                </p>
            )}
        </div>

        <img
            className="cardiovascular-second-pulse cardiovascular-second-pulse-right"
            src={paths.images.pulse_red}
            alt=""
        />
    </header>
);

const RiskCard = ({
    content,
    className = "",
}: RiskCardProps): ReactElement => {
    const [heading, ...rows] = content;

    return (
        <article className={`cardiovascular-second-card ${className}`.trim()}>
            <h4 className="cardiovascular-second-card-title">
                {heading?.title}
            </h4>

            <div className="cardiovascular-second-card-content">
                {rows.map((row, index) => (
                    <p
                        className="cardiovascular-second-card-row"
                        key={`${row.title}-${index}`}
                    >
                        <strong>{row.title}</strong>
                        {row.description && ` ${row.description}`}
                    </p>
                ))}
            </div>
        </article>
    );
};

const DesktopRiskCards = ({
    cards,
}: {
    cards: RiskCardContent[];
}): ReactElement => {
    if (cards.length === 1) {
        return (
            <div className="cardiovascular-second-cards cardiovascular-second-cards-single">
                <RiskCard content={cards[0]} />
            </div>
        );
    }

    return (
        <div className="cardiovascular-second-cards cardiovascular-second-cards-split">
            <div className="cardiovascular-second-card-column">
                {cards.slice(0, 2).map((card, index) => (
                    <RiskCard
                        content={card}
                        key={`${card[0]?.title}-${index}`}
                    />
                ))}
            </div>

            {cards[2] && (
                <div className="cardiovascular-second-card-column cardiovascular-second-card-column-centered">
                    <RiskCard content={cards[2]} />
                </div>
            )}
        </div>
    );
};

const MobileRiskCards = ({
    cards,
}: {
    cards: RiskCardContent[];
}): ReactElement => {
    if (cards.length === 1) {
        return (
            <div className="cardiovascular-second-mobile-single">
                <RiskCard content={cards[0]} />
            </div>
        );
    }

    return (
        <Carousel className="cardiovascular-second-carousel">
            {cards.map((card, index) => (
                <RiskCard
                    className="kaz-tarih-carousel-card cardiovascular-second-carousel-card"
                    content={card}
                    key={`${card[0]?.title}-${index}`}
                />
            ))}
        </Carousel>
    );
};

const SecondSection = ({ content }: SecondSectionProps): ReactElement => {
    const screenWidth = useScreenWidth();
    const isMobile = screenWidth <= 768;

    return (
        <section className="cardiovascular-second-section">
            <div className="cardiovascular-second-content">
                <header className="cardiovascular-second-intro">
                    <h2 className="cardiovascular-second-title">
                        {content.title}
                    </h2>
                    <p className="cardiovascular-second-intro-description">
                        <strong>{content.subTitle}</strong>
                        <span>{content.description}</span>
                    </p>
                </header>

                <div className="cardiovascular-second-risk-groups">
                    {content.content.map((riskGroup, index) => (
                        <section
                            className={`cardiovascular-second-risk-group cardiovascular-second-risk-group-${index + 1}`}
                            key={`${riskGroup.title}-${index}`}
                        >
                            <RiskHeading
                                title={riskGroup.title}
                                subTitle={riskGroup.subTitle}
                                description={riskGroup.description}
                            />

                            {isMobile ? (
                                <MobileRiskCards cards={riskGroup.content} />
                            ) : (
                                <DesktopRiskCards cards={riskGroup.content} />
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
