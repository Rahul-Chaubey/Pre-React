import {createStore} from "redux";

//Creating initialstate
const initialState = {
    counter: 0,
};

//Creating Reducer
const Reducer = (state= initialState, action) => {
    const { type, value } = action;
    switch (type) {

        case "increment" :
        return {
            counter: state.counter + value,
        };

        case "decrement" :
        return {
            counter: state.counter - value,
        };

        default:
            return state;
    };
}

  

//store
const store = createStore(Reducer);

export default store;