import type { ReactElement } from 'react';
import ChildCard from './childCard';
import './parentStyle.css';
//пропс: 1 card
interface Cards{
    id: string;
    title: string;
    subtitle?: string;
    description: string;
    img?: string;
    imgClassIndex?: number;
};

interface IParentCard{
    content: Array<Cards>
}

const ParentCard = ({ content }: IParentCard):ReactElement => {
    return (
        <div className="parent-wrapper">
            {/* <h3>{content[].title}</h3> */}
            {content.map((item, index) =>
                <ChildCard text={item.description} key={index} img={item.img} imgClassIndex={item.imgClassIndex}/>
            )}
        </div>
    )
}

export default ParentCard;