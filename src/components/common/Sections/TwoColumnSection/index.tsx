import {type ReactElement, type ReactNode} from "react";
import "./style.css";

export interface IContentSectionProps {
    leftColumn: ReactNode;
    rightColumn: ReactNode;
    variant?: 'default' | 'simple';
    backgroundColorLeft?: string;
    backgroundColorRight?: string;
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
  classNames = { leftColumn: '', rightColumn: '' },
}: IContentSectionProps): ReactElement => {
    if (variant === 'simple') {
        return (
            <section className="two-column-simple-section">
                <div
                    className={`left-column-simple-block ${classNames.leftColumn}`}
                    style={{background: backgroundColorLeft}}
                >{leftColumn}</div>
                <div
                    className={`right-column-simple-block ${classNames.rightColumn}`}
                    style={{background: backgroundColorRight}}
                >{rightColumn}</div>
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
