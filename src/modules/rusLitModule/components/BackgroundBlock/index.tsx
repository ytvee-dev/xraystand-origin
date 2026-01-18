import {type ReactElement} from "react";
import DSNotification from "@components/common/DSNotification";
import {usePageData} from "@hooks/usePageData";
import DSCardsWrapper from "@components/common/Wrappers/DSCadsWrapper";
import DSCard from "@components/common/Cards/DSCard";
import * as paths from "@modules/rusLitModule/locales/paths.json";
import "./style.css";

interface IBackgroundBlockProps {
    subtitle?: string;
    cards?: {
        title: string;
        label: string;
    }[];
    cardsWidth?: string;
    isCardsWrap?: boolean;
    era?: "old" | "gold" | "silver" | "sssr";
    notificationText?: string | null;
}

const BackgroundBlock = ({
    subtitle = "",
    cards = [],
    cardsWidth = "210px",
    isCardsWrap = false,
    era = "old",
    notificationText = null,
}: IBackgroundBlockProps): ReactElement => {
    const { screenWidth } = usePageData();

    return (
        <div className="ruslit-content-section-content-container">
            <h3 className="ruslit-content-section-cards-title">
                {subtitle}
            </h3>
            <DSCardsWrapper
                screenMaxWidth={1000}
                cardsGap="24px"
                wrapperMaxWidth={1200}
                isWrap={screenWidth > 910 && isCardsWrap}
            >
                {cards.map((card, indx) => (
                    <DSCard
                        key={indx}
                        imageName={paths.people[era][indx]}
                        title={card.title}
                        label={card.label}
                        backgroundColor="#FFFFFF"
                        minWidth="97px"
                        maxWidth={screenWidth > 511 ? cardsWidth : "310px"}
                        imageHeight="300px"
                        sxText={{
                            imgObjectFit: 'contain',
                            titleColor: '#333333',
                            labelColor: '#555555',
                            linkColor: '#FF5722',
                            fontWeight: 500,
                        }}
                    />
                ))}

                {screenWidth < 910 && notificationText && (
                    <div style={{maxWidth: 1200}}>
                        <DSNotification
                            label={notificationText}
                            backgroundColor={"#FFE9E9"}
                            iconColor={"#871A16"}
                            fullWidth={true}
                        />
                    </div>
                )}

            </DSCardsWrapper>

            {screenWidth >= 910 && notificationText && (
                <div style={{maxWidth: 1200}}>
                    <DSNotification
                        label={notificationText}
                        backgroundColor={"#FFE9E9"}
                        iconColor={"#871A16"}
                        fullWidth={true}
                    />
                </div>
            )}
        </div>
    );
};

export default BackgroundBlock;



