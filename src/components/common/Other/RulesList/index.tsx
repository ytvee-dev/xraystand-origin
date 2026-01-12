import type { TRuleItem } from "@modules/safetyPrecautions/types";
import type { ReactElement } from "react";
import "./style.css";

interface IRulesListProps {
    items: TRuleItem[];
}

const RulesList = ({ items }: IRulesListProps): ReactElement => {
    return (
        <ul className="rules-list">
            {items.map((item, index) => (
                <p key={index} className="rules-list-item">
                    {item.title}
                </p>
            ))}
        </ul>
    );
};

export default RulesList;
