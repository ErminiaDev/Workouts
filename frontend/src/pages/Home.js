import { useEffect } from 'react'
import useWorkoutsContext from '../hooks/useWorkoutsContext'

import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    //we want the workouts and the dispatch the context provides us
    //workouts is null to begin with but we use the dispatch function to update it 
    //if a new workout is added, the state will be updated to display that workout
    const { workouts, dispatch } = useWorkoutsContext()

    //the update rerenders the home component so the useEffect will trigger the dispatch
    //hence fetching all of the workouts including the one just added
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if (response.ok) {
                //we dispatch an action
                dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
        }

        fetchWorkout()
        // eslint-disable-next-line
    }, [])

    return (
        <div className="home">
            <div className="workouts">
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout}/>
            ))}
            </div> 
            <WorkoutForm/>
        </div>
    )
}

export default Home;