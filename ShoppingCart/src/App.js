import './App.css';
import Header from './components/Header';
import Cart from './components/Cart';
import { MyCartContext } from './management/context';


function App() {

  return (
    <div className="App">
      <Header/>
      <Cart/>
    </div>
  );
}

export default App;
