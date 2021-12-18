import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

// export default () => {
//   const [value, setValue] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       console.log("hi");
//       setValue(value + 1);
//     }, 2000);
//   });
//   // return value % 2 ? <h1>In Reconciliation</h1> : <div>In Reconciliation</div>;
//   return (
//     <h1 style={{ backgroundColor: value % 2 ? "red" : "green" }}>
//       In Reconciliation
//     </h1>
//   );
// };

export default () => {
  const [myArr, setMyArr] = useState(["a", "b", "c", "d"]);
  const addElementHandler = () => {
    setMyArr(["e", ...myArr]);
  };
  return (
    <>
      <h1>In Reconciliation</h1>
      <>
        {myArr.map((element) => {
          return <div key={element}>{element}</div>;
        })}
      </>
      <button onClick={addElementHandler}>Add Element</button>
    </>
  );
};
