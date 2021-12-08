export default (userId) => {
    // let status = "Online";

    // //Code to fetch the user status from server(API call)

    // //write code to return status as online if user id id even else return offline

    // if(userId%2 === 0) {
    //     status = "online";
    // } else {
    //     status = "offline"
    // }
    // return status;
    return userId % 2 ? "offline" : "online"; //same as above code
};