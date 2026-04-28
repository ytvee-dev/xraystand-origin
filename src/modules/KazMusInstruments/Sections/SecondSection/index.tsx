import type { ReactElement } from "react";
import * as paths from "@modules/KazMusInstruments/locales/paths.json";
import * as audioPaths from "@modules/KazMusInstruments/audios/audio.json";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import SoundCards from "@modules/KazMusInstruments/components/SoundCard";
import { type kazMuzInstrumentProps } from "@modules/KazMusInstruments/types";

const SecondSection = ({ content }: kazMuzInstrumentProps): ReactElement => {
    const topCards = content.content.map((item) => ({
        title: item.title,
    }));

    const images = [
        paths.bowedInstruments.kobiz,
        paths.bowedInstruments.nar_kobiz,
    ];

    return (
        <section className="music-instruments-section music-light">
            <h2>{content.title}</h2>

            <div className="music-top-cards">
                {topCards.map((item, index) => (
                    <Card
                        className="music-top-card"
                        key={item.title}
                        sx={{
                            width: "100%",
                            maxWidth: 564,
                            backgroundColor: "#522F1B",
                            color: "#E6BB86",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia component="img" image={images[index]} />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    fontSize={20}
                                    fontWeight={700}
                                >
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
                            img: images[index],
                        }}
                        imgSide="right"
                        theme="light"
                        audioPath={audioPaths.secondSection[index]}
                    />
                ))}
            </div>
        </section>
    );
};

export default SecondSection;
