import MyFirstComponent from "./MyFirstComponent";
import MySecondComponent from "./MySecondComponent";


function  App(){
const name = "Rahul";
  return (
    <div>
      <h1>Hello {name}</h1>
      <MyFirstComponent/>
      <MySecondComponent/>
    </div>
  );
}

 export default App;