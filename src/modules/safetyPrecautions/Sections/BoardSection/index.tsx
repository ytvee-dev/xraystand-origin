import TwoBackgroundColorSection from "@components/common/Sections/TwoBackgroundColorSection";
import type { ISectionProps } from "@modules/safetyPrecautions/types";
import type { ReactElement } from "react";

const BoardSection = ({
    title,
    img,
    notificationLabel,
    backgroundLeft,
    backgroundRight,
}: ISectionProps): ReactElement => {
    return (
        <TwoBackgroundColorSection
            title={title}
            img={img}
            notificationLabel={notificationLabel}
            backgroundLeft={backgroundLeft}
            backgroundRight={backgroundRight}
        />
    );
};

export default BoardSection;
