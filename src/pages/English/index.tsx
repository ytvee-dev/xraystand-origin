import LanguageSelect from "@components/common/Other/LanguageSelect";
import type { ReactElement } from "react";

const English = (): ReactElement => {
    return (
        <div
            className="english-page"
            style={{
                width: "100%",
                height: "50rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <LanguageSelect />
        </div>
    );
};

export default English;
