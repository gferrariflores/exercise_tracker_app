// CheckboxSidebar.tsx
const CheckboxSidebar = () => {
  // Ejemplo de lista de tags
  const tags = ['Cardio', 'Strength Training', 'Flexibility', 'HIIT', 'Yoga']

  return (
    <div className="w-1/5 p-4 bg-gray-200">
      <h4 className="text-lg font-semibold mb-4">Filter by Tags</h4>
      <div>
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" id={`tag-${index}`} className="mr-2" />
            <label htmlFor={`tag-${index}`}>{tag}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheckboxSidebar
