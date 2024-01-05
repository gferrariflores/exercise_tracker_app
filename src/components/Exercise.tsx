import React from 'react';

interface Exercise {
    id: number;
    name: string;
    description: string;
    favorite: boolean;
}

interface ExerciseProps {
    exercise: Exercise;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const Exercise: React.FC<ExerciseProps> = ({ exercise, onDelete, onToggle }) => {
    return (
        <div className={`max-w-lg rounded overflow-hidden shadow-lg my-2 mx-auto ${exercise.favorite ? 'bg-green-200' : 'bg-white'}`} onDoubleClick={()=>onToggle(exercise.id)}>
            <div className="flex justify-between items-center px-4 py-3">
                <div className="font-bold text-xl">{exercise.name}</div>
                <i className="fas fa-times text-red-500 cursor-pointer" onClick={ () => onDelete(exercise.id)}></i>
            </div>
            <div className="px-6 py-3">
                <p className="text-gray-700 text-sm">{exercise.description}</p>
            </div>
        </div>
    )
}

export default Exercise