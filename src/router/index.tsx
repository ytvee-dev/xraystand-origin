import routes from "./routes";
import Spinner from "../components/common/Spinner";
import {Suspense, type ReactElement} from "react";
import {Route, Routes, type RouteObject} from "react-router";

const ApplicationRouter = (): ReactElement => {
    return (
        <Suspense fallback={<Spinner/>}>
            <Routes>
                {routes.map((route: RouteObject) => (
                    <Route
                        id={route.id}
                        key={route.id}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default ApplicationRouter;
