import { createBrowserRouter } from "react-router-dom";
import { Feed } from "@/2_pages/feed/Feed";
import { Dashboard } from "@/2_pages/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
