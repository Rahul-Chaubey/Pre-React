import logo from './logo.svg';
import './App.css';
import Person from "./Person";
import Course from './Course';

function App() {
  return (
    <div className="container text-center">
      <h1>React-Redux-Person</h1>
      <Person />
      <Course />
    </div>
  );
}

export default App;
