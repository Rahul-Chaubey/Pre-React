import MyFirstComponant from "./MyFirstComponant";
import MySecondComponant from "./MySecondComponant";


// function  App(){
// const name = "Ajinkya";
// const name1 = "ganesh";
// // const age = 24   
//   return (
//     <div>
//       <h1>Hello {name  &&  name.length ? name : "world"}</h1>
//       {/* <h2>{1+2}</h2> */}
//       <MyFirstComponant name={name} age={24}>
//         <h2>Some data passed from app componant</h2>
//         </MyFirstComponant>    
//       {/* { <MySecondComponant name={name1} age={28} temp={"aajj"}/> } */}
//     </div>
//   );
// }
//  export default App;

 //write property name and pass value to child block/
 // name = {name}
 //  |         |
 //property    pass value
 // convert static to dyanamics


 // task


function  App(){
  const name="Rahul";
 
  return (
    <div>
      <h1>Hello {name  &&  name.length ? name : "world"}</h1>

      <div> <h2> MyFirstComponant </h2></div> 
      <MyFirstComponant ParentComponantName={"App"} ></MyFirstComponant>

      <div> <h2> MySecondComponant </h2></div> 
      <MySecondComponant ParentComponantName={"App"}></MySecondComponant>

    </div>
   
  );
}
 export default App;