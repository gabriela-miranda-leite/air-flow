import {
  BrowserRouter,
  Route,
  Routes as RoutesNavigation,
} from "react-router-dom";

import { Dashboard, WelcomeAccount } from "../pages";
import { AuthContextProvider } from "../context/useAuth";

export const Routes = () => (
  <AuthContextProvider>
    <BrowserRouter>
      <RoutesNavigation>
        <Route path="/" element={<WelcomeAccount />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </RoutesNavigation>
    </BrowserRouter>
  </AuthContextProvider>
);
