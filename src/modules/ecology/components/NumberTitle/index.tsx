import { type ReactNode } from "react";
import './style.css'

interface NumberTitleProps {
    number: string;
    title: string;
}

const NumberTitle: React.FC<NumberTitleProps> = ({
    number,
    title
}: NumberTitleProps): ReactNode => {
    return(
        <div className="number-title-wrapper">
            <span>{number}</span>
            <h1>{title}</h1>
        </div>
    )
}

export default NumberTitle;