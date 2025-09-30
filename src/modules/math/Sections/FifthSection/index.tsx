import React, {type ReactElement} from "react";
import type {MathSectionProps} from "@modules/math/types";

import "./style.css";

const FifthSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    return (<section className={className}></section>);
};

export default FifthSection;
