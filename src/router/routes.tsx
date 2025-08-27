import { type RouteObject } from "react-router";
import HomePage from "@pages/Home";
import NotFoundPage from "@pages/NotFound";
import TrafficsLawsPage from "@pages/TrafficsLaws";
import KazakhAdebiet from "@pages/KazakhAdebiet";
import InProgress from "@pages/InProgress";
import Chemistry from "@pages/Chemistry";
import ComponentsPage from "@pages/Components";
import RusLit from "@pages/RusLit";
import Nutrition from "@pages/Nutrition";
// import Mathematics from "@pages/Mathematics";
// import SafetyPrecautions from "@pages/SafetyPrecautions";
// import KazMusic from "@pages/KazMusic";

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
    MATH: {
        id: "mathPage",
        path: "/math",
    },
    NUTRITION: {
        id: "nutritionPage",
        path: "/healthyfood",
    },
    SAFETY_PRECAUTIONS: {
        id: "safetyPrecautionsPage",
        path: "/classroomsafety",
    },
    KAZ_MUSIC: {
        id: "kazMusic",
        path: "/kazmusicinstr",
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
        ...paths.MATH,
        // element: <Mathematics />,
        element: <InProgress />,
    },
    {
        ...paths.NUTRITION,
        element: <Nutrition />,
    },
    {
        ...paths.SAFETY_PRECAUTIONS,
        // element: <SafetyPrecautions />,
        element: <InProgress />,
    },
    {
        ...paths.KAZ_MUSIC,
        // element: <KazMusic />,
        element: <InProgress />,
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
