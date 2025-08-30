import {type ReactElement, type ReactNode} from "react";
import "./style.css";

export interface IContentSectionProps {
    leftColumn: ReactNode;
    rightColumn: ReactNode;
}

const TwoColumnSection = ({
  leftColumn,
  rightColumn
}: IContentSectionProps): ReactElement => {
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
