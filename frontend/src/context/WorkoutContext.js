import { createContext, useReducer } from "react";

//brand new context
const WorkoutsContext = createContext()

//takes previous state (the one specified in useReducer) and an action as arguments
//this does not affect the database but keeps the application's state up to date with changes
const workoutsReducer = (state, action) => {
    switch(action.type) {
        case 'SET_WORKOUTS':
            console.log('SET_WORKOUTS')
            return {
                //the existing workouts
                workouts: action.payload
            }
        case 'CREATE_WORKOUTS':
            console.log('CREATE_WORKOUTS')
            return {
                //the current payload and the existing workouts
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return {
                //we filter the workouts to keep the ones that don't match with the id we want to delete
                workouts: state.workouts.filter((w) => w._id !== action.payload._id )
            }
        default:
        return state
    }
}

//wraps the parts of the application that need access to the context
const WorkoutsContextProvider = ({ children }) => {
    //similar to useState, with a reducer function and an initial value
    //the dispatch contains a type and a payload
    const [state, dispatch] = useReducer( workoutsReducer, {
        workouts: null
    })
    

    return ( 
        //providing state and dispatch in the value so it is available in other components
        //enables us to use the state or the dispatch function in children components
        //...state to have the different properties of the workouts
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </WorkoutsContext.Provider>
     );
}
 
export { WorkoutsContext, workoutsReducer, WorkoutsContextProvider };