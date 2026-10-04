import { createBrowserRouter } from "react-router";
import User from "../Components/User";

const router = createBrowserRouter([
    {
        path:"/",
        Component: User
    }
]);

export default router