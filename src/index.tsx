import store from "./store";
import Application from "./components/Application";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <Analytics/>
        <Application />
    </Provider>
);
