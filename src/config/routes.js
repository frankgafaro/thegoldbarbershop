// Layouts
import LayoutBasic from "../Layouts/LayoutBasic";

// Page
import Home from "../pages/Home";

// Not Found
import Error404 from "../components/Error404";

const routes = [
    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
];

export default routes;