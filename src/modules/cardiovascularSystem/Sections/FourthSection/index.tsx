import useScreenWidth from "@hooks/useScreenWidth";
import Carousel from "@modules/kazTarih/components/Carousel";
import type { ReactElement } from "react";
import * as paths from "../../locales/path.json";
import "./style.css";

interface ContentItem {
    title: string;
    description: string;
}

interface PreventionContent {
    title: string;
    subTitle: string;
    description: string;
    content: ContentItem[];
}

interface ScheduleContent {
    title: string;
    subTitle: string;
    description: string;
    content: ContentItem[][];
}

interface FourthSectionProps {
    content: PreventionContent;
    schedule: ScheduleContent;
}

interface StepCardProps {
    item: ContentItem;
    className?: string;
}

const StepCard = ({ item, className = "" }: StepCardProps): ReactElement => (
    <article className={`cardiovascular-fourth-step ${className}`.trim()}>
        <h3 className="cardiovascular-fourth-step-title">{item.title}</h3>
        {item.description && (
            <p className="cardiovascular-fourth-step-description">
                {item.description}
            </p>
        )}
    </article>
);

const ScheduleHeading = ({
    title,
    description,
}: Pick<ScheduleContent, "title" | "description">): ReactElement => (
    <header className="cardiovascular-fourth-schedule-heading">
        <img
            className="cardiovascular-fourth-pulse cardiovascular-fourth-pulse-left"
            src={paths.images.pulse_red}
            alt=""
        />

        <div className="cardiovascular-fourth-schedule-copy">
            <h2 className="cardiovascular-fourth-schedule-title">{title}</h2>
            <p className="cardiovascular-fourth-schedule-description">
                {description}
            </p>
        </div>

        <img
            className="cardiovascular-fourth-pulse cardiovascular-fourth-pulse-right"
            src={paths.images.pulse_red}
            alt=""
        />
    </header>
);

const ScheduleCard = ({
    content,
    className = "",
}: {
    content: ContentItem[];
    className?: string;
}): ReactElement => {
    const [heading, ...rows] = content;

    return (
        <article
            className={`cardiovascular-fourth-schedule-card ${className}`.trim()}
        >
            <h3 className="cardiovascular-fourth-schedule-card-title">
                {heading?.title}
            </h3>

            <div className="cardiovascular-fourth-schedule-card-content">
                {rows.map((row, index) => (
                    <p
                        className="cardiovascular-fourth-schedule-card-row"
                        key={`${row.title}-${index}`}
                    >
                        {row.title && <strong>{row.title}</strong>}
                        {row.description && <span>{row.description}</span>}
                    </p>
                ))}
            </div>
        </article>
    );
};

const DesktopScheduleCards = ({
    cards,
}: {
    cards: ContentItem[][];
}): ReactElement => (
    <div className="cardiovascular-fourth-schedule-cards">
        <div className="cardiovascular-fourth-schedule-column">
            {[cards[0], cards[1]].filter(Boolean).map((card, index) => (
                <ScheduleCard content={card} key={`${card[0]?.title}-${index}`} />
            ))}
        </div>

        <div className="cardiovascular-fourth-schedule-column">
            {cards.slice(2).map((card, index) => (
                <ScheduleCard content={card} key={`${card[0]?.title}-${index}`} />
            ))}
        </div>
    </div>
);

const MobileScheduleCards = ({
    cards,
}: {
    cards: ContentItem[][];
}): ReactElement => {
    const orderedCards = [cards[0], cards[2], cards[1], cards[3], cards[4]].filter(
        Boolean,
    );

    return (
        <Carousel className="cardiovascular-fourth-carousel">
            {orderedCards.map((card, index) => (
                <ScheduleCard
                    className="kaz-tarih-carousel-card cardiovascular-fourth-carousel-card"
                    content={card}
                    key={`${card[0]?.title}-${index}`}
                />
            ))}
        </Carousel>
    );
};

const FourthSection = ({
    content,
    schedule,
}: FourthSectionProps): ReactElement => {
    const screenWidth = useScreenWidth();
    const isMobile = screenWidth <= 768;
    const leftSteps = content.content.slice(0, 4);
    const rightSteps = content.content.slice(4);

    return (
        <section className="cardiovascular-fourth-section">
            <div className="cardiovascular-fourth-content">
                <header className="cardiovascular-fourth-intro">
                    <h2 className="cardiovascular-fourth-title">
                        {content.title}
                    </h2>
                    {content.subTitle && (
                        <h3 className="cardiovascular-fourth-subtitle">
                            {content.subTitle}
                        </h3>
                    )}
                    <p className="cardiovascular-fourth-description">
                        {content.description}
                    </p>
                </header>

                <div className="cardiovascular-fourth-steps-desktop">
                    <div className="cardiovascular-fourth-step-column cardiovascular-fourth-step-column-left">
                        {leftSteps.map((item, index) => (
                            <StepCard
                                item={item}
                                className={`cardiovascular-fourth-step-${index + 1}`}
                                key={`${item.title}-${index}`}
                            />
                        ))}
                    </div>

                    <img
                        className="cardiovascular-fourth-heart"
                        src={paths.images.heart}
                        alt=""
                    />

                    <div className="cardiovascular-fourth-step-column cardiovascular-fourth-step-column-right">
                        {rightSteps.map((item, index) => (
                            <StepCard
                                item={item}
                                className={`cardiovascular-fourth-step-${index + 5}`}
                                key={`${item.title}-${index}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="cardiovascular-fourth-steps-mobile">
                    <img
                        className="cardiovascular-fourth-heart"
                        src={paths.images.heart}
                        alt=""
                    />
                    <div className="cardiovascular-fourth-mobile-step-list">
                        {content.content.map((item, index) => (
                            <StepCard item={item} key={`${item.title}-${index}`} />
                        ))}
                    </div>
                </div>

                <section className="cardiovascular-fourth-schedule">
                    <ScheduleHeading
                        title={schedule.title}
                        description={schedule.description}
                    />

                    {isMobile ? (
                        <MobileScheduleCards cards={schedule.content} />
                    ) : (
                        <DesktopScheduleCards cards={schedule.content} />
                    )}
                </section>
            </div>
        </section>
    );
};

export default FourthSection;
