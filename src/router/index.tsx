import routes from "./routes";
import {type ReactElement} from "react";
import {Route, Routes, type RouteObject} from "react-router";

const ApplicationRouter = (): ReactElement => {
    return (
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
    );
};

export default ApplicationRouter;
