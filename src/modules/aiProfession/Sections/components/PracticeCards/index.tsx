import React, { type ReactElement, useState } from "react";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import "./style.css";

interface PracticeCard {
    title: string;
    buttonDescription: string;
    description: string;
}

interface PracticeCardsProps {
    cards: PracticeCard[];
}

const PracticeCards: React.FC<PracticeCardsProps> = ({cards}): ReactElement => {
    const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>( null );

    const selectedCard =
        selectedCardIndex !== null
            ? cards[selectedCardIndex]
            : null;

    const openModal = (index: number) => {
        setSelectedCardIndex(index);
    };

    const closeModal = () => {
        setSelectedCardIndex(null);
    };

    return (
        <div>
            <div className="practice-cards">
                {cards.map((card, index) => (
                    <div className={`practice-card practice-card-${index} ai-profession-glass-surface`} key={index}>
                        <h3 className="practice-card-title">{card.title}</h3>

                        <button className="practice-card-button" onClick={() => openModal(index)}>
                            {card.buttonDescription}
                        </button>
                    </div>
                ))}
            </div>

            <FlexibleModal
                isModalOpened={selectedCardIndex !== null}
                closeAction={closeModal}
            >
                <div className="practice-card-modal">
                    {selectedCard?.title && (
                        <h2 className="practice-card-modal-title">{selectedCard.title}</h2>
                    )}

                    {selectedCard?.description && (
                        <p className="practice-card-modal-description">{selectedCard.description}</p>
                    )}
                </div>
            </FlexibleModal>
        </div>
    );
};

export default PracticeCards;
