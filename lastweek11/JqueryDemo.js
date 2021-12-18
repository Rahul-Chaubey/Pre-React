import $ from "jquery";

export default () => {
  const onClickHandler = () => {
    const element = document.getElementById("jquery-operation");
    if (element) {
      console.log("Element found");
      $(element).slideToggle();
    } else {
      console.log("Elemen Not found");
    }

    console.log("In Handler");
  };

  return (
    <>
      <h1>In JqueryDemo</h1>

      <div style={{ backgroundColor: "lightblue" }} id="jquery-operation">
        I will add some text content to this div
      </div>
      <button onClick={onClickHandler}>Click Me</button>
    </>
  );
};
