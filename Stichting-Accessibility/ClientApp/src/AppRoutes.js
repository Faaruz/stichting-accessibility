import { Home } from './components/pages/Home';
import { Registration } from './components/pages/Registration';
import BedrijfRegistration from './components/pages/BedrijfRegistration'; // Import BedrijfRegistration
import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';

const AppRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/registration',
    element: <Registration />
  },
  {
    path: '/bedrijfregistration',
    element: <BedrijfRegistration />
  },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;


