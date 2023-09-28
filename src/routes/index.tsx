import {
  BrowserRouter,
  Route,
  Routes as RoutesNavigation,
} from "react-router-dom";

import { Dashboard, WelcomeAccount } from "../pages";

export const Routes = () => (
  <BrowserRouter>
    <RoutesNavigation>
      <Route path="/" element={<WelcomeAccount />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </RoutesNavigation>
  </BrowserRouter>
);
