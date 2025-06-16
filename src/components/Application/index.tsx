import DefaultLayout from "@layout/Default";
import ApplicationRouter from "@router/index";
import { BrowserRouter as RouterProvider } from "react-router";
import { type ReactElement } from "react";
import "@domains/Theme/style.css";

const Application = (): ReactElement => {
    return (
        <div className="application">
            <RouterProvider>
                <DefaultLayout>
                    <ApplicationRouter />
                </DefaultLayout>
            </RouterProvider>
        </div>
    );
};

export default Application;
