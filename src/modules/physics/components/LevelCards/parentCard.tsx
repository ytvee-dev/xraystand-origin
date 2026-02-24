import type { ReactElement } from 'react';
import ChildCard from './childCard';
import './parentStyle.css';
//пропс: 1 card
interface Cards{
    title?: string,
    subTitle?: string,
    description: string
}

interface IParentCard{
    content: Array<Cards>
}

const ParentCard = ({ content }: IParentCard):ReactElement => {
    return (
        <div className="parent-wrapper">
            <h3>{content[0].title}</h3>
            {content.map((item, index) =>
                <ChildCard text={item.description} key={index}/>
            )}
        </div>
    )
}

export default ParentCard;