import React, {type ReactElement} from "react";
import type {IDefaultCardSxText} from "../../Cards/CardsTypes.ts";
import {defaultSectionSX} from "../meta.tsx";
import heroBackground from "../../../../../public/assets/images/nutrition/backgrounds/hero.svg";
import "./style.css";

export interface ITitleHeroSectionProps {
    title?: string;
    subtitle?: string;
    backgroundColor?: string;
    sx?: IDefaultCardSxText;
}

const TitleHeroSection: React.FC<ITitleHeroSectionProps> = ({
    title='',
    subtitle='',
    backgroundColor='transparent',
    sx=defaultSectionSX,
}: ITitleHeroSectionProps): ReactElement => {
    return (
        <section
            className="title-hero-section"
            style={{
                background: backgroundColor,
            }}
        >
            <div className="title-hero-text">
                <h1
                    style={{
                        fontFamily: sx.fontFamily,
                        fontSize: sx.titleFontSize,
                        color: sx.titleColor,
                        fontWeight: sx.titleFontWeight,
                    }}
                >{title}</h1>
                <p
                    style={{
                        fontSize: sx.labelFontSize,
                        color: sx.labelColor,
                        fontWeight: sx.fontWeight,
                    }}
                >{subtitle}</p>
            </div>
            <img src={heroBackground} alt="background"/>
        </section>
    );
};

export default TitleHeroSection;
