import { useState } from "react";

export default (props) => {

    const [value, setValue] = useState(0);

    const onClickHandler = () => {
             setValue(value -1);
      }

      return (
          <>
          <h1>In NewDecrement</h1>
          value : {props.value}
          <button onClick={props.onClickHandler}>NewDecrement</button>
          </>
      )
}