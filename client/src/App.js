import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home'
import Detail from './components/Detail'
import CreateDog from './components/CreateDog'
import axios from 'axios'
// axios.defaults.baseURL = 'https://dogs-production-139f.up.railway.app/'
axios.defaults.baseURL = 'https://dogs-backend-server.onrender.com'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home} />
          <Route path='/dog' component={CreateDog} />
          <Route path='/dog-detail/:id' component={Detail} />
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;


