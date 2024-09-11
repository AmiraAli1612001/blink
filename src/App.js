import Footer from "./pages/component/Footer";
import Header from "./pages/component/Header";

import "./assets/css/style.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
