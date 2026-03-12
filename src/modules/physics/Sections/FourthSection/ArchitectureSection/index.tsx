import React, { type ReactElement } from "react";
import { useLocaleContent } from "@hooks/useLocale";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import * as textContentKz from "@modules/physics/locales/kaz.json";
import * as textContentRu from "@modules/physics/locales/rus.json";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./style.css";

const ArchitectureSection: React.FC = (): ReactElement => {

    const textContent = useLocaleContent(textContentRu, textContentKz);
    const rawCards = textContent.examplesSection.content;
    const cardsData = rawCards.slice(1, 6);

    return (
        <section className="physics-architecture-section">

            <div className="physcs-architecture-section-title">
                <BackgroundedTitle
                    title={rawCards[0].title}
                    subtitle={rawCards[0].subTitle}
                    bgColor="#ee7630"
                    titleFontWeight="700"
                    subtitleFontSize="16px"
                    fullWidth
                />
            </div>

            <div className="physics-architecture-cards">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: 3,
                        // mt: 6
                        alignItems: 'flex-start'
                    }}
                >

                    {cardsData.map((item: any, index: number) => (
                        <Card
                            className="physics-architecture-card"
                            key={index}
                            sx={{
                                width:
                                    index === 0 ? 260 :
                                    index === 1 ? 170 :
                                    index === 2 ? 177 :
                                    index === 3 ? 200 :
                                    220,
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
                                        fontWeight: 700,
                                        fontSize: '18px',
                                        // mb: 2
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

        </section>
    );
};

export default ArchitectureSection;