import { Outlet } from "react-router-dom";
import Footer from "./components/gloable/Footer";
import { Header } from "./components/gloable/Header";
import ChatbotButton from "./components/Chatbot/ChatbotButton";

const App = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
      <ChatbotButton/>
    </>
  );
}


export default App