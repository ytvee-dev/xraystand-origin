import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import { Card, CardContent, Typography } from "@mui/material";
import "./style.css";

const EverydaySection: React.FC = (): ReactElement => {

    const textContent = useLocaleContent(textContentRu, textContentKz);
    const rawCards = textContent.examplesSection.content;
    const cardsData = rawCards.slice(18, 21);

    return (
        <div className="physics-everyday-section">

                <BackgroundedTitle
                    title={rawCards[17].title}
                    description={rawCards[17].subTitle}
                    titleFontWeight="700"
                    fullWidth
                />

            <div className="physics-everyday-cards">
                    {cardsData.map((item: any, index: number) => (
                        <Card
                            className={`physics-everyday-card ${index === 2 ? 'physics-everyday-last-card' : ''}`}
                            key={index}
                            sx={{
                                backgroundColor: 'transparent',
                                borderRadius: '3px',
                                color: 'white',
                                boxShadow: 'none'
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: '18px',
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        opacity: 0.9,
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {index === 0
                                        ? item.description.split("\n").map((line: string, i: number) => (
                                            <span
                                                key={i}
                                                style={{
                                                    display: "block",
                                                    marginTop: i === 1 ? "20px" : "0"
                                                }}
                                            >
                                                {line}
                                            </span>
                                        ))
                                        : item.description}

                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
            </div>

        </div>
    );
};

export default EverydaySection;