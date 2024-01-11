// pages/Home.tsx
import React, { useState, useEffect } from 'react'
import * as api from '../api/api'
import Header from '../components/Header'
import Exercises from '../components/Exercises'
import AddExercise from '../components/AddExercise'

interface Exercise {
    id: number
    name: string
    description: string
    favorite: boolean
}

interface HomeProps {
    // Puedes agregar propiedades específicas de Home si es necesario
}

const Home: React.FC<HomeProps> = () => {
    const [exercises, setExercises] = useState<Exercise[]>([])
    const [showAddExercise, setShowAddExercise] = useState(false)

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

    const deleteExercise = async (id: number) => {
        await api.deleteExercise(id);
        setExercises(exercises.filter((exercise) => exercise.id !== id));
    };

    const toggleFavorite = async (id: number) => {
        try {
            const data = await api.fetchExercise(id);
            const updExercise = { ...data, favorite: !data.favorite };
            await api.updateExercise(id, updExercise);
            setExercises((prevExercises) =>
                prevExercises.map((exercise) => (exercise.id === id ? updExercise : exercise))
            );
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    return (
        <div>
            <Header title="Workout Wizard" onAdd={() => setShowAddExercise(!showAddExercise)} showAdd={showAddExercise} />
            {showAddExercise && <AddExercise onAdd={addExercise} />}
            {exercises.length > 0 ? (
                <Exercises exercises={exercises} onDelete={deleteExercise} onToggle={toggleFavorite} />
            ) : (
                'No Exercises to show'
            )}
        </div>
    );
};

export default Home;
