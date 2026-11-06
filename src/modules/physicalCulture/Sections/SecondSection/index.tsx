import { type ReactElement } from "react";
import BenefitCard, { type BenefitListItem } from "../../components/BenefitCard";
import FilledTitle from "../../components/FilledTitle";
import paths from "../../locales/paths.json";
import "./style.css";

interface BenefitText {
    title: string;
    description: string;
}

interface MainBenefitCard extends BenefitText {
    list: BenefitListItem[];
    conclusion?: string;
    cards?: BenefitText[];
}

interface BenefitGroup {
    title: string;
    mainCard: MainBenefitCard;
    cards?: BenefitText[];
}

interface SecondSectionContent {
    physicalHealth: BenefitGroup;
    mentalHealth: BenefitGroup;
}

interface SecondSectionProps {
    content: SecondSectionContent;
}

const SecondSection = ({ content }: SecondSectionProps): ReactElement => {
    const { physicalHealth, mentalHealth } = content;
    const physicalCards = physicalHealth.mainCard.cards ?? [];
    const mentalCards = mentalHealth.cards ?? [];
    const [postureCard, bonesCard, immunityCard] = physicalCards;
    const [brainCard, sleepCard] = mentalCards;

    return (
        <section className="physical-culture-second-section">
            <div className="physical-culture-benefit-group">
                <FilledTitle
                    title={physicalHealth.title}
                    bgColor="#A44BB6"
                    variant="h2"
                />

                <div className="physical-culture-physical-main-row">
                    <BenefitCard
                        {...physicalHealth.mainCard}
                        className="physical-culture-organs-card"
                    />
                    <img
                        className="physical-culture-strong-woman"
                        src={paths.secondSection.strongWoman}
                        alt=""
                    />
                </div>

                <div className="physical-culture-physical-cards">
                    {postureCard && (
                        <BenefitCard
                            {...postureCard}
                            image={paths.secondSection.goodPosture}
                            imageAlt={postureCard.title}
                        />
                    )}
                    {bonesCard && (
                        <BenefitCard
                            {...bonesCard}
                            image={paths.secondSection.bonesAndJoints}
                            imageAlt={bonesCard.title}
                        />
                    )}
                    {immunityCard && (
                        <BenefitCard
                            {...immunityCard}
                            image={paths.secondSection.immunity}
                            imageAlt={immunityCard.title}
                            className="physical-culture-wide-benefit-card"
                        />
                    )}
                </div>
            </div>

            <div className="physical-culture-benefit-group">
                <FilledTitle
                    title={mentalHealth.title}
                    bgColor="#A44BB6"
                    variant="h2"
                />

                <div className="physical-culture-mental-main-row">
                    <img
                        className="physical-culture-antistress-image"
                        src={paths.secondSection.antistress}
                        alt=""
                    />
                    <BenefitCard
                        {...mentalHealth.mainCard}
                        className="physical-culture-antistress-card"
                    />
                </div>

                <div className="physical-culture-mental-cards">
                    {brainCard && (
                        <BenefitCard
                            {...brainCard}
                            image={paths.secondSection.sleepingMan}
                            imageAlt={brainCard.title}
                        />
                    )}
                    {sleepCard && (
                        <BenefitCard
                            {...sleepCard}
                            image={paths.secondSection.BrainLearning}
                            imageAlt={sleepCard.title}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default SecondSection;
