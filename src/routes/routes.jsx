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
import Backend from "../pages/Backend";
import Nodejs from "../components/backend/NodeJs";
import Express from "../components/backend/Express";
import MongoDB from "../components/backend/MongoDB";
import RestApi from "../components/backend/RestApi";
import JwtAuth from "../components/backend/JwtAuth";
import Projects from "../pages/Projects";
import ProjectDetail from "../components/projects/ProjectDetail";

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
            },
            {
                path:'/backend',
                element:<Backend />,
                children:
                [
                    {path:'/backend/nodejs', element:<Nodejs />},
                    {path:'/backend/express', element:<Express />},
                    {path:'/backend/mongodb', element:<MongoDB />},
                    {path:'/backend/restapi', element:<RestApi />},
                    {path:'/backend/jwt', element:<JwtAuth />}

                ]
            },
            {
                path:'/projects',
                element:<Projects />
            },
            {
                path:'/projects/:projectId',
                element:<ProjectDetail />
            }
            ]

        },
        { path: '*', element: <NotFound /> }
    ]
)

export default routes;
