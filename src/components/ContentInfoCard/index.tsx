import { CONTENT_INFO_CARD_HOVER_REACTIVE_CLASSNAME } from "@utils/constants";
import type { IInfoCardResources } from "@domains/Translate";
import { type ReactElement } from "react";
import "./style.css";

export interface IContentInfoCardProps {
    data: IInfoCardResources;
    isHoverReactive?: boolean;
}

const ContentInfoCard = ({ data, isHoverReactive = true }: IContentInfoCardProps): ReactElement => {
    const hoverReactiveClassname: string = !isHoverReactive ? "" : CONTENT_INFO_CARD_HOVER_REACTIVE_CLASSNAME;

    return (
        <div className={`content-info-card ${hoverReactiveClassname}`}>
            <h3 className="card-title card-description-text text-color-common-opacity">{data.title}</h3>
            <div className="card-content">
                <ul>
                    {data.pointsTextList.map(
                        (pointText: string, index: number) => (
                            <li className="common-text text-color-common-second-opacity" key={index}>{pointText}</li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ContentInfoCard;
