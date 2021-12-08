import { useState } from "react";
import withOrder from "./withOrder";

const OfflineOrders = (props) => {
    const status = ["Orde Placed","Preparing", "Serving" , "Bill Payment"];

    

return (
    <>
    <h1>Offline Orders</h1>
    <div>Current Status: {status[props.value]}</div>
    <button onClick={props.onClickHandler}>Next Status</button>
    </>
);


}

export default withOrder(OfflineOrders);