import { Navigate } from "react-router-dom";
import AuthGate from "./components/AuthGate/view";
import Posts from "./pages/Posts/view";
import {
  AuthGateTypes,
  LOGIN_ROUTE,
  POSTS_ROUTE,
  REGISTER_ROUTE,
} from "./utils/constants";
import { ROUTE_DATA } from "./utils/interfaces";

export const PUBLIC_ROUTES: ROUTE_DATA[] = [
  { path: LOGIN_ROUTE, element: <AuthGate type={AuthGateTypes.LOGIN} /> },
  { path: REGISTER_ROUTE, element: <AuthGate type={AuthGateTypes.REGISTER} /> },
  { path: "*", element: <Navigate to={LOGIN_ROUTE} /> },
];

export const PROTECTED_ROUTES: ROUTE_DATA[] = [
  { path: POSTS_ROUTE, element: <Posts /> },
  { path: "*", element: <Navigate to={POSTS_ROUTE} /> },
];
