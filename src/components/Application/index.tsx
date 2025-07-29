import { type ReactElement } from "react";
import ApplicationRouter from "@router/index";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import ScrollColorManager from "@utils/ScrollbarManager.tsx";
import "@domains/Theme/style.css";
import 'prismjs/themes/prism-okaidia.css';

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
