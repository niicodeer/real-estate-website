import HeaderNav from "./components/HeaderNav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import SectionCTA from "./components/SectionCTA";
function App() {
  return (
    <>
      <HeaderNav />
      <main className="">
        <Outlet />
        <SectionCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
