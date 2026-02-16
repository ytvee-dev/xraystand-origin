import { type ReactElement } from "react";
import ApplicationRouter from "@router/index";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import "@domains/Theme/style.css";
import "@domains/Theme/typography.css";
import "prismjs/themes/prism-okaidia.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <RouterProvider>
                <ApplicationRouter />
            </RouterProvider>
            <SpeedInsights />
            <Analytics mode="production" />
        </div>
    );
};

export default Application;
