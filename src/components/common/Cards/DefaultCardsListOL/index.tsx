import {type ReactElement, useEffect, useState} from "react";
import type {TContentItem} from "@utils/types/trafficLawsTypes";
import {getCardProps} from "@components/common/Cards/DefaultCardsListOL/meta.ts";
import DefaultImageCard from "@components/common/Cards/DefaultImageCard";
import {useDispatch} from "react-redux";
import {setModalContentName} from "@store/slices/TrafficLawsPage";
import {setIsModalOpened} from "@store/slices/Application";
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
    isCardsClickable=false,
    smallImageSizes=false,
    backgroundCardsColor = DEFAULT_BACKGROUND_COLOR,
}: IContentCardsContainerProps): ReactElement => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const dispatch = useDispatch();

    const modalAction = (item : TContentItem) => {
        console.log("-");
        console.log("MODAL ACTION");
        console.log("", item);
        dispatch(setModalContentName(item));
        dispatch(setIsModalOpened(true));
        console.log("MODAL ACTION");
        console.log("-");
    }

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="default-cards-list" style={{maxWidth: width}}>
            {content.map((item, index) => {
                const props = getCardProps(item);
                if (!props) return null;

                return (
                    <div className={`list-default-card-wrapper card-wrapper-size-${smallImageSizes ? "small" : "normal"}`} key={index}>
                        <DefaultImageCard
                            {...props} imageId={imageIdData && imageIdData[index]}
                            smallImageSizes={smallImageSizes}
                            backgroundColor={backgroundCardsColor}
                            action={isCardsClickable ? () => modalAction(item) : () => {}}
                            linkText={isCardsClickable ? "посмотреть ещё" : ""}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default DefaultCardsListOL;
