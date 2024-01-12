import React from 'react'
import Button from './Button.tsx'

interface Exercise {
    id: number
    name: string
    description: string
    favorite: boolean
}

interface ExerciseProps {
    exercise: Exercise
    onDelete: (id: number) => void
    onToggle: (id: number) => void
    onAddToWorkout?: (id: number) => void
}

const Exercise: React.FC<ExerciseProps> = ({ exercise, onDelete, onToggle, onAddToWorkout }) => {

    const btnClicked = () => {
        console.log('btnClicked')
        if (onAddToWorkout) {
            onAddToWorkout(exercise.id)
        }
    }

    return (
        <div className={`max-w-lg overflow-hidden shadow-lg my-2 mx-auto ${exercise.favorite ? 'bg-green-200' : 'bg-white'}`} onDoubleClick={() => onToggle(exercise.id)}>
            <div className="flex justify-between items-center px-4 py-3">
                <div className="font-bold text-xl">{exercise.name}</div>
                <i className="fas fa-times text-red-500 cursor-pointer" onClick={() => onDelete(exercise.id)}></i>
            </div>
            <div className="px-6 py-3 hidden">
                <p className="text-gray-700 text-sm">{exercise.description}</p>
            </div>
            <div className="px-6 py-3">
                <span className="inline-flex me-1 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
                <span className="inline-flex me-1 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
                <span className="inline-flex me-1 items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Badge</span>
            </div>
            <div className="flex justify-end px-6 py-4">
                <Button color={'blue'} text='Move to Workout' onClick={btnClicked} />
            </div>
        </div>
    )
}

export default Exercise