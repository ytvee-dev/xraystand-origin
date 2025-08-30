import { type ReactElement } from "react";
import TwoColumnSection from "../../../../components/common/Sections/TwoColumnSection";

export const defaultTwoColumnSectionProps = {
    leftColumn: (
        <div style={{ padding: "16px", background: "#F5F5F5" }}>
            <h3>Left Column Title</h3>
            <p>This is the left column content</p>
        </div>
    ),
    rightColumn: (
        <div style={{ padding: "16px", background: "#E8F0FE" }}>
            <h3>Right Column Title</h3>
            <p>This is the right column content</p>
        </div>
    ),
};

export const TwoColumnSectionPlayground = (): ReactElement => {
    return (
        <TwoColumnSection
            leftColumn={defaultTwoColumnSectionProps.leftColumn}
            rightColumn={defaultTwoColumnSectionProps.rightColumn}
        />
    );
};
