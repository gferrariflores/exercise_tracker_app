import React from 'react';
import SingleExercise from './Exercise.tsx'

interface Exercise {
  id: number;
  name: string;
  description: string;
  favorite: boolean;
}

interface ExerciseProps {
    exercises?: Exercise[]; // El título es opcional
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const Exercises: React.FC<ExerciseProps> = ({ exercises = [], onDelete, onToggle }) => {

    return (
        <>
            {exercises.map((exercise) => (
                <SingleExercise key={exercise.id} exercise={exercise} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Exercises