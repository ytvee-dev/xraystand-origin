import ScrollingImageLine from "@components/ScrollingImageLine";
import animatedCarSrc from "@assets/images/animations/animatedCar.png";
import { ScrollingImageLineDirections } from "@utils/constants";
import { type ReactElement } from "react";

const FirstPageIntro = (): ReactElement => {
    return (
        <div className="first-page intro">
            <ScrollingImageLine
                imageSrc={animatedCarSrc}
                direction={ScrollingImageLineDirections.LEFT}
                scrollMultiplier={7}
                height="173px"
            />
        </div>
    );
};

export default FirstPageIntro;
