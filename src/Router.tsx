import { useAtomValue } from "jotai";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Protected from "./Layouts/Protected";
import Public from "./Layouts/Public";
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from "./Routes";
import { isUserAtom } from "./storeAtom";

const router = (isUser: boolean) => {
  const routes = isUser ? PROTECTED_ROUTES : PUBLIC_ROUTES;
  return createBrowserRouter(
    createRoutesFromElements(
      <Route element={isUser ? <Protected /> : <Public />}>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Route>
    )
  );
};

export default function Router() {
  const isUser = useAtomValue(isUserAtom);
  return <RouterProvider router={router(isUser)} />;
}
