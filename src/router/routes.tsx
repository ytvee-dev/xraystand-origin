import HomePage from "@pages/Home";
import NotFoundPage from "@pages/NotFound";
import TrafficsLawsPage from "@pages/TrafficsLaws";
import KazakhAdebiet from "@pages/KazakhAdebiet";
// import InProgress from "@pages/InProgress";
import { type RouteObject } from "react-router";
import Chemistry from "@pages/Chemistry";
import ComponentsPage from "@pages/Components";
import RusLit from "@pages/RusLit";

export const paths = {
    HOME: {
        id: "home",
        path: "/",
    },
    TRAFFIC_LAWS_PAGE: {
        id: "trafficLawsPage",
        path: "/traffic-laws",
    },
    CHEMISTRY: {
        id: "chemistryPage",
        path: "/chemistry",
    },
    RUS_LIT: {
        id: "rusLitPage",
        path: "/ruslit",
    },
    KAZAKH_ADEBIET: {
        id: "kazakhAdebietPage",
        path: "/kazakhadebiet",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
    },
    COMPONENTS: {
        id: "components",
        path: "/components",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.HOME,
        element: <HomePage />,
    },
    {
        ...paths.TRAFFIC_LAWS_PAGE,
        element: <TrafficsLawsPage />,
    },
    {
        ...paths.CHEMISTRY,
        element: <Chemistry />,
    },
    {
        ...paths.RUS_LIT,
        element: <RusLit />,
    },
    {
        ...paths.KAZAKH_ADEBIET,
        element: <KazakhAdebiet />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFoundPage />,
    },
    {
        ...paths.COMPONENTS,
        element: <ComponentsPage />,
    },
];

export default routes;
