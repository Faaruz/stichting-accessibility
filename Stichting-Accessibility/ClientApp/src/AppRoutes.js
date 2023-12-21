import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import Home from "./components/pages/Home";  // Import as default
import Registration from "./components/pages/Registration";
import BedrijfRegistration from "./components/pages/BedrijfRegistration"; // Without curly braces
import BedrijfDashboard from "./components/pages/BedrijfDashboard";
import ErvaringsdeskundigeRegistration from "./components/pages/ErvaringsdeskundigeRegistration";
import Onboarding from "./components/pages/Onboarding";
import Research from "./components/pages/Research";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: "/registration",
    element: <Registration />
  },
  {
    path: "/bedrijfregistration",
    element: <BedrijfRegistration />
  },
  {
    path: "/ervaringsdeskundigeregistration",
    element: <ErvaringsdeskundigeRegistration />
  },
  {
    path: "/dashboard",
    element: <BedrijfDashboard />
  },
  {
    path: "/onboarding",
    element: <Onboarding />
  },
  {
    path: "/research",
    element: <Research />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
