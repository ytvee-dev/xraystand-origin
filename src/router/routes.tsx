import {lazy} from "react";
import {type RouteObject} from "react-router";

const HomePage = lazy(() => import("@pages/Home"));
const NotFoundPage = lazy(() => import("@pages/NotFound"));
const TrafficsLawsPage = lazy(() => import("@pages/TrafficsLaws"));
const KazakhAdebiet = lazy(() => import("@pages/KazakhAdebiet"));
const InProgress = lazy(() => import("@pages/InProgress"));
const Chemistry = lazy(() => import("@pages/Chemistry"));
const ComponentsPage = lazy(() => import("@pages/Components"));
const RusLit = lazy(() => import("@pages/RusLit"));
const Nutrition = lazy(() => import("@pages/Nutrition"));
// const Mathematics = lazy(() => import("@pages/Mathematics"));
// const SafetyPrecautions = lazy(() => import("@pages/SafetyPrecautions"));
// const KazMusic = lazy(() => import("@pages/KazMusic"));

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
