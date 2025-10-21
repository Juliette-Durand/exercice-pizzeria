import { createBrowserRouter } from "react-router-dom";

import App from "../App.jsx"
import Home from "../pages/Home.jsx"
import Admin from "../pages/Admin.jsx"

export const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <Error404/>,
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "admin",
                element: <Admin />
            }
        ]
    },
])