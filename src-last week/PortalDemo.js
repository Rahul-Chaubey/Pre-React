import reactDom from "react-dom";


export default () => {
    //return <h1>IN PortalDemp<h1/>;

    return reactDom.createPortal(
        <h1>In PortalDemo</h1>,
        document.getElementById("root-portal")
    );
};