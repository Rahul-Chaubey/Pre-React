import { useEffect, useState } from "react";
import useMyLog from "./useMyLog";
import useUserStatus from "./useUserStatus";


export default () => {
    const [value, setValue] = useState(0);
    const [newValue, setNewValue] = useState(0);
    // useMyLog(value);
    // useMyLog(newValue);

    const userStatus = useUserStatus(value);
    const userNewStatus = useUserStatus(newValue);
   
    const onClickHandler = () => {
        setValue(value+ 1);
    };

    const onNewValueClickHandler = () => {
    setNewValue(newValue + 1);
};
        useEffect(() => {
            console.log("rendered");  // execute everytime after component is rendered/updated
        });

        // useEffect (() => {
        //     console.log("rendered");
        // }, []);   //execute only once after component is rendered

        useEffect(() => {
            console.log("value updated")
            return () => {
            //clean up
            console.log("clean up");
            };

        }, [value]);  //execute everytime when value will get updated
        return (
            <>
            <h1>Use Effect Example Component</h1>
            <div>Value: {value}</div>
            <div>New Value: {newValue}</div>
            <div>User Status: {userStatus}</div>
            <div>New User Status: {userNewStatus}</div>
            <button onClick = {onClickHandler}>Click Me</button>
            <button onClick = {onNewValueClickHandler}>Click Me to Update New Value</button>

            </>
        );
};