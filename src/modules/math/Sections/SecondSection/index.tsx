import React, {type ReactElement} from "react";
// import {usePreloadImages} from "@hooks/usePreloadImages.ts";
// import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import * as paths from '@modules/math/locales/paths.json';
import type {MathSectionProps} from "@modules/math/types";

import "./style.css";

const SecondSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    // const imgUrls = collectFromPathsJson(paths)
    // usePreloadImages(imgUrls);
    //
    // const isContentLoaded: boolean = useSelector(
    //     (state: TRootState) => state.application.isContentLoaded
    // );

    return (<section className={className}></section>);
};

export default SecondSection;
