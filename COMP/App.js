import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComponent';
import TrueComponent from './TrueComponent';
import FalseComponent from './FalseComponent';
import ConditionalComponent from './ConditionalComponent';

function App() {

  const name  = "Rahul";
  return (
    // <div className="App">
    //   <ParentComponent/>
    // </div>
    <div>
      <h1>From App</h1>
      {/* {name === "Rahul" ? <TrueComponent/> : <FalseComponent/>}
      {name === "Rahul" && <TrueComponent/>} */}
      <ConditionalComponent/>
      
    </div>
  );
}

export default App;
