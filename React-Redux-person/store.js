import {createStore} from 'redux';


//creating InitialState
const initialstate = {
   personList: [],
   courseList: [],
};

//Creting Reducer 
const Reducer = (state=initialstate, action) => {
    const {type, payload} = action;
    const personListCopy = [...state.personList];
    const courseListCopy = [...state.courseList];
    switch (type) {
        case "PERSON_ADD":            
            personListCopy.push(payload);
            return {
                ...state,
                    personList:personListCopy,
            } 
            case "COURSE_ADD":
            courseListCopy.push(payload);
            return{
                ...state,
                courseList:courseListCopy,
            }
         
            case "PERSON_DELETE":
                personListCopy.splice(payload, 1);
                alert("Deleted");
                return {
                    ...state,
                    personList:personListCopy,
                };
                case "COURSE_DELETE" :
            courseListCopy.splice(payload, 1);
            alert ("Deleted");
            return {
                ...state,
                courseList:courseListCopy,
            };
            default :
                return state;
    }
    
    
};


//Now creting store
const store = createStore(Reducer);


//exporting store
export default store;