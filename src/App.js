import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { loader as blogDataLoader } from "./pages/Home";

import {
  AboutPage,
  BlogPage,
  ContactPage,
  PostsPage,
  HomePage,
  RootPage,
} from "./pages";

function App() {
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
