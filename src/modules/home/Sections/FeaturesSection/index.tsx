import React, {type ReactElement} from "react";
import type {HomeSection} from "../../types";
import HomeCard from "@modules/home/components/HomeCard";
import "./style.css";

interface FeaturesSectionProps {
    content: HomeSection;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({content}): ReactElement => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

    const handleCardToggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section id="home-features" className="home-section features-section">
            <div className="home-features-cards-wrapper">
                {content?.content?.map((card, index: number) => (
                    <HomeCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        cardType={index % 2 === 0 ? 'black' : 'light'}
                        imageIndex={index}
                        isActive={activeIndex === index}
                        onActivate={() => handleCardToggle(index)}
                    />
                ))}

            </div>
        </section>
    );
};

export default FeaturesSection;