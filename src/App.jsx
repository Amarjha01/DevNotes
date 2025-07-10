import { Outlet } from "react-router-dom";
import Footer from "./components/gloable/Footer";
import { Header } from "./components/gloable/Header";

const App = () => {
  return (
    <>
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}


export default App