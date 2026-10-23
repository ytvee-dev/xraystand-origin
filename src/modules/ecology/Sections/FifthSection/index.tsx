import Carousel from "@components/common/Carousel";
import DSNotification from "@components/common/DSNotification";
import MythCard from "@modules/ecology/components/MythCard";
import NumberTitle from "@modules/ecology/components/NumberTitle";
import paths from "@modules/ecology/locales/path.json";
import { type ReactElement } from "react";
import "./style.css";

interface MythCardContent {
    title: string;
    description: string;
}

interface FifthSectionContent {
    title: string;
    cards: MythCardContent[];
    notificationCard: string;
}

interface FifthSectionProps {
    content: FifthSectionContent;
    isMobile: boolean;
}

const FifthSection = ({
    content,
    isMobile,
}: FifthSectionProps): ReactElement => {
    const { title, cards, notificationCard } = content;

    return (
        <section className="ecology-fifth-section">
            <div className="ecology-fifth-container">
                <NumberTitle number="+" title={title} />

                {isMobile ? (
                    <Carousel className="ecology-fifth-carousel">
                        {cards.map((mythCard, cardIndex) => (
                            <MythCard
                                key={mythCard.title}
                                title={mythCard.title}
                                description={mythCard.description}
                                imageUrl={paths.mythCards[cardIndex]}
                            />
                        ))}
                    </Carousel>
                ) : (
                    <div className="ecology-fifth-cards">
                        {cards.map((mythCard, cardIndex) => (
                            <MythCard
                                key={mythCard.title}
                                title={mythCard.title}
                                description={mythCard.description}
                                imageUrl={paths.mythCards[cardIndex]}
                            />
                        ))}
                    </div>
                )}

                <DSNotification
                    className="ecology-fifth-notification"
                    content={notificationCard}
                    fullWidth={true}
                    backgroundColor="#3D602C"
                    borderColor="#3D602C"
                    borderRadius="48px 48px 72px 32px"
                    textColor="#FCFCF5"
                    iconName="ecologyLeaf"
                    iconWidth={isMobile ? "34px" : "52px"}
                    iconHeight={isMobile ? "27px" : "42px"}
                    iconColor="#CCE68C"
                    fontSize="28px"
                    padding="60px 70px"
                    cardGap="30px"
                    imgPosition="flex-start"
                    paragraphWeight={400}
                />
            </div>
        </section>
    );
};

export default FifthSection;
