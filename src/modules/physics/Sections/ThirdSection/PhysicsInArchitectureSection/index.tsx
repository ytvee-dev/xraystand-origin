import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./style.css";

const PhysicsInArchitectureSection: React.FC = (): ReactElement => {

    const textContent = useLocaleContent(textContentRu, textContentKz);
    const rawCards = textContent.examplesSection.content;
    const cardsData = rawCards.slice(1, 6);
    const cardsWidth = [260, 170, 177, 200, 220];

    return (
        <div className="physics-architecture-section">

                <BackgroundedTitle
                    title={rawCards[0].title}
                    description={rawCards[0].subTitle}
                    titleFontWeight="700"
                    fullWidth
                />

            <div className="physics-architecture-cards">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 3,
                        mt: '36px',
                        alignItems: 'flex-start'
                    }}
                >

                    {cardsData.map((item: any, index: number) => (
                        <Card
                            className="physics-architecture-card"
                            key={index}
                            sx={{
                                width: cardsWidth[index],
                                backgroundColor: 'transparent',
                                border: '1px solid rgb(255, 255, 255)',
                                borderRadius: '3px',
                                color: 'white',
                                boxShadow: 'none',
                                height: 'auto',
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
                </Box>
            </div>

        </div>
    );
};

export default PhysicsInArchitectureSection;