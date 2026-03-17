import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as paths from "@modules/physics/locales/paths.json";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import { cardsBg} from "@modules/physics/locales/paths.json";
import "./style.css";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import PhysicsInArchitectureSection from "./PhysicsInArchitectureSection";
import DigitalSection from "./DigitalSection";
import MedicalSection from "./MedicalSection";
import EverydaySection from "./EverydaySection";

const FourthSection: React.FC = (): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const content = textContent.inLifeSection.content;

    const [activeCard, setActiveCard] = React.useState<number | null>(0);

    const handleCardClick = (index: number) => {
        setActiveCard(index === activeCard ? null : index);
    };

    return (
        <section className="physics-fourth-section">
                <BackgroundedTitle
                    title={textContent.inLifeSection.title}
                    titleFontWeight="700"
                    fullWidth
                />
            <div className="physics-fourth-section-content-wrapper">
                {content.map((text, index) => (
                    <Card key={index} className="physics-fourth-section-top-card">
                        <CardActionArea className="card-area">
                            <CardMedia
                                className="background-card"
                                component="img"
                                height="140"
                                image={cardsBg}
                                onClick={() => handleCardClick(index)}
                            />
                        </CardActionArea>
                        <div className="physics-fourth-section-card-content">
                            <img 
                                src={paths.cards[index]} 
                                alt="icon" 
                                className="card-icon" 
                            />
                            <p style={{ color: 'white', fontWeight: 700 }}>{text}</p>
                        </div>
                    </Card>
                ))}
            </div>
             <div className=" physics-fourth-section-cards">
                {activeCard === 0 && (
                    <div className="physics-section-right">
                        <EverydaySection />
                    </div>
                )}

                {activeCard === 1 && (
                    <div className="physics-section-left">
                        <PhysicsInArchitectureSection />
                    </div>
                )}

                {activeCard === 2 && (
                    <div className="physics-section-right">
                        <MedicalSection />
                    </div>
                )}

                {activeCard === 3 && (
                    <div className="physics-section-left">
                        <DigitalSection />
                    </div>
                )}
            </div>
        </section>
    );
};


export default FourthSection;