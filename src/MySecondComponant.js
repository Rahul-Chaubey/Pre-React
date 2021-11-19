import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";
import ThirdChild from "./ThirdChild";

export default (props) => {
     const {ParentComponantName }= props;
    
    return ( <> 
    <div>
    <h2>Second componant called from { ParentComponantName}</h2>
    <FirstChild ChildComponantName={"MySecondComponant"}/>
    <SecondChild ChildComponantName={"MySecondComponant"}/>
    <ThirdChild ChildComponantName={"MySecondComponant"}/>
    </div>
    </>
    );
};