import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Structure from "./Pages/Structure";
import ScientificActivity from "./Pages/ScientificActivity";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Applicant from "./Pages/Applicant";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/news",
                element: <News />
            },
            {
                path: "/scientific-activity",
                element: <ScientificActivity />
            },
            {
                path: "/structure",
                element: <Structure />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/applicant",
                element: <Applicant />
            }
        ]
    }
]);

export default router;