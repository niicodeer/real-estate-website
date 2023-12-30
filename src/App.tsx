import HeaderNav from "./components/HeaderNav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <HeaderNav />
      <main className="px-4 md:px-0">
      <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
