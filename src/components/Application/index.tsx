import { type ReactElement } from "react";
import ApplicationRouter from "../../router";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from '@vercel/analytics/react';
import "@domains/Theme/style.css";
import "prismjs/themes/prism-okaidia.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <RouterProvider>
                <ApplicationRouter />
                <Analytics mode="production" />
                <SpeedInsights />
            </RouterProvider>
        </div>
    );
};

export default Application;
