import React, {type ReactElement, useState} from "react";
// import {usePreloadImages} from "@hooks/usePreloadImages.ts";
// import {collectFromPathsJson} from "@utils/collectAssetUrls.ts";
// import * as paths from '@modules/math/locales/paths.json';
import type {MathSectionProps} from "@modules/math/types";
import {
    motion,
    AnimatePresence
} from "framer-motion";
import "./style.css";
import Slider from "@components/common/Other/Slider";
import useScreenWidth from "@hooks/useScreenWidth.ts";

type TCard = { id: string; title: string; subtitle: string; description: string; image: string };

const items: TCard[] = Array.from({ length: 10 }).map((_, idx) => ({
    id: String(idx + 1),
    title: `Карточка ${idx + 1}`,
    subtitle: "subtitle",
    description: "Описание карточки и что-то ещё полезное",
    image: `https://picsum.photos/seed/${idx + 1}/800/420`
}));

const SecondSection: React.FC<MathSectionProps> = ({className}: MathSectionProps): ReactElement => {
    const screenWidth = useScreenWidth();
    const isMobile = screenWidth <= 768;
    const [index, setIndex] = useState(0);
    // const imgUrls = collectFromPathsJson(paths)
    // usePreloadImages(imgUrls);
    //
    // const isContentLoaded: boolean = useSelector(
    //     (state: TRootState) => state.application.isContentLoaded
    // );

    return (
        <section className={className}>
            <div className='math-second-section-backgorund'></div>
            <div className='math-second-section-content-wrapper'>
                <motion.div className='motion-slider' style={{width: '100%', height: isMobile ? 150 : 340, position: "relative"}}>
                    <AnimatePresence initial={false}>
                        <Slider
                            key={index + 1}
                            frontCard={false}
                            index={(index + 1) % items.length}
                            card={items[(index + 1) % items.length]}
                        />
                        <Slider
                            key={index}
                            frontCard={true}
                            index={index % items.length}
                            setIndex={setIndex}
                            drag="x"
                            card={items[index % items.length]}
                        />
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default SecondSection;
