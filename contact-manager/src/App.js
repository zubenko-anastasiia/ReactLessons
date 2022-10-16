import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Header} from './components/Header';

import {RemovingCont} from './components/RemovingCont';
import {AddingCont} from './components/AddingCont';
import {EditContact} from './components/EditContact';
import {ContList} from './components/ContList';



function App() {
  return (
    <div className="App">
    
      <Router>
        <nav><Navbar/></nav>
        <header><Header/></header>
        <body className='conteiner'>
          <hr/>
          <Routes>
            <Route path='/' element={<ContList/>} />
            <Route path='/edit' element={<EditContact/>} />
            <Route path='/create' element={<AddingCont/>} />
            <Route path='/delete' element={<RemovingCont/>} />
          </Routes>
          
        </body>
        <footer className='footer'><Footer/></footer>
      </Router>
    </div>
    
  );
}

export default App;
