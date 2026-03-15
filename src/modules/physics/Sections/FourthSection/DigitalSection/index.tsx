import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./style.css";

const DigitalSection: React.FC = (): ReactElement => {

    const textContent = useLocaleContent(textContentRu, textContentKz);
    const rawCards = textContent.examplesSection.content;
    const cardsData = rawCards.slice(7, 11);

    const renderText = (text: string) => {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

    let listItems: string[] = [];
    const result: React.ReactNode[] = [];

    const flushList = () => {
        if (listItems.length > 0) {
            result.push(
                <ul key={result.length} className="digital-list">
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
                <div key={result.length} className="digital-list-title">
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
                <div key={result.length} className="digital-text">
                    {line}
                </div>
            );
        }
    });

    flushList();

    return result;
};
    return (
        <div className="physics-digital-section">

            <BackgroundedTitle
                title={rawCards[6].title}
                subtitle={rawCards[6].subTitle}
                titleFontWeight="700"
                subtitleFontSize="16px"
                fullWidth
            />

            <div className="physics-digital-cards">

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
                            className="physics-digital-card"
                            key={index}
                            sx={{
                                width: "270px",
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
                                        // fontWeight: 700,
                                        fontSize: "18px",
                                        // mb: "16px"
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

export default DigitalSection;