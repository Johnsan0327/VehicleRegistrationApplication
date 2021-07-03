import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './index.js';
import Home from'./components/pages/Home'
import Add from'./components/pages/Add'

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/add' component={Add}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
