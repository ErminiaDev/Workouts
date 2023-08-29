import { createContext, useReducer } from "react";

const WorkoutsContext = createContext()

//takes previous state and an action as arguments
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
            default:
                return state
    }
}

const WorkoutsContextProvider = ({ children }) => {
    //similar to useState, with a state and an initial value
    //the dispatch contains a type and a payload
    const [state, dispatch] = useReducer( workoutsReducer, {
        workouts: null
    })
    

    return ( 
        //...state to have the different properties of the workouts
        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </WorkoutsContext.Provider>
     );
}
 
export { WorkoutsContext, workoutsReducer, WorkoutsContextProvider };