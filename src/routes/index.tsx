import {
  BrowserRouter,
  Route,
  Routes as RoutesNavigation,
} from "react-router-dom";

import { WelcomeAccount } from "../pages";

export const Routes = () => (
  <BrowserRouter>
    <RoutesNavigation>
      <Route path="/" element={<WelcomeAccount />} />
    </RoutesNavigation>
  </BrowserRouter>
);
