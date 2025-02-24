import HomePage from "./components/HomePage/HomePage";
import ShoppingPage from "./components/ShoppingPage/ShoppingPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/shop",
    element: <ShoppingPage />,
  },
];

export default routes;