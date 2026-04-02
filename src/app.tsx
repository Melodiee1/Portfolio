/* Dependencies */
import { Outlet } from "react-router-dom";
import "./_essentials.css";

/* Components */
import Header from "./pages/Header/Header.tsx";

/* Main App Component */
function App() {
  return (
    <div id="" className="">
      <div className="main-container relative">
        <Header />
      </div>

      <div className="">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
