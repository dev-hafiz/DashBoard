import SideBar from "./Component/TopBar/SideBar/SideBar";
import TopBar from "./Component/TopBar/TopBar";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <TopBar/>
      <div className="container">
        <SideBar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
