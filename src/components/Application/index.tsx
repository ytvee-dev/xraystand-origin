import { type ReactElement } from "react";
import ApplicationRouter from "@router/index";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import "@domains/Theme/style.css";
import ScrollColorManager from "@utils/ScrollbarManager.tsx";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <RouterProvider>
                <ScrollColorManager />
                <ApplicationRouter />
            </RouterProvider>
        </div>
    );
};

export default Application;
