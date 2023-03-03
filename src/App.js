import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Article from './components/articles';
import {Routes,Route,BrowserRouter} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={ <Home/>}/>
      <Route path='article' element={ <Article/>}/>
    </Routes>
    
    </BrowserRouter>

  
  );
}

export default App;
