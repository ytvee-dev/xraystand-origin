import ContentImageCard from "@components/ContentImageCard";
import type { IImageCardResources } from "@domains/Translate";
import { ContentCardStyleTypes } from "@utils/constants";
import { type ReactElement } from "react";

export interface IContentImageCardsListProps {
    cardsTextData: IImageCardResources[];
    imageIdData: string[];
    styleType?: ContentCardStyleTypes;
    isSmallCards?: boolean;
}

const ContentImageCardsList = ({
    cardsTextData,
    imageIdData,
    styleType,
    isSmallCards,
}: IContentImageCardsListProps): ReactElement => {
    return (
        <div className="content-cards-list">
            {cardsTextData.map(
                (cardData: IImageCardResources, index: number) => (
                    <ContentImageCard
                        key={index}
                        imageId={imageIdData[index]}
                        label={cardData.label}
                        additionalInfo={cardData.additionalInfo}
                        styleType={styleType}
                        isSmallSize={isSmallCards}
                    />
                )
            )}
        </div>
    );
};

export default ContentImageCardsList;
