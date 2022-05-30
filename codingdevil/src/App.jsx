import Day from "./components/Day";
import Daylist from "./components/Daylist";
import Header from "./components/Header";
import "./index.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import EmptyPage from "./components/EmptyPage";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Daylist/>}/>
        <Route path="day/:day" element={<Day/>}/>
        <Route path=""/>
        <Route path="*" element={<EmptyPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
