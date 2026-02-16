import SpriteIcon from "@components/common/Other/SpriteIcon";
import { SvgSpriteIds } from "@utils/constants";
import { type ReactElement } from "react";

export interface ILogoProps {
    size?: string;
}

const Logo = ({ size }: ILogoProps): ReactElement => {
    return <SpriteIcon iconId={SvgSpriteIds.LOGO} width={size} height={size}/>;
};

export default Logo;
