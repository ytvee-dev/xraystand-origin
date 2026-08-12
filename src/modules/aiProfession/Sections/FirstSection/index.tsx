import React, { type ReactElement } from "react";
import MethodsCards from "../components/MethodCards";
import TheoryCards from "../components/TheoryCards";
import * as paths from "../../locales/path.json";
import "./style.css";

interface ListItem {
    title: string;
    description: string;
}

interface ContentItem {
    title?: string;
    subTitle?: string;
    description?: string;
    secondDescription?: string;
    finalDescription?: string;
    list?: ListItem[];
}

interface FirstSectionProps {
    title: string;
    subtitle: string;
    content: ContentItem[][];
}

const FirstSection: React.FC<FirstSectionProps> = ({ title, subtitle, content,}): ReactElement => {

    return (
        <section className="ai-profession-first-section">
            <img className="ai-profession-first-section-bg-1" src={paths.backgrounds.firstSection[0]} alt=""/>
            <img className="ai-profession-first-section-bg-2" src={paths.backgrounds.firstSection[0]} alt=""/>

            <div className="ai-profession-first-section-title-container">
                <h1 className="ai-profession-first-section-title">{title}</h1>
                <h2 className="ai-profession-first-section-subtitle">{subtitle}</h2>
            </div>

            
            <TheoryCards content={content[0]} />
            <MethodsCards content={content.slice(1)} />
        </section>
    );
};

export default FirstSection;