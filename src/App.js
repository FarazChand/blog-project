import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
          path: "/posts/post/:blog",
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
