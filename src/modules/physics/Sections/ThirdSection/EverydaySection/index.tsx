import React, { type ReactElement } from "react";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import { Card, CardContent, Typography } from "@mui/material";
import "./style.css";
interface ISectionCardContent {
    title: string,
    subTitle: string,
    description: string
}

interface IParentSectionProps {
    content: ISectionCardContent[]
}


const EverydaySection: React.FC<IParentSectionProps> = ({content}): ReactElement => {
    return (
        <div className="physics-everyday-section">

                <BackgroundedTitle
                    title={content[0].title}
                    description={content[0].subTitle}
                    titleFontWeight="700"
                    fullWidth
                />

            <div className="physics-everyday-cards">
                    {content.map((item: any, index: number) => (
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