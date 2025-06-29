import HomePage from "@pages/Home";
import NotFoundPage from "@pages/NotFound";
import TrafficsLawsPage from "@pages/TrafficsLaws";
import InProgress from "@pages/InProgress";
import { type RouteObject } from "react-router";
// import Chemistry from "@pages/Chemistry";

const paths = {
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
    KAZAKH_ADIBIET: {
        id: "kazakhAdibietPage",
        path: "/kazakhadibiet",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
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
        element: <InProgress />,
    },
    {
        ...paths.RUS_LIT,
        element: <InProgress />,
    },
    {
        ...paths.KAZAKH_ADIBIET,
        element: <InProgress />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFoundPage />,
    },
];

export default routes;
