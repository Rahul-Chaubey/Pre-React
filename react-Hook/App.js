import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FunctionalComponent';
import ClassComponentConversion from './ClassComponentConversion';
import OnlineOrders from './OnlineOrders';
import OfflineOrders from './OfflineOrders';
import OnlineOrder1 from './OnlineOrder1';
import UseEffectExample from './UseEffectExample';

function App() {
  return (
    <div className="App">
     <FunctionalComponent />
     {/* <ClassComponentConversion />
     <OnlineOrders/>
     <OfflineOrders/>
     <OnlineOrder1 /> */}
     <UseEffectExample />
    </div>
  );
}

export default App;
