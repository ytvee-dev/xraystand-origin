import React from "react";
import './style.css'

interface FilledTitleProps {
    title: string,
    bgColor: string,
    variant?: 'h1' | 'h2',
    className: string
}
const FilledTitle: React.FC<FilledTitleProps> = ({
    title,
    bgColor,
    variant='h1',
    className
}) => {
    return(
        <div 
            className={`physical-culture-title ${className}`}
            style={{backgroundColor: bgColor}}
        >
            {variant == 'h1' ? (
                <h1>{title}</h1>
            ) : (
                <h2>{title}</h2>
            )}
        </div>
    )
}

export default FilledTitle;