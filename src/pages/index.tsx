// pages/Index.tsx
import React, { useState, useEffect } from 'react'
import * as api from '../api/api'

import Header from '../components/Header'
import AddExercise from '../components/AddExercise'

import CheckboxSidebar from '../components/CheckboxSidebar'
import ExercisesColumn from '../components/ExercisesColumn'
import WorkoutColumn from '../components/WorkoutColumn'

import Footer from '../components/Footer'

interface Exercise {
    id: number
    name: string
    description: string
    favorite: boolean
}

interface IndexProps {
    // Puedes agregar propiedades específicas de Index si es necesario
}

const Index: React.FC<IndexProps> = () => {
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [showAddExercise, setShowAddExercise] = useState(false)
    const [selectedExercises, setSelectedExercises] = useState<Exercise[]>([])

    useEffect(() => {
        const getExercises = async () => {
            try {
                const exercisesFromServer = await api.fetchExercises()
                setExercises(exercisesFromServer)
            } catch (error) {
                console.error('Error fetching exercises:', error)
            }
        }

        getExercises()
    }, [])

    const addExercise = async (exercise: Exercise) => {
        try {
            setShowAddExercise(false)
            const response = await api.addExercise(exercise)
            setExercises((prevExercises) => [...prevExercises, response.data])
        } catch (error) {
            console.error('Error adding exercise:', error)
        }
    }

    const addExerciseToWorkout = (id: number) => {
        const selectedExercise = exercises.find((exercise) => exercise.id === id)
    
        if (selectedExercise) {
            // Agrega el ejercicio seleccionado al array de ejercicios del workout
            setSelectedExercises((prevSelectedExercises) => [...prevSelectedExercises, selectedExercise])
    
            // Elimina el ejercicio seleccionado del array de ejercicios en el centro
            setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.id !== id))
        }
    }

    const deleteExercise = async (id: number) => {
        await api.deleteExercise(id)
        setExercises(exercises.filter((exercise) => exercise.id !== id))
    }

    const toggleFavorite = async (id: number) => {
        try {
            const data = await api.fetchExercise(id)
            const updExercise = { ...data, favorite: !data.favorite }
            await api.updateExercise(id, updExercise)
            setExercises((prevExercises) =>
                prevExercises.map((exercise) => (exercise.id === id ? updExercise : exercise))
            )
        } catch (error) {
            console.error('Error toggling favorite:', error)
        }
    }

    return (
        <div>
            <Header title="Workout Wizard" onAdd={() => setShowAddExercise(!showAddExercise)} showAdd={showAddExercise} />
            {showAddExercise && <AddExercise onAdd={addExercise} />}

            <div className="flex">
                {/* Sidebar de Checkboxes */}
                <CheckboxSidebar />

                {/* Listado de Ejercicios */}
                <ExercisesColumn exercises={exercises} onDelete={deleteExercise} onToggle={toggleFavorite} onAddToWorkout={addExerciseToWorkout}/>

                {/* Columna de Ejercicios Seleccionados */}
                <WorkoutColumn exercises={selectedExercises} onDelete={deleteExercise} onToggle={toggleFavorite} />
            </div>
            <Footer />

        </div>
    )
}

export default Index
