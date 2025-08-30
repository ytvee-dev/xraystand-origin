import {type ReactElement} from "react";
import type {IDSCardsWrapper} from "../Wrappers.types.ts";
import useScreenWidth from "../../../../hooks/useScreenWidth.ts";
import "./style.css";


const DSCardsWrapper = ({
    screenMaxWidth = 1000,
    wrapperMaxWidth = "500px",
    maxHeight = "",
    cardsGap = "16px",
    overflow = "none",
    isWrap = false,
    children,
}: IDSCardsWrapper): ReactElement => {
    const screenWidth = useScreenWidth();

    return (
        <div
            className="ds-cards-wrapper"
            style={{
                maxWidth: wrapperMaxWidth,
                gap: cardsGap,
                flexWrap: isWrap || (screenWidth < screenMaxWidth) ? "wrap" : "nowrap",
                justifyContent: isWrap ? "flex-start" : screenWidth < screenMaxWidth ? "center" : "space-between",
                maxHeight: maxHeight ? maxHeight : "",
                overflow: overflow,
            }}
        >
            {children}
        </div>
    );
};

export default DSCardsWrapper;
