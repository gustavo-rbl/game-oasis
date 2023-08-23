import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layout
import RootLayout from "../Layout/RootLayout";

// pages
import Home from "../../pages/Home/Home";
import Store from "../../pages/Store/Store";
import Game from "../../pages/Game/Game";

// loader
import GamesLoader from "../../services/GamesLoader";
import NotFound from "../../pages/NotFound/NotFound";

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />

        <Route path="store" element={<Store />} loader={GamesLoader} errorElement={<NotFound />} />

        <Route
          path="store/:nameSlug"
          element={<Game />}
          loader={GamesLoader}
          errorElement={<NotFound />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;
