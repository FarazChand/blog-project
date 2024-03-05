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

function pyramid(n) {
  for (let row = 0; row < n + (n - 1); row++) {
    let bricks = "";

    for (let col = 0; col < n + (n - 1); col++) {
      if (col >= n - (row + 1) && col <= n + (row - 1)) {
        bricks += "#";
      } else {
        bricks += " ";
      }
    }

    console.log(bricks);
  }
  return;
}

pyramid(3);
pyramid(4);
pyramid(5);
