import type { ReactElement } from 'react'
import DSNotification from '@components/common/DSNotification'
import './style.css'

export interface ISoundCard {
    title: string,
    description: string,
    soundDescription: string,
    img: string
}

interface ISoundCardsProps {
    cardContent: ISoundCard,
    theme?: "dark" | "light",
    imgSide?: "left" | "right"
}

interface ISoundDescriptionStyle {
    bgColor: string,
    color: string
}

const SoundCards = ({
    cardContent,
    theme = "dark",
    imgSide="left"
}: ISoundCardsProps): ReactElement => {
    const soundDescriptionStyle: ISoundDescriptionStyle = {
        bgColor: "#e6bb86",
        color: "#000000"
    }

    let iconName = "kazMusIconDark"

    if(theme == "light"){
        soundDescriptionStyle.bgColor = "#522f1b"
        soundDescriptionStyle.color = "#e6bb86"
        iconName = "kazMusIconLight"
    }

    return (
        <div 
            className={`sound-card-wrapper ${theme == "light" ? "light" : ""} ${imgSide == "right" ? "img-right" : ""}`} 
            key={cardContent.title}
        >
            <img  className='sound-card-img' src={cardContent.img} alt={cardContent.title}/>

            <div className="sound-card-content">
                <h3>{cardContent.title}</h3>
                <p>{cardContent.description}</p>
                <DSNotification 
                    content={cardContent.soundDescription}
                    backgroundColor={soundDescriptionStyle.bgColor}
                    borderColor={soundDescriptionStyle.bgColor}
                    textColor={soundDescriptionStyle.color}
                    iconColor={soundDescriptionStyle.color}
                    borderRadius="8px"
                    iconName={iconName}
                    type="info"
                    paragraphWeight={700}
                    fullWidth
                />
            </div>
        </div>
    )
}

export default SoundCards;