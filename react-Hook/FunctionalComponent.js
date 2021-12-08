import { useState } from "react";


export default () => {
    const [value,setValue] = useState(0);
    const [newValue, setNewValue] = useState (0);
    const onUpdateClickHandler = () => {
        setValue(value+1);
    };

    const onUpdateNewValueClickHandler = () => {
        setNewValue(newValue + 1);
    };
    
    // const onDecrementClickHandler = () => {
    //     setValue(value-1);
    // };
    return ( 
        <>
        <h1>value : {value}</h1>
        <h1>New Value: {newValue}</h1>
        <button onClick={onUpdateClickHandler}>Increment</button>
        <button onClick={onUpdateNewValueClickHandler}>Update New Value State</button>
        {/* <button onClick={onDecrementClickHandler}>Decrement</button> */}
        </>
    );
};