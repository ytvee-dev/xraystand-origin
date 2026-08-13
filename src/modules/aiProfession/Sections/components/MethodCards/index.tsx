import React, { type ReactElement } from "react";
import { useMemo } from "react";
import { useState } from "react";
import FlexibleModal from "@components/common/Modal/FlexibleModal";
import { usePageData } from "@hooks/usePageData";
import * as paths from "../../../locales/path.json";
import "./style.css";

interface ListItem {
    title: string;
    description: string;
}

export interface ContentItem {
    title?: string;
    subTitle?: string;
    description?: string;
    secondDescription?: string;
    finalDescription?: string;
    list?: ListItem[];
}

interface MethodsCardsProps {
    content: ContentItem[][];
}

const MethodsCards: React.FC<MethodsCardsProps> = ({ content, }): ReactElement => {
    const { screenWidth, currentLocale } = usePageData();

    const [selectedMethodIndex, setSelectedMethodIndex] = useState<
        number | null
    >(null);

    const isMobile = useMemo(() => screenWidth <= 780, [screenWidth],);

    const methodImages = [
        paths.cards.firstSection[0],
        paths.cards.firstSection[1],
    ];

    const selectedMethod =
        selectedMethodIndex !== null
            ? content[selectedMethodIndex]?.[0]
            : null;

    const openModal = (index: number) => {
        setSelectedMethodIndex(index);
    };

    const closeModal = () => {
        setSelectedMethodIndex(null);
    };

    const getButtonText = (index: number) => {
        if (currentLocale === "kz") {
            return index === 0
                ? "Әдіс қалай жұмыс істейді?"
                : "Икигай қалай жұмыс істейді?";
        }

        return index === 0
            ? "Как работает метод?"
            : "Как работает Икигай?";
    };

    return (
        <div>
            <div className="ai-profession-methods">
                {content.map((method, index) => {
                    const item = method[0];

                    if (!item) return null;

                    return (
                        <div className={`ai-profession-method ai-profession-method-${index}`} key={index}>
                            {item.title && (
                                <h2 className="ai-profession-method-title">{item.title}</h2>
                            )}

                            <div className={`ai-profession-method-content ${index === 0 ? "image-left" : "image-right"}`}>
                                {methodImages[index] && (
                                    <img className={`ai-profession-method-image method-image-${index}`} src={methodImages[index]} alt="" />
                                )}

                                <div className="ai-profession-method-text">
                                    {item.subTitle && (
                                        <p className="ai-profession-method-subtitle">{item.subTitle}</p>
                                    )}

                                    {item.description && (
                                        <p className="ai-profession-method-description">{item.description}</p>
                                    )}

                                    {!isMobile && (
                                        <>
                                            {item.secondDescription && (
                                                <p className="ai-profession-method-second-description">
                                                    {item.secondDescription}
                                                </p>
                                            )}

                                            {item.list?.length ? (
                                                <ol className="ai-profession-method-list">
                                                    {item.list.map(
                                                        (
                                                            listItem,
                                                            listIndex,
                                                        ) => (
                                                            <li className="ai-profession-method-list-item" key={listIndex}>
                                                                <strong className="ai-profession-method-list-title">{listItem.title}</strong>
                                                                <span className="ai-profession-method-list-description">{listItem.description}</span>
                                                            </li>
                                                        ),
                                                    )}
                                                </ol>
                                            ) : null}

                                            {item.finalDescription && (
                                                <p className="ai-profession-method-final-description">{item.finalDescription}</p>
                                            )}
                                        </>
                                    )}
                                </div>

                                {isMobile && (
                                    <button type="button" className="ai-profession-method-button" onClick={() => openModal(index)}>
                                        {getButtonText(index)}
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            <FlexibleModal
                isModalOpened={selectedMethodIndex !== null}
                closeAction={closeModal}
            >
                <div className="ai-profession-method-modal">
                    {selectedMethod?.description && (
                        <p className="ai-profession-method-modal-description">{selectedMethod.description}</p>
                    )}
                    {selectedMethod?.secondDescription && (
                        <p className="ai-profession-method-modal-second-description">{selectedMethod.secondDescription}</p>
                    )}

                    {selectedMethod?.list?.length ? (
                        <ol className="ai-profession-method-modal-list">
                            {selectedMethod.list.map(
                                (listItem, index) => (
                                    <li className="ai-profession-method-modal-list-item" key={index}>({listItem.description})</li>
                                ),
                            )}
                        </ol>
                    ) : null}

                    {selectedMethod?.finalDescription && (
                        <p className="ai-profession-method-modal-final">{selectedMethod.finalDescription}</p>
                    )}
                </div>
            </FlexibleModal>
        </div>
    );
};

export default MethodsCards;