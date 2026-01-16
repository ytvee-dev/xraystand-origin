import TwoBackgroundColorSection from "@components/common/Sections/TwoBackgroundColorSection";
import type { ISectionProps } from "@modules/safetyPrecautions/types";
import type { ReactElement } from "react";

const RulesSection = ({
    title,
    description,
    content,
    rulesBackground,
    rulesListTitleColor,
    classname,
}: ISectionProps): ReactElement => {
    return (
        <TwoBackgroundColorSection
            title={title}
            description={description}
            content={content}
            rulesBackground={rulesBackground}
            rulesListTitleColor={rulesListTitleColor}
            classname={classname}
        />
    );
};

export default RulesSection;
