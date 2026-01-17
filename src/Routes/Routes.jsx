import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import App from "../Pages/App";
import Install from "../Pages/Install";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children:[
      {
        index: true,
        loader: ()=> fetch('../appData.json'),
        element: <Home></Home>
      },
      {
        path: '/home',
        loader: ()=> fetch('../appData.json'),
        element: <Home/>
      },
      {
        path: '/app',
        loader: ()=> fetch('../appData.json'),
        element: <App/>
      },
      {
        path: '/install',
        element: <Install/>
      },
      {
        path: '/appDetails/:id',
        loader: ()=> fetch('../appData.json'),
        element: <AppDetails/>
      }
    ]
    
  },
]);

export default router;