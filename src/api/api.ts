// api/api.ts
const apiUrl = import.meta.env.VITE_API_URL // Obtén la URL de la API desde las variables de entorno

interface Exercise {
    id: number
    name: string
    description: string
    favorite: boolean
}

// Función para obtener todos los ejercicios
export const fetchExercises = async () => {
    const res = await fetch(`${apiUrl}/exercise`)
    const data = await res.json()
    return data
}

// Función para obtener un ejercicio específico por ID
export const fetchExercise = async (id: number) => {
    const res = await fetch(`${apiUrl}/exercise/${id}`)
    const data = await res.json()
    return data
}

// Función para agregar un nuevo ejercicio
export const addExercise = async (exercise: Exercise) => {
    try {
        const res = await fetch(`${apiUrl}/exercise`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(exercise)
        })

        const data = await res.json()

        return data
    } catch (error) {
        console.error('Error adding exercise:', error)
        throw error // Puedes manejar el error aquí o dejar que se propague
    }
}

// Función para eliminar un ejercicio por ID
export const deleteExercise = async (id: number) => {
    await fetch(`${apiUrl}/exercise/${id}`, {
        method: 'DELETE'
    })
}

// Función para actualizar un ejercicio
export const updateExercise = async (id: number, updatedExercise: Exercise) => {
    const res = await fetch(`${apiUrl}/exercise/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedExercise)
    })

    const data = await res.json()
    return data
}
