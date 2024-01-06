import React, { useState, FormEvent } from 'react';

interface Exercise {
    id: number;
    name: string;
    description: string;
    favorite: boolean;
}

interface AddExerciseProps {
    onAdd: (exercise: Exercise) => void;
}

const AddExercise: React.FC<AddExerciseProps> = ({ onAdd }) => {
    const [name, setName] = useState ('')
    const [description, setDescription] = useState ('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!name) {
            alert('Please add a name')
            return
        }
        // onAdd({ name, description})

        const newExercise: Exercise = {
            id: Date.now(), // se sobreescribe
            name,
            description,
            favorite: false, // Assuming default value for favorite is false
        };

        onAdd(newExercise);

        setName('')
        setDescription('')
    }
 
    return (
        <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Exercise Name
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Add Exercise Name"
                    value={name}
                    onChange= {(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Add Description"
                    value={description}
                    onChange= {(e) => setDescription(e.target.value)}
                />
            </div>
            <input
                className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                type="submit"
                value="Save Exercise"
            />
        </form>
    )
}

export default AddExercise