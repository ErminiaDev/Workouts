import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from 'react'

//we can consume the context and the values state and the dispatch by specifying which context we want to consume inside a useContext hook
//but when we may have multiple contexts it is best to make a custom hook for a specific context
//everytime we want to use our workout data we will invoke this function
const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error ( 'useWorkoutsContext must be used inside a WorkoutsContextProvider' )
    }

    return context;
}
 
export default useWorkoutsContext;