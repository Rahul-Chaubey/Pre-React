import logo from './logo.svg';
import './App.css';
import NavbarComponent from './NavbarComponent';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import FooterComponent from './FooterComponent';
import { Routes,Route } from "react-router-dom";
import PostComponent from './PostComponent';
import ToDoComponent from './ToDoComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">

    <NavbarComponent/>
    <HeaderComponent/>

    <Routes>
      <Route path={"/Post"} element={<PostComponent/>} />
      <Route path={"/todo"} element={<ToDoComponent/>} />
    </Routes>

    <BodyComponent/>
    <FooterComponent/>
    
      </header>
    </div>
  );
}

export default App;
