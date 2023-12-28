import HeaderNav from "./components/HeaderNav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <HeaderNav />
      <main>
      <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
