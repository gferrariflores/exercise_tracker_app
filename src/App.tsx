import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header.tsx'
import Exercises from './components/Exercises.tsx'
import AddExercise from './components/AddExercise.tsx'
import Footer from './components/Footer.tsx'
import About from './components/About.tsx'

interface Exercise {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
}

function App() {
  const [showAddExercise, setShowAddExercise] = useState(false)

  useEffect(() => {
    const getExercises = async () => {
      const exercisesFromServer = await fetchExercises()
      setExercises(exercisesFromServer)
    }

    getExercises()
  }, [])

  // Fetch Exercises
  const fetchExercises = async () => {
    const res = await fetch('http://localhost:5000/exercise')
    const data = await res.json()
    return data
  }

  // Fetch Exercise
  const fetchExercise = async (id: number) => {
    const res = await fetch(`http://localhost:5000/exercise/${id}`)
    const data = await res.json()
    return data
  }

  //const [exercises, setExercises] = useState([])
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // Add Exercise
  const addExercise = async (exercise: Exercise) => {
    try {
      const res = await fetch('http://localhost:5000/exercise', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(exercise)
      });

      const data = await res.json()

      setExercises((prevExercises) => [...prevExercises, data])
    } catch (error) {
      console.error('Error adding exercise:', error)
    }
  }

  // Delete Exercise
  const deleteExercise = async (id: number) => {
    await fetch(`http://localhost:5000/exercise/${id}`, {
      method: 'DELETE'
    })
    setExercises(exercises.filter((exercise) => exercise.id !== id))
  }

  // Toggle Favorite
  const toggleFavorite = async (id: number) => {
    const exerciseToToggle = await fetchExercise(id)
    const updExercise = { ...exerciseToToggle, favorite: !exerciseToToggle.favorite }

    const res = await fetch(`http://localhost:5000/exercise/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updExercise)
    })

    const data = await res.json()

    setExercises(exercises.map((exercise) => exercise.id === id ? { ...exercise, favorite: data.favorite } : exercise))
  }

  return (
    <Router>
      <div className="container mx-auto max-w-xl">
        <Header title='Exercise Tracker' onAdd={() => setShowAddExercise(!showAddExercise)} showAdd={showAddExercise} />
        <Routes>
          <Route path="/" element={
            <>
              {showAddExercise && <AddExercise onAdd={addExercise} />}
              {exercises.length > 0 ? <Exercises exercises={exercises} onDelete={deleteExercise} onToggle={toggleFavorite} /> : 'No Exercises to show'}
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
