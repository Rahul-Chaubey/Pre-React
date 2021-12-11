import logo from './logo.svg';
import './App.css';
import HookSample from './HookSample';
import RefParent from './RefParent';
import PortalDemo from './PortalDemo';
import ProfilerDemo from './ProfilerDemo';
import UserHookSample from './UserHookSample';
import Increment from './Increment';
import NewIncrement from './NewIncrement';

function App() {
  const onClickHandler = () => {
    console.log("Clicked");
  };
  return (
    <div className="App" onClick={onClickHandler}>
     {/* <HookSample /> */}
     <UserHookSample />
     {/* <RefParent /> */}
     {/* I am inside App Component */}
     {/* <PortalDemo/> */}
     {/* <ProfilerDemo /> */}
     {/* <Increment />
     <NewIncrement /> */}
    </div>
  );
}

export default App;
