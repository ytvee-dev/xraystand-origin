import {type ReactElement} from "react";
import type {IDSCardsWrapper} from "@components/common/Wrappers/Wrappers.types.ts";
import useScreenWidth from "@hooks/useScreenWidth.ts";
import "./style.css";


const DSCardsWrapper = ({
    screenMaxWidth = 1000,
    maxHeight = "",
    cardsGap = "16px",
    children,
}: IDSCardsWrapper): ReactElement => {
    const screenWidth = useScreenWidth();

    return (
        <div
            className="ds-cards-wrapper"
            style={{
                gap: cardsGap,
                flexWrap: screenWidth < screenMaxWidth ? "wrap" : "nowrap",
                justifyContent: screenWidth < screenMaxWidth ? "center" : "space-between",
                maxHeight: maxHeight ? maxHeight : "",
            }}
        >
            {children}
        </div>
    );
};

export default DSCardsWrapper;
