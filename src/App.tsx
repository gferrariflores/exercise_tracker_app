import { useState } from 'react'

import Header from './components/Header.tsx'
import Exercises from './components/Exercises.tsx'
import AddExercise from './components/AddExercise.tsx'

interface Exercise {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
}

function App() {
  const [showAddExercise, setShowAddExercise] = useState(false)

  const [exercises, setExercises] = useState([
    {
      id: 1,
      name: 'Push-ups',
      description: 'Upper body exercise. Start in a plank position and lower your body towards the ground by bending your elbows. Push back up to the starting position.',
      favorite: false
    },
    {
      id: 2,
      name: 'Squats',
      description: 'Lower body exercise. Stand with feet shoulder-width apart, bend your knees, and lower your hips towards the ground. Return to the starting position.',
      favorite: false
    },
    {
      id: 3,
      name: 'Plank',
      description: 'Core exercise. Hold a push-up position with your arms straight. Keep your body in a straight line from head to heels for the duration of the exercise.',
      favorite: false
    },
    {
      id: 4,
      name: 'Deadlifts',
      description: 'Full-body exercise. Lift a barbell or dumbbells from the ground to a standing position, maintaining a straight back and using your hips to power the movement.',
      favorite: false
    },
    {
      id: 5,
      name: 'Lunges',
      description: 'Lower body exercise. Step forward with one leg and lower your body until both knees are bent at a 90-degree angle. Return to the starting position and switch legs.',
      favorite: false
    },
  ])

  // Add Exercise
  const addExercise = (exercise: Exercise) => {
    setExercises((prevExercises) => [...prevExercises, exercise]);
  };

  // Delete Exercise
  const deleteExercise = (id: number) => {
    // console.log('delete', id)
    setExercises(exercises.filter((exercise) => exercise.id !== id))
  }

  // Toggle Favorite
  const toggleFavorite = (id: number) => {
    setExercises(exercises.map((exercise) => exercise.id === id ? { ...exercise, favorite: !exercise.favorite } : exercise))
  }

  return (
    <div className="container mx-auto max-w-xl">
      <Header title='Exercise Tracker' onAdd={()=> setShowAddExercise(!showAddExercise)} showAdd={showAddExercise}/>
      {showAddExercise && <AddExercise onAdd={addExercise} />}
      {exercises.length > 0 ? <Exercises exercises={exercises} onDelete={deleteExercise} onToggle={toggleFavorite}/> : 'No Exercises to show'}
    </div>
  )
}

export default App
