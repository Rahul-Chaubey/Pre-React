function SecondChild(props){
    const {ChildComponantName}=props ;
  
      return  ( <>
       <h4> SecondChild called from {ChildComponantName} </h4>
       </>  );
    };
    export default SecondChild;