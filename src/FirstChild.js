function FirstChild(props){
    const { ChildComponantName }= props;
    return  ( <> <h4>In FirstChild called from { ChildComponantName }</h4>  </>);
  
  };
  export default FirstChild;