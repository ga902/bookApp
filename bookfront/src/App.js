import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Index from './components/index';
import Create from './components/create';
import Update from './components/update';
import Show from './components/show';

function App() {
  return (
   <BrowserRouter>
   <nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/create'>Create</Link>
      </li>
      <li>
        <Link to='/update/1'>Update</Link>
      </li>
      <li>
        <Link to='/show/1'>Show</Link>
      </li>
    </ul>
   </nav>
   <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/show/:id' element={<Show/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
