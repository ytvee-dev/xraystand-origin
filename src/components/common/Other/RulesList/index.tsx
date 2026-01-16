import type { TRuleItem } from "@modules/safetyPrecautions/types";
import type { ReactElement } from "react";
import "./style.css";

interface IRulesListProps {
    items: TRuleItem[];
    marginAuto?: 'right' | 'left';
}

const RulesList = ({ items, marginAuto = 'left' }: IRulesListProps): ReactElement => {

    return (
        <ul className="rules-list" style={marginAuto === 'left' ? {marginLeft: 'auto'} : {marginRight: 'auto'}}>
            {items.map((item, index) => (
                <p key={index} className="rules-list-item">
                    {item.title}
                </p>
            ))}
        </ul>
    );
};

export default RulesList;
