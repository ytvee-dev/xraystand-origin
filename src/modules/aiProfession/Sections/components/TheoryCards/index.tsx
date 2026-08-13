import React, { type ReactElement } from "react";
import Carousel from "@modules/kazTarih/components/Carousel";
import { usePageData } from "@hooks/usePageData";
import "./style.css";

interface ContentItem {
    title?: string;
    description?: string;
}

interface TheoryCardsProps {
    content: ContentItem[];
}

const TheoryCards: React.FC<TheoryCardsProps> = ({content,}): ReactElement => {
    const { isMobile } = usePageData();

    const cards = content.slice(1).map((item, index) => {
        const [cardTitle, cardText] =
            item.description?.split("\n") ?? [];

        return (
            <div className="kaz-tarih-carousel-card theory-card" key={index}>
                <h3 className="theory-card-title">{cardTitle}</h3>
                <p className="theory-card-description">{cardText}</p>
            </div>
        );
    });

    return (
        <div className="ai-profession-first-section-theory">
            <h2 className="ai-profession-first-section-theory-title">{content[0]?.title}</h2>

            {isMobile ? (
                <Carousel className="theory-cards-carousel">
                    {cards}
                </Carousel>
            ) : (
                <div className="theory-cards">
                    {cards}
                </div>
            )}
        </div>
    );
};

export default TheoryCards;