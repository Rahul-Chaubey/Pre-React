import { useState } from "react";

export default () => {
    const [value,setValue] = useState(0);

  const onNewClickHandler = () => {
      setValue(value + 1);
  };
    return (
        <>
        <h1>NewIncrement:{value}</h1>

        <button onClick={onNewClickHandler}>NewClick</button>
        
        </>

    )
}