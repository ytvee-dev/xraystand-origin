import React, { type ReactElement } from "react";
import BackgroundedTitle from "@modules/physics/components/BackgroundedTitle";
import { type IChildContentProps } from "@modules/physics/types/index";
import { Card, CardContent, Typography } from "@mui/material";
import "./style.css";

const MedicalSection: React.FC<IChildContentProps> = ({ content }): ReactElement => {
    const cards = content.slice(1)

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
                title={content[0].title}
                description={content[0].subTitle}
                titleFontWeight="700"
                fullWidth
            />

            <div className="physics-medical-cards">
                    {cards.map((item: any, index: number) => (
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