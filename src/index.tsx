import store from "./store";
import Application from "./components/Application";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { inject } from "@vercel/analytics";

inject();

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <Application />
    </Provider>
);
