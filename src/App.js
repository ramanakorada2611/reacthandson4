
import './App.css';

import{BrowserRouter,Routes,Route} from'react-router-dom';
import Home from './Pages/Home'
import Student from './Pages/Student';
import Contact from './Pages/Contact';
import NavBar from './Pages/NavBar';
function App() {
  return (
    <>
    
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Student" element={<Student/>}/>
        <Route path="/Contact"  element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
