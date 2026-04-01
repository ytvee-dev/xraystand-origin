import React, { type ReactElement } from "react";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as paths from "@modules/physics/locales/paths.json";
import { cardsBg} from "@modules/physics/locales/paths.json";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import InArchitectureSection from "../InArchitectureSection";
import DigitalSection from "../DigitalSection";
import MedicalSection from "../MedicalSection";
import EverydaySection from "../EverydaySection";
import "./style.css";

interface ISectionCardContent {
    title: string,
    subTitle: string,
    description: string
}

interface ISectionContent {
    title: string,
    subTitle: string,
    description: string,
    content: string[] | ISectionCardContent[]
}

interface IParentSectionProps {
    content: ISectionContent,
    childContent: ISectionContent
}

const ParentSection: React.FC<IParentSectionProps> = ({content, childContent}: IParentSectionProps): ReactElement => {
    const cardContent = content.content;
    const digitalCards = childContent.content.slice(6, 11) as ISectionCardContent[] 
    const everydayCards = childContent.content.slice(17) as ISectionCardContent[]

    const [activeCard, setActiveCard] = React.useState<number | null>(0);
    const handleCardClick = (index: number) => {
        setActiveCard(index);
    };

    return (
        <section className="physics-in-life-section">
            <BackgroundedTitle
                title={content.title}
                titleFontWeight="700"
                fullWidth
            />
            
            <div className="physics-in-life-section-content-wrapper">
                {cardContent.map((text, index) => (
                    <Card key={index} className="physics-in-life-section-top-card">
                        <CardActionArea className="card-area">
                            <CardMedia
                                className="background-card"
                                component="img"
                                height="140"
                                image={cardsBg}
                                onClick={() => handleCardClick(index)}
                            />
                        </CardActionArea>
                        <div className="physics-in-life-section-card-content">
                            <img 
                                src={paths.cards[index]} 
                                alt="icon" 
                                className="card-icon" 
                            />
                            <p style={{ color: 'white', fontWeight: 700 }}>{text as string}</p>
                        </div>
                    </Card>
                ))}
            </div>
             <div className=" physics-in-life-section-cards">
                {activeCard === 0 && (
                    <div className="physics-section-right">
                        <EverydaySection content={everydayCards}/>
                    </div>
                )}

                {activeCard === 1 && (
                    <div className="physics-section-left">
                        <InArchitectureSection />
                    </div>
                )}

                {activeCard === 2 && (
                    <div className="physics-section-right">
                        <MedicalSection />
                    </div>
                )}

                {activeCard === 3 && (
                    <div className="physics-section-left">
                        <DigitalSection content={digitalCards}/>
                    </div>
                )}
            </div>
        </section>
    );
};


export default ParentSection;