import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from "./components/Detail";
import CreateDog from "./components/CreateDog";
import axios from "axios";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
// axios.defaults.baseURL = 'https://dogs-production-139f.up.railway.app/'
// axios.defaults.baseURL = 'https://dogs-backend-server.onrender.com/'
axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route
          render={({ location }) => {
            if (location.pathname !== "/") {
              return <NavBar />;
            }
            return null;
          }}
        />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/dog" component={CreateDog} />
          <Route path="/dog-detail/:id" component={Detail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
