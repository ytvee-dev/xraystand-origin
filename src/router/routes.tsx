import HomePage from "@pages/Home";
import NotFoundPage from "@pages/NotFound";
import TrafficsLawsPage from "@pages/TrafficsLaws";
import { type RouteObject } from "react-router";

const paths = {
    HOME: {
        id: "home",
        path: "/",
    },
    TRAFFIC_LAWS_PAGE: {
        id: "trafficLawsPage",
        path: "/traffic-laws",
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
        ...paths.NOT_FOUND,
        element: <NotFoundPage />,
    },
];

export default routes;
