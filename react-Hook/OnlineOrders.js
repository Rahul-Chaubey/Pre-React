import { useState } from "react";
// import withOrder from "./withOrder";

const OnlineOrders = (props) => {
    const status = [
        "Order Placed",
        "Pending",
        "Preparing",
        "Out For Delivery",
        "Delivered",
    ];

 const [value,setValue] = useState(0);
const onClickHandler = () => {
    setValue(value +1);
};
    
return (
    <>
    <h1>Online Orders</h1>
    <div>Current Status :{status[props.value]}</div>
    <button onClick={onClickHandler}>Next Status</button>
    </>
);

};

export default OnlineOrders;