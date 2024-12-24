import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/layout/root";
import Home from "@/pages/home";
import AddProperty from "@/pages/add-property";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/add-property",
                element: <AddProperty />
            },
        ],
    },
])