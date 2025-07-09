import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home'
import Frontend from '../pages/Frontend'
import Html from "../components/frontend/Html";
import Css from "../components/frontend/Css";
import Js from "../components/frontend/Js";
import ReactJs from "../components/frontend/ReactJs";
import TailwindCss from "../components/frontend/TailwindCss";
import NotFound from "../components/gloable/NotFound";

const routes = createBrowserRouter(
    [
        {
            path:'/' ,
            element:<App />,
            children:
            [
            {path:'/' , element:<Home />},
            {path:'/frontend',
             element:<Frontend />,
             children:
             [
                {path:'/frontend/html' , element:<Html />},
                {path:'/frontend/css' , element:<Css />},
                {path:'/frontend/js' , element:<Js />},
                {path:'/frontend/reactjs' , element:<ReactJs />},
                {path:'/frontend/tailwind' , element:<TailwindCss />}

             ]
            }
            ]

        },
        { path: '*', element: <NotFound /> }
    ]
)

export default routes;