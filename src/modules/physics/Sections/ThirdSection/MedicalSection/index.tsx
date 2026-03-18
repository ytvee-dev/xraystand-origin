import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./style.css";

const MedicalSection: React.FC = (): ReactElement => {

    const textContent = useLocaleContent(textContentRu, textContentKz);
    const rawCards = textContent.examplesSection.content;
    const cardsData = rawCards.slice(12, 17);
    const cardsWidth = [187, 187, 220, 240, 220];

    const renderText = (text: string) => {
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
                <div key={result.length} className="medical-list-title">
                    {line}
                </div>
            );
            return;
        }

        if (line.length < 80) {
            listItems.push(line);
        } else {
            flushList();
            result.push(
                <div key={result.length} className="medical-text">
                    {line}
                </div>
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

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: 3,
                        mt: "36px",
                        alignItems: "flex-start"
                    }}
                >

                    {cardsData.map((item: any, index: number) => (

                        <Card
                            className="physics-medical-card"
                            key={index}
                            sx={{
                                width: cardsWidth[index],
                                backgroundColor: "transparent",
                                border: "1px solid rgb(255,255,255)",
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

                                <Typography
                                    variant="body2"
                                    sx={{
                                        lineHeight: 1.7,
                                        opacity: 0.9
                                    }}
                                >
                                    {renderText(item.description)}
                                </Typography>

                            </CardContent>

                        </Card>

                    ))}

                </Box>

            </div>

        </div>
    );
};

export default MedicalSection;