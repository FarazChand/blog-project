import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AboutPage, BlogPage, ContactPage, HomePage, RootPage } from "./pages";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/:blog",
          element: <BlogPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
