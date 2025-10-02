import {type ReactElement} from "react";
import type {TContentItem} from "../../../../utils/types/trafficLawsTypes";
import {getCardProps} from "./meta.ts";
import DefaultImageCard from "../DefaultImageCard";
import {useDispatch} from "react-redux";
import {setModalContentName} from "../../../../store/slices/TrafficLawsPage";
import {setIsModalOpened} from "../../../../store/slices/Application";
import useWindowWidth from "../../../../hooks/useScreenWidth.ts";
import {useLocale} from "@hooks/useLocale";
import "./style.css";

export interface IContentCardsContainerProps {
    content: TContentItem[];
    imageIdData?: string[];
    backgroundCardsColor?: string;
    isCardsClickable?: boolean;
    smallImageSizes?: boolean
}

const DEFAULT_BACKGROUND_COLOR: string = "#FFFFFF";

const DefaultCardsListOL = ({
    content,
    imageIdData,
    isCardsClickable = false,
    smallImageSizes = false,
    backgroundCardsColor = DEFAULT_BACKGROUND_COLOR,
}: IContentCardsContainerProps): ReactElement => {
    const dispatch = useDispatch();
    const screenWidth = useWindowWidth();
    const currentLocale = useLocale();

    const modalAction = (item: TContentItem) => {
        dispatch(setModalContentName(item));
        dispatch(setIsModalOpened(true));
    }

    return (
        <div className="default-cards-list" style={{maxWidth: screenWidth}}>
            {content.map((item, index) => {
                const props = getCardProps(item);
                if (!props) return null;

                return (
                    <div
                        className={`list-default-card-wrapper card-wrapper-size-${smallImageSizes ? "small" : "normal"}`}
                        key={index}>
                        <DefaultImageCard
                            {...props} imageId={imageIdData && imageIdData[index]}
                            smallImageSizes={smallImageSizes}
                            backgroundColor={backgroundCardsColor}
                            action={isCardsClickable ? () => modalAction(item) : () => {
                            }}
                            linkText={
                                isCardsClickable && currentLocale == "ru" ? "посмотреть ещё" :
                                    isCardsClickable && currentLocale == "kz" ? "Қосымша қарау" : ""
                            }
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default DefaultCardsListOL;
