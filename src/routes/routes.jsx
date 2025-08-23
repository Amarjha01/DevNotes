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


import BackendQuiz from "../components/quiz/BackendQuiz";
import MlQuiz from "../components/quiz/MlQuiz";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      
      {
         path: "frontend", // No leading slash here
        element: <Frontend />,
        children: [
          { path: "html", element: <Html /> }, // Relative path
          { path: "css", element: <Css /> },
          { path: "js", element: <Js /> },
          { path: "reactjs", element: <ReactJs /> },
          { path: "tailwind", element: <TailwindCss /> },
          { path: "cheatsheet", element: <CheatSheet /> },
                ],
      },
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
    { path: "ml", element: <MlQuiz /> },


  ]
},*/

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
  path: "/backend/backendprepsheet",
  element: <BackendPrepSheet />,
},
      {
        path: "/machine-learning",
        element: <MachineLearning />,
        children: [
          { path: "/machine-learning/introduction", element: <Introduction /> },
          { path: "/machine-learning/ai", element: <AI /> },
          { path: "/machine-learning/supervised", element: <SupervisedLearning /> },
          { path: "/machine-learning/unsupervised", element: <UnsupervisedLearning /> },
          { path: "/machine-learning/reinforcement", element: <ReinforcementLearning /> },
          { path: "/machine-learning/evaluation", element: <Evaluation /> },
        
        ],
      },

      {
        path: "/GitGuide",
        element: <GitGuide />,
      },
      {
        path: "/miscellaneous",
        element: <Miscellaneous />,
        children: [
          { path: "/miscellaneous/git", element: <Git /> },
          { path: "/miscellaneous/testing", element: <Testing /> },
          { path: "/miscellaneous/accessibility", element: <Accessibility /> },
          { path: "/miscellaneous/packagemanagers", element: <PackageManagers /> },
          { path: "/miscellaneous/webperformance", element: <WebPerformance /> },
        ],
      },

      /*{
        path: "/deployment",
        element: <Deployment />,
        children: [
          { path: "/deployment/heroku", element: <Heroku /> },
          { path: "/deployment/docker", element: <Docker /> },
          //{ path: "/deployment/cicd", element: <CICD /> },
          { path: "/deployment/statichosting", element: <StaticHosting /> },
          { path: "/deployment/cloudhosting", element: <CloudHosting /> },
        ],
      },*/

      {
        path: "/devops",
        element: <DevOps />,
        children: [
          {path: "/devops/intro", element: <DevOpsIntro /> },
          {path: "/devops/cicd", element: <CICD /> },
          {path: "/devops/docker", element: <Docker /> },
          {path: "/devops/kubernetes", element: <Kubernetes /> },
          {path: "/devops/terraform", element: <Terraform /> },
          {path: "/devops/monitoring", element: <Monitoring /> },
          {path: "/devops/deployment", element: <Deployment /> },
          {path: "/devops/cloud", element: <Cloud /> },
     

        ]

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

      {
        path: "/system-design",
        element: <SystemDesign />,
        children: [
          { path: "/system-design/api-design", element: <API /> },
          { path: "/system-design/caching", element: <Caching /> },
          { path: "/system-design/database-design", element: <DatabaseDesign /> },
          { path: "/system-design/scalability", element: <Scalability /> },
          { path: "/system-design/load-balancers", element: <LoadBalancers /> },
        ]
      },

      {
        path: "/dsa",
        element: <DSA />,
        children: [
          { path: "/dsa/array", element: <Array /> },
          { path: "/dsa/greedy", element: <Greedy /> },
          { path: "/dsa/stack", element: <Stack /> },
          { path: "/dsa/queue", element: <Queue /> },
          { path: "/dsa/string", element: <String /> }
        ]
      },
      {
        path: "/dsa/dsaprepsheet",
        element: <DsaPrepSheet /> 
      },
      
      { path: "/android", element: <AndroidDevelopmentRoadmap /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:projectId", element: <ProjectDetail /> },
  { path: "/GitGuide", element: <GitGuide /> },
  { path: "/digest-info", element: <DigestInfo /> },

    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
