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
import ArchitectureSection from "./ArchitectureSection";
import DigitalSection from "./DigitalSection";
import MedicalSection from "./MedicalSection";
import EverydaySection from "./EverydaySection";

const FourthSection: React.FC = (): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const content = textContent.inLifeSection.content;

    return (
        <section className="physics-fourth-section">
            <div className="physcs-fourth-section-title">
                <BackgroundedTitle
                    title={textContent.inLifeSection.title}
                    bgColor="#ee7630"
                    titleFontWeight="700"
                    fullWidth
                />
            </div>

            <div className="physics-fourth-section-content-wrapper">
                {content.map((text, index) => (
                    <Card key={index} className="card">
                        <CardActionArea className="card-area">
                            <CardMedia
                                className="background-card"
                                component="img"
                                height="140"
                                image={cardsBg}
                            />
                        </CardActionArea>
                        <div className="card-content">
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
            <ArchitectureSection />
            {/* <DigitalSection /> */}
            {/* <MedicalSection /> */}
            <EverydaySection />
        </section>
    );
};


export default FourthSection;