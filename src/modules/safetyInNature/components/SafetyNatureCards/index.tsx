import type { ReactElement } from "react";
import SpriteIcon from "@components/common/Other/SpriteIcon";
import "./style.css";

export interface ISafetyNatureCard {
    title: string;
    description: string;
}

interface ISafetyNatureCardProps {
    cardContent: ISafetyNatureCard;
    iconId: string;
}

const SafetyNatureCard = ({ cardContent, iconId }: ISafetyNatureCardProps): ReactElement => {
    return (
        <div className="safety-nature-card">
            <div className="safety-nature-card-header">
                <SpriteIcon
                    iconId={iconId}
                    width="54px"
                    height="54px"
                />
                <h3 className="safety-nature-card-title">{cardContent.title}</h3>
            </div>

            <p className="safety-nature-card-description">{cardContent.description}</p>
        </div>
    );
};
export default SafetyNatureCard;