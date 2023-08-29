import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from 'react'

//everytime we want to use our workout data we will invoke this function
const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context) {
        throw Error ( 'useWorkoutsContext must be used inside a WorkoutsContextProvider' )
    }

    return context;
}
 
export default useWorkoutsContext;