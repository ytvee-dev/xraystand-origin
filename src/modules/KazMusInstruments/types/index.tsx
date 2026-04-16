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

export interface kazMuzInstrumentProps {
    content: SectionProps;
}