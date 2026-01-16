import {type ReactElement, type ReactNode} from "react";
import "./style.css";
import BackgroundLayer, {type BackgroundLayerName} from "@modules/safetyPrecautions/components/BackgroundLayer";

export interface IContentSectionProps {
    leftColumn: ReactNode;
    rightColumn: ReactNode;
    variant?: 'default' | 'simple';
    backgroundColorLeft?: string;
    backgroundColorRight?: string;
    leftLayer?: BackgroundLayerName;
    rightLayer?: BackgroundLayerName;
    classNames?: {
        leftColumn: string;
        rightColumn: string;
    };
}

const TwoColumnSection = ({
  variant = 'default',
  backgroundColorLeft,
  backgroundColorRight,
  leftColumn,
  rightColumn,
  leftLayer,
  rightLayer,
  classNames = {leftColumn: '', rightColumn: ''},
}: IContentSectionProps): ReactElement => {
    if (variant === 'simple') {
        return (
            <section className="two-column-simple-section">
                <div
                    className={`left-column-simple-block ${classNames.leftColumn}`}
                    style={{background: backgroundColorLeft}}
                >
                    <BackgroundLayer name={leftLayer || "straight-left"}/>
                    {leftColumn}
                </div>
                <div
                    className={`right-column-simple-block ${classNames.rightColumn}`}
                    style={{background: backgroundColorRight}}
                >
                    <BackgroundLayer name={rightLayer || "straight-right"}/>
                    {rightColumn}
                </div>
            </section>
        );
    }
    return (
        <section className="two-column-section">
            <div className="columns-container">
                <div className="left-column-block">{leftColumn}</div>
                <div className="right-column-block">{rightColumn}</div>
            </div>
        </section>
    );
};

export default TwoColumnSection;
