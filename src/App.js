import React, { lazy, Suspense } from "react";
import Header from "./Components/Header";
import RestaurentBody from "./Components/RestaurentBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import RestaurentMenu from "./Components/RestaurentMenu";
import Error from "./Components/Error";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import { appStore } from "./store/appStore";
import { Provider } from "react-redux";

// Chunking
// Code Splitting
// Dynamic Bundling
// Dynamic Import
// Lazy Loading
// On Demand Loading
const TooBigModule = lazy(() => import("./Components/BigModuleWithXChilds"));

function App() {
  const isOnline = useOnlineStatus();
  if (!isOnline) return <h1>Offline</h1>;
  return (
    <Provider store={appStore}>
      <Header />
      <div className="app-body">
        <Outlet />
      </div>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RestaurentBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurents/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/bigmodule",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <TooBigModule />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default function Main() {
  return <RouterProvider router={appRouter} />;
}
