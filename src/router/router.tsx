import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/layouts/BaseLayout/BaseLayout.tsx";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }
        ]
    }
])