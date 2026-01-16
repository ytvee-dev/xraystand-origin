import { type ReactElement } from "react";
import "./style.css";
import type {HomeSection} from "@modules/home/types";
// import * as paths from "@modules/nutrition/locales/paths.json";
import IconTextItem from "@components/common/Other/IconTextItem";

interface RulesBlockProps {
    content: HomeSection;
}

const iconStub = "https://res.cloudinary.com/dy6zg8dhs/image/upload/v1768051909/fruits_lgjvjd.webp";

const RulesBlock = ({content}: RulesBlockProps): ReactElement => {
    const { title, description } = content;
    const cardList = content.content;

    return (
        <div className="rules-block">
            <h2>{title}</h2>
            {description && <p>{description}</p>}
            <ul className="rules-block-card">
                {!!cardList?.length && cardList.map((item) => (
                    <li key={item.title}>
                        <IconTextItem
                            iconName={iconStub}
                            iconType="png"
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
