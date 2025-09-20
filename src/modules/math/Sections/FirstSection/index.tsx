import React, {type ReactElement} from "react";
// import {usePreloadImages} from "@hooks/usePreloadImages.ts";
// import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import * as paths from '@modules/math/locales/paths.json';
import type {MathSectionProps} from "@modules/math/types";

import "./style.css";

// https://codesandbox.io/p/sandbox/mighty-motion-guide-some-examples-29-animate-presence-stack-3d-forked-fv5q88?file=%2Fsrc%2FExample.tsx%3A111%2C38

const FirstSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    // const imgUrls = collectFromPathsJson(paths)
    // usePreloadImages(imgUrls);
    //
    // const isContentLoaded: boolean = useSelector(
    //     (state: TRootState) => state.application.isContentLoaded
    // );

    return (
        <section className={className}>
            <div className='math-first-section-backgorund'></div>
            <div className='math-first-section-content-wrapper'></div>
        </section>
    );
};

export default FirstSection;
