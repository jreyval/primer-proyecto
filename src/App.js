import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Home from './page/Home';
import Header from './layout/Header/Header';
import Home2 from './page/Home2';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux' 
/* import { configureStore } from 'redux' */



const store = createStore(reducers)
function App() {
  return (
    <Provider store={store}>
      <Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home2" element={<Home2 />} />
          </Routes>
        </BrowserRouter>
      </Header>
    </Provider>
  );
}

export default App;
 