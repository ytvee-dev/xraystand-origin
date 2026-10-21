import { type ReactNode } from "react";
import './style.css'

interface NumberTitleProps {
    number: string;
    title: string;
    className?: string;
}

const NumberTitle: React.FC<NumberTitleProps> = ({
    number,
    title,
    className
}: NumberTitleProps): ReactNode => {
    return(
        <div className={`number-title-wrapper ${className}`}>
            <span>{number}</span>
            <h1>{title}</h1>
        </div>
    )
}

export default NumberTitle;