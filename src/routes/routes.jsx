import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Frontend from "../pages/Frontend";
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
import MachineLearning from "../pages/MachineLearning";
import Introduction from "../components/machineLearning/Introduction";
import AI from "../components/machineLearning/AI";
import SupervisedLearning from "../components/machineLearning/SupervisedLearning";
import UnsupervisedLearning from "../components/machineLearning/UnsupervisedLearning";
import ReinforcementLearning from "../components/machineLearning/ReinforcementLearning";
import Evaluation from "../components/machineLearning/Evaluation";
import AndroidDevelopmentRoadmap from "../pages/AndroidDevelopmentRoadmap";
import GenAITools from "../pages/GenAITools";
import FrontEndTools from "../components/GenAITools/FrontEndTools";
import BackEndTools from "../components/GenAITools/BackEndTools";
import MLTools from "../components/GenAITools/MLTools";
import AndroidDevTools from "../components/GenAITools/AndroidDevTools";
import Miscellaneous from "../pages/miscellaneous";
import Deployment from "../pages/deployment";
import Git from "../components/miscellaneous/Git";
import Heroku from "../components/deployment/Heroku";
import Testing from "../components/miscellaneous/Testing";
import PackageManagers from "../components/miscellaneous/PackageManagers";
import WebPerformance from "../components/miscellaneous/WebPerformance";
import Docker from "../components/deployment/Docker";
import CICD from "../components/deployment/CICD";
import StaticHosting from "../components/deployment/StaticHosting";
import CloudHosting from "../components/deployment/CloudHosting";
import Accessibility from "../components/miscellaneous/Accessibility";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/frontend",
        element: <Frontend />,
        children: [
          { path: "/frontend/html", element: <Html /> },
          { path: "/frontend/css", element: <Css /> },
          { path: "/frontend/js", element: <Js /> },
          { path: "/frontend/reactjs", element: <ReactJs /> },
          { path: "/frontend/tailwind", element: <TailwindCss /> },
        ],
      },
      {
        path: "/backend",
        element: <Backend />,
        children: [
          { path: "/backend/nodejs", element: <Nodejs /> },
          { path: "/backend/express", element: <Express /> },
          { path: "/backend/mongodb", element: <MongoDB /> },
          { path: "/backend/restapi", element: <RestApi /> },
          { path: "/backend/jwt", element: <JwtAuth /> },
        ],
      },
      {
        path: "/machine-learning",
        element: <MachineLearning />,
        children: [
          { path: "/machine-learning/introduction", element: <Introduction /> },
          { path: "/machine-learning/ai", element: <AI /> },
          {
            path: "/machine-learning/supervised",
            element: <SupervisedLearning />,
          },
          {
            path: "/machine-learning/unsupervised",
            element: <UnsupervisedLearning />,
          },
          {
            path: "/machine-learning/reinforcement",
            element: <ReinforcementLearning />,
          },
          { path: "/machine-learning/evaluation", element: <Evaluation /> },
        ],
      },
      {
        path: "/android",
        element: <AndroidDevelopmentRoadmap />,
      },
      {
        path: "/miscellaneous",
        element: <Miscellaneous />,
        children: [
          { path: "/miscellaneous/git", element: <Git /> },
          { path: "/miscellaneous/testing", element: <Testing /> },
          { path: "/miscellaneous/accessibility", element: <Accessibility /> },
          {
            path: "/miscellaneous/packagemanagers",
            element: <PackageManagers />,
          },
          {
            path: "/miscellaneous/webperformance",
            element: <WebPerformance />,
          },
        ],
      },
      {
        path: "/deployment",
        element: <Deployment />,
        children: [
          { path: "/deployment/heroku", element: <Heroku /> },
          { path: "/deployment/docker", element: <Docker /> },
          { path: "/deployment/cicd", element: <CICD /> },
          { path: "/deployment/statichosting", element: <StaticHosting /> },
          { path: "/deployment/cloudhosting", element: <CloudHosting /> },
        ],
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetail />,
      },
      {
        path: "/GenAI-Tools",
        element: <GenAITools />,
        children: [
          { path: "", element: <Introduction /> },
          { path: "FrontEndTools", element: <FrontEndTools /> },
          { path: "BackEndTools", element: <BackEndTools /> },
          { path: "MLTools", element: <MLTools /> },
          { path: "AndroidDevTools", element: <AndroidDevTools /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
