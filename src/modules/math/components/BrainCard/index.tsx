import React, {type ReactElement} from "react";
import "./style.css";

const DEFAULT_BACKGROUND_COLOR = "#2769A5";

export interface IBrainCardProps {
    title: string;
    description: string;
    backgroundColor?: string;
}

const BrainCard: React.FC<IBrainCardProps> = ({title, description, backgroundColor=DEFAULT_BACKGROUND_COLOR}): ReactElement => {

    return (
        <div className={'brain-card'} style={{backgroundColor: backgroundColor}}>
            <div className={'brain-card-content'}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default BrainCard;
