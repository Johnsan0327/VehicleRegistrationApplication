import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './index.js';
import Home from'./components/pages/Home'
import Add from'./components/pages/Add'
import viewAll from "./components/pages/viewList";
import DeleteList from "./components/pages/DeleteList";
import Find from "./components/pages/Find"

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/add' component={Add}/>
                <Route path='/viewAll' component={viewAll}/>
                <Route path='/Delete' component={DeleteList}/>
                <Route path='/find' component={Find}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
