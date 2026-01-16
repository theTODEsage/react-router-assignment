import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import App from "../Pages/App";
import Install from "../Pages/Install";

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
        path: 'home',
        loader: ()=> fetch('../appData.json'),
        element: <Home/>
      },
      {
        path: 'app',
        element: <App/>
      },
      {
        path: 'install',
        element: <Install/>
      }
    ]
    
  },
]);

export default router;