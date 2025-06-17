import { getNumberRange, ScrollingImageLineDirections } from "@utils/constants";
import { useEffect, useRef, type ReactElement } from "react";
import "./style.css";

export interface IScrollingImageLineProps {
    imageSrc: string;
    imageWidth?: string;
    direction?: ScrollingImageLineDirections;
    scrollMultiplier?: number;
}

const SCROLLING_IMAGE_TO_LEFT_DIRECTION_SUFFIX: string = "Left";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
    root: null,
    rootMargin: "-100px 0px 0px 0px",
    threshold: getNumberRange(0, 1, 0.01),
};

const getScrollingImageSrcToLeftDirection = (imageSrc: string): string => {
    const imageSrcArray: string[] = imageSrc.split("");

    const dotIndex: number = imageSrcArray.findIndex(
        (srcSymbol: string) => srcSymbol === "."
    );

    if (dotIndex === -1) {
        console.error("Scrolling image file has not valid name!");

        return "";
    }

    const imageSrcPrefix: string = imageSrcArray.slice(0, dotIndex).join("");
    const imageSrcExtension: string = imageSrcArray.slice(dotIndex).join("");

    return `${imageSrcPrefix}${SCROLLING_IMAGE_TO_LEFT_DIRECTION_SUFFIX}${imageSrcExtension}`;
};

const ScrollingImageLine = ({
    imageSrc,
    direction = ScrollingImageLineDirections.RIGHT,
    scrollMultiplier = 1,
}: IScrollingImageLineProps): ReactElement => {
    const scrollingImageContainerRef = useRef<HTMLDivElement | null>(null);
    const scrollingImageRef = useRef<HTMLImageElement | null>(null);

    const isImageFullyShowedRef = useRef<boolean>(false);

    const updateIsImageFullyShowed = (visiblePercent: number): void => {
        if (visiblePercent < 10) {
            isImageFullyShowedRef.current = false;

            return;
        }

        if (visiblePercent > 90) {
            isImageFullyShowedRef.current = true;
        }
    };

    const handleScrolling = (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry) => {
            if (!scrollingImageRef.current) {
                return;
            }

            const entryElementVisiblePercent: number =
                entry.intersectionRatio * 100;

            updateIsImageFullyShowed(entryElementVisiblePercent);

            if (!isImageFullyShowedRef.current) {
                return;
            }

            const directionMultiplier: number =
                direction === ScrollingImageLineDirections.LEFT ? -1 : 1;

            scrollingImageRef.current.style.transform = `translateX(${
                scrollMultiplier *
                directionMultiplier *
                (100 - entryElementVisiblePercent)
            }%)`;
        });
    };

    useEffect(() => {
        if (!scrollingImageContainerRef.current) {
            return;
        }

        const scrollingImageContainer: HTMLDivElement =
            scrollingImageContainerRef.current;

        const observer = new IntersectionObserver(
            handleScrolling,
            OBSERVER_OPTIONS
        );

        observer.observe(scrollingImageContainer);
    }, [scrollingImageContainerRef]);

    const fullScrollingImageSrc: string =
        direction === ScrollingImageLineDirections.LEFT
            ? getScrollingImageSrcToLeftDirection(imageSrc)
            : imageSrc;

    return (
        <div
            ref={scrollingImageContainerRef}
            className={`scroll-animated-image-container ${direction}`}
        >
            <img
                ref={scrollingImageRef}
                className="scroll-animated-image"
                src={fullScrollingImageSrc}
                alt="scroll animated image"
            />
        </div>
    );
};

export default ScrollingImageLine;
