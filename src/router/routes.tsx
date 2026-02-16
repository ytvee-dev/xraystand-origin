import Demo from "@pages/Demo";
import {lazy} from "react";
import {type RouteObject} from "react-router";
import Implementation from "@pages/Implementation";

const HomePage = lazy(() => import("@pages/Home"));
const NotFoundPage = lazy(() => import("@pages/NotFound"));
const TrafficsLawsPage = lazy(() => import("@pages/TrafficsLaws"));
const KazakhAdebiet = lazy(() => import("@pages/KazakhAdebiet"));
const InProgress = lazy(() => import("@pages/InProgress"));
const Chemistry = lazy(() => import("@pages/Chemistry"));
const RusLit = lazy(() => import("@pages/RusLit"));
const Nutrition = lazy(() => import("@pages/Nutrition"));
const Mathematics = lazy(() => import("@pages/Mathematics"));
const Pages = lazy(() => import("@pages/Pages"));
const SafetyPrecautions = lazy(() => import("@pages/SafetyPrecautions"));
const FireSafety = lazy(() => import("@pages/FireSafety"));
const Physics = lazy(() => import('@pages/Physics'));
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
    FIRE_SAFETY: {
        id: "fireSafety",
        path: "/firesafety",
    },
    PHYSICS: {
        id: "physics",
        path: "/physics",
    },
    ENGLISH: {
        id: "english",
        path: "/english",
    },
    BIOLOGY: {
        id: "biology",
        path: "/bio",
    },
    PAGES: {
        id: "pages",
        path: "/pages",
    },
    IMPLEMENTATION: {
        id: "implementationPage",
        path: "/implementation",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
    },
    DEMO: {
        id: "demo",
        path: "/demo",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.HOME,
        element: <HomePage/>,
    },
    {
        ...paths.TRAFFIC_LAWS_PAGE,
        element: <TrafficsLawsPage/>,
    },
    {
        ...paths.CHEMISTRY,
        element: <Chemistry/>,
    },
    {
        ...paths.RUS_LIT,
        element: <RusLit/>,
    },
    {
        ...paths.KAZAKH_ADEBIET,
        element: <KazakhAdebiet/>,
    },
    {
        ...paths.MATH,
        element: <Mathematics/>,
    },
    {
        ...paths.NUTRITION,
        element: <Nutrition/>,
    },
    {
        ...paths.SAFETY_PRECAUTIONS,
        element: <SafetyPrecautions />,
    },
    {
        ...paths.KAZ_MUSIC,
        // element: <KazMusic />,
        element: <InProgress/>,
    },
    {
        ...paths.FIRE_SAFETY,
        element: <FireSafety/>,
    },
    {
        ...paths.PHYSICS,
        element: <Physics/>
    },
    {
        ...paths.ENGLISH,
        element: <NotFoundPage/>
    },
    {
        ...paths.BIOLOGY,
        element: <NotFoundPage/>
    },
    {
        ...paths.PAGES,
        element: <Pages/>,
    },
    {
        ...paths.IMPLEMENTATION,
        element: <Implementation/>,
    },

    {
        ...paths.NOT_FOUND,
        element: <NotFoundPage/>,
    },
    {
        ...paths.DEMO,
        element: <Demo/>,
    },
];

export default routes;
