import type { ReactElement } from "react";

const English = (): ReactElement => {
    return (
        <div
            className="english-page"
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        ></div>
    );
};

export default English;
