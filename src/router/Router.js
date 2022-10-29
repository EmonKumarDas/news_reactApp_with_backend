import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import SignIn from "../Authentication/SignIn";
import CategorisNews from "../CategoryNews/CategorisNews";
import CategorisNewsById from "../CategoryNews/CategorisNewsById";
import Home from "../components/Home";
import Main from "../Main/Main";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:5000/news"),
        element: <Home></Home>
      },
      {
        path: "/home",
        loader: () => fetch("http://localhost:5000/news"),
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
        element: <CategorisNews></CategorisNews>,
      },
      {
        path: "/categoryById/:id",
        loader: ({params}) => fetch(`http://localhost:5000/newsById/${params.id}`),
        element: 
        <PrivateRoute>
           <CategorisNewsById></CategorisNewsById>
        </PrivateRoute>
       ,
      },

    ]
  },
]);