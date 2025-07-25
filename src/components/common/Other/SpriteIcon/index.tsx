import { svgSpriteSrcPrefix } from "@utils/constants";
import { type ReactElement } from "react";

export interface ISpriteIconProps {
    iconId: string;
    size?: string;
}

const DEFAULT_ICON_SIZE: string = "100px";

const SpriteIcon = ({
    iconId,
    size = DEFAULT_ICON_SIZE,
}: ISpriteIconProps): ReactElement => {
    const fullIconId: string = `${svgSpriteSrcPrefix}${iconId}`;

    return (
        <svg
            href={fullIconId}
            width={size}
            height={size}
        >
            <use
                href={fullIconId}
                width={size}
                height={size}
            />
        </svg>
    );
};

export default SpriteIcon;
