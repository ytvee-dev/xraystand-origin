import type { ReactElement } from 'react';
import * as paths from '@modules/KazMusInstruments/locales/paths.json';
import './style.css';

export interface CoverSectionProps {
    backgroundImage?: string;
    content: MusicProps;
}

type MusicProps = {
    title: string;
}   
const CoverSection: React.FC<CoverSectionProps> = ({ backgroundImage, content }: CoverSectionProps & { content: MusicProps }): ReactElement => {
    return (
        <section className="music-cover-section">
            <div className="music-cover-background-content">
                <img src={backgroundImage} alt="" />
            </div>

            <div className="music-cover-text-content">
                <h1 className="music-cover-title">{content.title}</h1>
            </div>
        </section>
    )
}

export default CoverSection;