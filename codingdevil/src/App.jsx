import Day from "./components/Day";
import Daylist from "./components/Daylist";
import Header from "./components/Header";
import "./index.css"
import {BrowserRouter , Route , Switch} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
      <Daylist/>
      <Day/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
