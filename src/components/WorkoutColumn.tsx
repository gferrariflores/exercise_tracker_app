// components/WorkoutColumn.tsx
import React from 'react'
import SingleExercise from './Exercise.tsx'

interface Exercise {
  id: number
  name: string
  description: string
  favorite: boolean
}

interface WorkoutColumnProps {
  exercises: Exercise[]
  onDelete: (id: number) => void
  onToggle: (id: number) => void
}

const WorkoutColumn: React.FC<WorkoutColumnProps> = ({ exercises, onDelete, onToggle }) => {
  return (
    <div className="w-2/5 p-4 bg-gray-400">
      <h4 className="text-lg font-semibold mb-4">Selected Exercises Column</h4>
      {exercises.length > 0 ? (
        exercises.map((exercise) => (
          <SingleExercise key={exercise.id} exercise={exercise} onDelete={onDelete} onToggle={onToggle} />
        ))
      ) : (
        <p>No exercises to display.</p>
      )}
    </div>
  )
}

export default WorkoutColumn
