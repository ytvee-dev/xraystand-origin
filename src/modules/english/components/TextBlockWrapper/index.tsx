import type { ReactElement, ReactNode } from "react";
import "./style.css";

interface ITextBlockWrapper {
    className?: string;
    title?: string;
    children: ReactNode;
}

const TextBlockWrapper = ({
    className,
    title,
    children,
}: ITextBlockWrapper): ReactElement => {
    return (
        <div className={`text-block-wrapper ${className}`}>
            <div className="text-block-wrapper-title">{title}</div>

            <div className="text-block-wrapper-content">{children}</div>
        </div>
    );
};

export default TextBlockWrapper;
