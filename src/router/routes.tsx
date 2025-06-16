import FirstPage from "@pages/First";
import NotFoundPage from "@pages/NotFound";
import { Navigate, type RouteObject } from "react-router";

const paths = {
    HOME: {
        id: "home",
        path: "/",
    },
    FIRST_PAGE: {
        id: "firstPage",
        path: "/firstPage",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.HOME,
        element: <Navigate to={paths.FIRST_PAGE.path} />,
    },
    {
        ...paths.FIRST_PAGE,
        element: <FirstPage />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFoundPage />,
    },
];

export default routes;
