import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useContext } from "react";

import { loader as blogDataLoader } from "./pages/Home";
import { GeneralContext } from "./store/general-context";

import {
  AboutPage,
  BlogPage,
  ContactPage,
  PostsPage,
  HomePage,
  RootPage,
} from "./pages";

function App() {
  const { darkModeValue } = useContext(GeneralContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      loader: blogDataLoader,
      id: "blog-data",
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/posts",
          element: <PostsPage />,
        },
        {
          path: "/posts/:tag",
          element: <PostsPage />,
        },
        {
          path: "/posts/post/:blogId",
          element: <BlogPage />,
        },
      ],
    },
  ]);

  return (
    <div
      className="App"
      id={darkModeValue ? "app-dark-mode" : "app-light-mode"}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
