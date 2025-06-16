import ContentInfoCard from "@components/ContentInfoCard";
import type { IInfoCardResources } from "@domains/Translate";
import { type ReactElement } from "react";

export interface IContentInfoCardsListProps {
    cardsDataList: IInfoCardResources[];
}

const ContentInfoCardsList = ({
    cardsDataList,
}: IContentInfoCardsListProps): ReactElement => {
    return (
        <div className="content-cards-list">
            {cardsDataList.map(
                (cardData: IInfoCardResources, index: number) => (
                    <ContentInfoCard key={index} data={cardData} />
                )
            )}
        </div>
    );
};

export default ContentInfoCardsList;
