import logo from './logo.svg';
import {BrowserRouter as Router , Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Detail from './components/Detail';
import {Provider} from 'react-redux';
import store from './store/reducers/stor';

function App() {
  return (
    // <div className="App">
<Router>

  <Provider store={store}>
  <Navbar />

<Route path="/" exact component ={Home}/> 
<Route path="/Cart" exact component ={Cart}/> 
<Route path="/Detail/:id" exact component ={Detail}/> 

</Provider>
</Router>



  );
}

export default App;
