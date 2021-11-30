import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import Navbar from './Navbar';
import Posts from './Posts';
import ToDos from './ToDos';
import Users from './Users';

function App() {
  return (
    <>
    
    <HeaderComponent/>
    <Navbar/>
    
    <Routes>
      <Route path={'/todos'} element={<ToDos />} />
      <Route path={'/posts'} element={<Posts />} />
      <Route path={'/users'} element={<Users />} />
    </Routes>
    <FooterComponent/>
  
    </>
  );
}

export default App;
