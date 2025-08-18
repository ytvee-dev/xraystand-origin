import { type ReactElement } from "react";
import ApplicationRouter from "@router/index";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import "@domains/Theme/style.css";
import 'prismjs/themes/prism-okaidia.css';

const Application = (): ReactElement => {
    return (
        <div className="application">
            <RouterProvider>
                <ApplicationRouter />
            </RouterProvider>
        </div>
    );
};

export default Application;
