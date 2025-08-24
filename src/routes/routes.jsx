import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Frontend from "../pages/Frontend";
import FrontendNotes from "../components/notes/Frontend";
import BackendNotes from "../components/notes/Backend";
import MlNotes from "../components/notes/Ml";
import DsaNotes from "../components/notes/Dsa";
import SystemNotes from "../components/notes/System";
import AndroidNotes from "../components/notes/Android";
import Html from "../components/frontend/Html";
import Css from "../components/frontend/Css";
import Js from "../components/frontend/Js";
import ReactJs from "../components/frontend/ReactJs";
import TailwindCss from "../components/frontend/TailwindCss";
import CheatSheet from "../components/frontend/cheatsheet";
import NotFound from "../components/gloable/NotFound";
import DigestInfo from "../pages/DigestInfo";
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
import GitGuide from "../pages/GitGuide";
import Miscellaneous from "../pages/miscellaneous";
//import Deployment from "../pages/deployment";
import Git from "../components/miscellaneous/Git";
import Heroku from "../components/deployment/Heroku";
import Testing from "../components/miscellaneous/Testing";
import PackageManagers from "../components/miscellaneous/PackageManagers";
import WebPerformance from "../components/miscellaneous/WebPerformance";
//import Docker from "../components/deployment/Docker";
//import CICD from "../components/deployment/CICD";
//import StaticHosting from "../components/deployment/StaticHosting";
//import CloudHosting from "../components/deployment/CloudHosting";
import Accessibility from "../components/miscellaneous/Accessibility";
import SystemDesign from "../pages/SystemDesign";
import API from "../components/system-design/API-Design";
import Caching from "../components/system-design/Caching";
import DatabaseDesign from "../components/system-design/Database-Design";
import Scalability from "../components/system-design/Scalability";
import LoadBalancers from "../components/system-design/Load-Balancers";
import DSA from "../pages/Dsa";
import Array from "../components/Dsa/Array";
import Greedy from "../components/Dsa/Greedy";
import Stack from "../components/Dsa/Stack";
import Queue from "../components/Dsa/Queue";
import String from "../components/Dsa/String";
import DsaPrepSheet from "../components/Dsa/DsaPrepSheet";
import FrontendPrepSheet from "../components/frontend/FrontendPrepSheet";
import BackendPrepSheet from "../components/backend/BackendPrepSheet";
import DevOps from "../pages/DevOps";
import DevOpsIntro from "../components/DevOps/Intro";
import CICD from "../components/DevOps/CICD";
import Docker from "../components/DevOps/Docker";
import Kubernetes from "../components/DevOps/Kubernetes";
import Terraform from "../components/DevOps/Terraform";
import Monitoring from "../components/DevOps/Monitoring";
import Deployment from "../components/DevOps/Deployment";
import Cloud from "../components/DevOps/Cloud";
//import FrontendQuiz from "../components/quiz/FrontendQuiz";
//import BackendQuiz from "../components/quiz/BackendQuiz";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

      // Frontend Routes
      {
        path: "frontend",
        element: <Frontend />,
        children: [
          { path: "html", element: <Html /> },
          { path: "css", element: <Css /> },
          { path: "js", element: <Js /> },
          { path: "reactjs", element: <ReactJs /> },
          { path: "tailwind", element: <TailwindCss /> },
          { path: "cheatsheet", element: <CheatSheet /> },
        ],
      },
      
      // Notes Section
      {
  path: "/notes",
  children: [
    { path: "frontend", element: <FrontendNotes /> },
    { path: "backend", element: <BackendNotes /> },
    { path: "dsa", element: <DsaNotes /> },
    { path: "system", element: <SystemNotes /> },
    { path: "ml", element: <MlNotes /> },
    { path: "android", element: <AndroidNotes /> },
  ]
},
{
        path: "/frontend/frontendprepsheet",
        element: <FrontendPrepSheet /> 
      },

    
/*  { path: "/quiz",
  children: [
    { path: "frontend", element: <FrontendQuiz /> },
    { path: "backend", element: <BackendQuiz /> },

  ]
},*/

      {
        path: "/backend",
        element: <Backend />,
        children: [
          { path: "nodejs", element: <Nodejs /> },
          { path: "express", element: <Express /> },
          { path: "mongodb", element: <MongoDB /> },
          { path: "restapi", element: <RestApi /> },
          { path: "jwt", element: <JwtAuth /> },
        ],
      },
      
      { path: "/backend/backendprepsheet", element: <BackendPrepSheet /> },

      // Machine Learning Routes
      {
        path: "/machine-learning",
        element: <MachineLearning />,
        children: [
          { path: "introduction", element: <Introduction /> },
          { path: "ai", element: <AI /> },
          { path: "supervised", element: <SupervisedLearning /> },
          { path: "unsupervised", element: <UnsupervisedLearning /> },
          { path: "reinforcement", element: <ReinforcementLearning /> },
          { path: "evaluation", element: <Evaluation /> },
        ],
      },

      // Miscellaneous Routes
      {
        path: "/miscellaneous",
        element: <Miscellaneous />,
        children: [
          { path: "git", element: <Git /> },
          { path: "testing", element: <Testing /> },
          { path: "accessibility", element: <Accessibility /> },
          { path: "packagemanagers", element: <PackageManagers /> },
          { path: "webperformance", element: <WebPerformance /> },
        ],
      },

      // DevOps Routes
      {
        path: "/devops",
        element: <DevOps />,
        children: [
          { path: "intro", element: <DevOpsIntro /> },
          { path: "cicd", element: <CICD /> },
          { path: "docker", element: <Docker /> },
          { path: "kubernetes", element: <Kubernetes /> },
          { path: "terraform", element: <Terraform /> },
          { path: "monitoring", element: <Monitoring /> },
          { path: "deployment", element: <Deployment /> },
          { path: "cloud", element: <Cloud /> },
        ],
      },

      // GenAI Tools Routes
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

      // System Design Routes
      {
        path: "/system-design",
        element: <SystemDesign />,
        children: [
          { path: "api-design", element: <API /> },
          { path: "caching", element: <Caching /> },
          { path: "database-design", element: <DatabaseDesign /> },
          { path: "scalability", element: <Scalability /> },
          { path: "load-balancers", element: <LoadBalancers /> },
        ],
      },

      // DSA Routes
      {
        path: "/dsa",
        element: <DSA />,
        children: [
          { path: "array", element: <Array /> },
          { path: "greedy", element: <Greedy /> },
          { path: "stack", element: <Stack /> },
          { path: "queue", element: <Queue /> },
          { path: "string", element: <String /> },
        ],
      },
      
      { path: "/dsa/dsaprepsheet", element: <DsaPrepSheet /> },
      { path: "/android", element: <AndroidDevelopmentRoadmap /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:projectId", element: <ProjectDetail /> },
      { path: "/digest-info", element: <DigestInfo /> },

      
      // Fallback Route
      { path: "*", element: <NotFound /> },


      //single page routes
       { path: "/GitGuide",element: <GitGuide />,},
    ],
  },
]);

export default routes;

