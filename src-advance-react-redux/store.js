import {createStore} from "redux";

//Creating initialstate
const initialState = {
    counter: 0,
};

//Creating Reducer
const Reducer = (state= initialState, action) => {
    const { type } = action;
    switch (type) {

        case "increment" :
        return {
            counter: state.counter + 1,
        };

        case "decrement" :
        return {
            counter: state.counter - 1,
        };

        default:
            return state;
    };
}

  

//store
const store = createStore(Reducer);

export default store;