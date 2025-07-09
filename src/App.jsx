import { Outlet } from "react-router-dom";
import Footer from "./components/gloable/Footer";
import { Header } from "./components/gloable/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-20 px-4 min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default App