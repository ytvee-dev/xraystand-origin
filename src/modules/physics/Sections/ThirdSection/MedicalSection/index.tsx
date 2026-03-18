import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import { Card, CardContent, Typography } from "@mui/material";
import "./style.css";

const MedicalSection: React.FC = (): ReactElement => {
    const textContent = useLocaleContent(textContentRu, textContentKz);
    const rawCards = textContent.examplesSection.content;
    const cardsData = rawCards.slice(12, 17);

    const restructureText = (text: string) => {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

    let listItems: string[] = [];
    const result: React.ReactNode[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            result.push(
                <ul key={result.length} className="medical-list">
                    {listItems.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line) => {
        if (line.endsWith(":")) {
            flushList();
            result.push(
                <span key={result.length} className="medical-list-title">
                    {line}
                </span>
            );
            return;
        }

        if (line.length < 80) {
            listItems.push(line);
        } else {
            flushList();
            result.push(
                <span key={result.length} className="medical-text">
                    {line}
                </span>
            );
        }
    });

    flushList();

    return result;
};
    return (
        <div className="physics-medical-section">
            <BackgroundedTitle
                title={rawCards[11].title}
                description={rawCards[11].subTitle}
                titleFontWeight="700"
                fullWidth
            />

            <div className="physics-medical-cards">
                    {cardsData.map((item: any, index: number) => (
                        <Card
                            className="physics-medical-card"
                            key={index}
                            sx={{
                                backgroundColor: "transparent",
                                borderRadius: "3px",
                                color: "white",
                                boxShadow: "none",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: "18px",
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <div className="physics-medical-card-content">
                                    {restructureText(item.description)}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </div>
    );
};

export default MedicalSection;