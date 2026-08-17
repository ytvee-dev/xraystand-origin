import { type ReactElement } from "react";
import "./style.css";

interface ISectionNoticeProps {
    title: string;
    description: string;
    className?: string;
}

const SectionNotice = ({
    title,
    description,
    className = "",
}: ISectionNoticeProps): ReactElement => {
    return (
        <aside className={`ai-profession-section-notice ai-profession-glass-surface ${className}`}>
            <strong className="ai-profession-section-notice-title">{title}</strong>
            <p className="ai-profession-section-notice-description">{description}</p>
        </aside>
    );
};

export default SectionNotice;
