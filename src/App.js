
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainSearch from './Components/MainSearch';
import Jobs from './Components/Jobs';
import Header from './Components/Header';
import Favorites from "./Components/Favorites";

function App() {
  return (
    <div className="App">



   <BrowserRouter>

          <Header/>

          <Route path='/'  exact component={Home} />
          <Route path='/mainsearch'  component={MainSearch} />
          <Route path='/jobs' component={Jobs} />
          <Route path='/favorites'  component={Favorites}/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
