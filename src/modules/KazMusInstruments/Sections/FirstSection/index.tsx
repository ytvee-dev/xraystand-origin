import type { ReactElement } from "react";
import * as paths from "@modules/KazMusInstruments/locales/paths.json";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import SoundCards from "@modules/KazMusInstruments/components/SoundCard";
import "./style.css";

type Instrument = {
    title: string;
    subTitle?: string;
    description: string;
    soundDescription?: string;
};

type SectionProps = {
    title: string;
    content: Instrument[];
};

interface Props {
    content: SectionProps;
}

const FirstSection = ({ content }: Props): ReactElement => {

    const topCards = content.content.map((item) => ({
        title: item.title,
    }));

    const images = [
        paths.pluckedInstruments.dombra,
        paths.pluckedInstruments.jetigen,
        paths.pluckedInstruments.sherter
    ];

    return (
        <section className="music-section">
            <h2 className="music-section-title">{content.title}</h2>

            <div className="music-top-cards">
                {topCards.map((item, index) => (
                    <Card
                        key={item.title}
                        sx={{
                            width: 368,
                            backgroundColor: "#E6BB86",
                            color: "#000000DE",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={images[index]}
                                sx={{
                                    height: 400,
                                    objectFit: "cover"
                                }}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" fontSize={20} fontWeight={700}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            <div className="music-sound-cards">
                {content.content.map((item, index) => (
                    <SoundCards
                        key={item.title}
                        cardContent={{
                            title: item.title,
                            description: item.description,
                            soundDescription: item.soundDescription || "",
                            img: images[index]
                        }}
                        imgSide="left"
                    />
                ))}
            </div>
        </section>
    );
};

export default FirstSection;