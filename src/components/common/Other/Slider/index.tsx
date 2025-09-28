import React, {useState} from "react";
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import './style.css';

type TCard = { id: string; title: string; subtitle: string; description: string; image: string };

export interface ISliderProps {
    index: number;
    frontCard: boolean;
    setIndex?: (n: number) => void;
    card: TCard;
    drag?: "x" | "y" | true;
    // children: React.ReactNode | React.ReactElement;
}

const Slider: React.FC<ISliderProps> = ({
    index,
    frontCard,
    setIndex = (n: number) => {console.info(n)},
    card,
    drag,
}) => {
    const screenWidth = useScreenWidth();
    const [exitX, setExitX] = useState(0);

    const x = useMotionValue(0);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard = {
        animate: {scale: 1, y: 0, opacity: 1},
        exit: (custom: number) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: {duration: 0.2}
        })
    };
    const variantsBackCard = {
        initial: {scale: 0, y: 105, opacity: 0},
        animate: {scale: 0.75, y: screenWidth >= 768 ? 70 : 40, opacity: 0.5}
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    function handleDragEnd(_, info) {
        const step = screenWidth >= 768 ? 550 : 250;

        if (info.offset.x < -100) {
            setExitX(-step);
            setIndex(index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(step);
            setIndex(index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: screenWidth >= 768 ? 395 : 200,
                height: screenWidth >= 768 ? 395 : 200,
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{cursor: "grabbing"}}
            drag={drag}
            dragConstraints={{top: 0, right: 0, bottom: 0, left: 0}}
            onDragEnd={handleDragEnd}
            variants={frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                frontCard
                    ? {type: "spring", stiffness: 300, damping: 20}
                    : {scale: {duration: 0.2}, opacity: {duration: 0.4}}
            }
        >
            <div
                className='slider-card-wrapper'
                style={{
                        width: screenWidth >= 768 ? 395 : 200,
                        height: screenWidth >= 768 ? 395 : 200,
                }}
            >
                <img
                    srcSet={card.image}
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                />
                <div className='slider-image-wrapper'></div>
            </div>

        </motion.div>
    );
}

export default Slider;