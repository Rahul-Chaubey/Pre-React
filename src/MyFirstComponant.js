import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

// function MyFirstComponant(props) {
//     const {name, age, children}= props;
//     console.log(props);
//     console.log(name);
//     console.log(age);
//     return(
//         <>
//         <h2> Hello  I am {name}, i am {age} yrs old and I am inside MyFirstComponant</h2>
//         {children}
//     {/* <FirstChild/>
//     <SecondChild/>
//     <ThirdChild/> */}
//     </>
//     );
//   }
//   export default MyFirstComponant;
  

// task

function MyFirstComponant(props) {
    const { ParentComponantName }= props;
    
     return(
        <>
        <div>
        <h2>First componant called from {ParentComponantName}</h2>
        <FirstChild ChildComponantName={"MyFirstComponant"}/>
        <SecondChild ChildComponantName={"MyFirstComponant"}/>
        <ThirdChild  ChildComponantName={"MyFirstComponant"}/>
        </div>
    </>
    );
  };
  export default MyFirstComponant;