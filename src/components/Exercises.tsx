import React from 'react';
import SingleExercise from './Exercise.tsx';

interface Exercise {
    id: number;
    name: string;
    description: string;
    favorite: boolean;
}

interface ExercisesProps {
    exercises?: Exercise[]; // El array de ejercicios es opcional
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    onAddToWorkout?: (id: number) => void; // Función opcional
}

const Exercises: React.FC<ExercisesProps> = ({ exercises = [], onDelete, onToggle, onAddToWorkout }) => {
    return (
        <>
            {exercises.map((exercise) => (
                <SingleExercise key={exercise.id} exercise={exercise} onDelete={onDelete} onToggle={onToggle} onAddToWorkout={onAddToWorkout} />
            ))}
        </>
    );
};

export default Exercises;
