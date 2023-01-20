import React, { useState } from "react"

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formValues, setFormValues] = useState({ text: "", category: "" })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value })
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    onTaskFormSubmit(formValues)
    setFormValues({ text: "", category: "" })
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formValues.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formValues.category}
          onChange={handleChange}
        >
          {categories.map((category, index) => (
            category !== "All" && (
              <option key={index} value={category}>
                {category}
              </option>
            )
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm



