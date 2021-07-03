import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './index.js';
import Home from'./components/pages/Home'
import Add from'./components/pages/Add'
import ViewList from "./components/pages/viewList";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/add' component={Add}/>
                <Route path='/viewAll' ><ViewList/> </Route>

            </Switch>
        </Router>
    </>
  );
}

export default App;
