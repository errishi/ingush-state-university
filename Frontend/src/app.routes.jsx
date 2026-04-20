import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Structure from "./Pages/Structure";
import ScientificActivity from "./Pages/ScientificActivity";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Applicant from "./Pages/Applicant";
import NotFound from "./Pages/NotFound";
import InformationForApplicants from "./Pages/InformationForApplicants";
import EducationalActivity from "./Pages/EducationalActivity";
import SearchResults from "./Pages/SearchResults";
import TestCenter from "./Pages/TestCenter";
import Education from "./Pages/Education";

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
            },
            {
                path: "/information-for-applicants",
                element: <InformationForApplicants />
            },
            {
                path: "/educational-activity",
                element: <EducationalActivity />
            },
            {
                path: "/search",
                element: <SearchResults />
            },
            {
                path: "/test-center",
                element: <TestCenter />
            },
            {
                path: "/sveden/education",
                element: <Education />
            },
            {
                path: "/*",
                element: <NotFound />
            }
        ]
    }
]);

export default router;