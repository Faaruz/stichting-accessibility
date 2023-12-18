import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Home } from "./components/pages/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
