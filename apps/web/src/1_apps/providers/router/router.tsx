import { createBrowserRouter } from "react-router-dom";
import { Feed } from "@/2_pages/feed/FeedV1";
import { FeedV2 } from "@/2_pages/feed/Feed";

import { Dashboard } from "@/2_pages/dashboard/Dashboard";
import { RootLayout } from "@/1_apps/layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    //   {
    //     path: "/feed",
    //     element: <FeedV2 />
    //   }
    ],
  },
]);
