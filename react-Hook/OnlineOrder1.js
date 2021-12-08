import { useState } from "react";
import OnlineOrderChild1 from "./OnlineOrderChild1";




const OnlineOrder1 = () => {

const status = [
    "order placed",
    "pending",
    "preparing",
    "out for delivery",
];

const [value, setValue] = useState(0);
const onClickHandler = () => {
    setValue(value + 1);
};
return (
    <>
    <h1>Online OnlineOrder1</h1>
    <div>Current Status :{status[value]}</div>
    <button onClick={onClickHandler}>Next Status</button>
    <OnlineOrderChild1 onClickHandler = {onClickHandler}/>
    </>
);

};

export default OnlineOrder1;

