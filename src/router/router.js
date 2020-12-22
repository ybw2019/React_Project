import Home from "../component/view/home/Home";
import News from "../component/view/News";

let routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/news",
        component: News
    },
];

export default routes;