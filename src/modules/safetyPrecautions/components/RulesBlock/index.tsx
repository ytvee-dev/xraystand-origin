import { type ReactElement } from "react";
import "./style.css";
import type {HomeSection} from "@modules/home/types";
import IconTextItem from "@components/common/Other/IconTextItem";

export interface RulesBlockSX {
    titleColor: string;
    descriptionColor: string;
}

export interface RulesBlockProps {
    content: HomeSection;
    sx?: RulesBlockSX | null;
    icons?: string[];
}

const RulesBlock = ({content, sx, icons}: RulesBlockProps): ReactElement => {
    const { title, description } = content;
    const cardList = content.content;
    const titleColor = sx?.titleColor;
    const descriptionColor = sx?.descriptionColor;

    return (
        <div className="rules-block">
            <h2 style={{color: titleColor}}>{title}</h2>
            {description && <p style={{color: descriptionColor}}>{description}</p>}
            <ul className="rules-block-card">
                {!!cardList?.length && cardList.map((item, i: number) => (
                    <li key={item.title}>
                        <IconTextItem
                            iconName={icons && icons[i]}
                            iconType="mui"
                            iconColor={sx?.titleColor}
                            title={item.title}
                            text={item.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RulesBlock;
