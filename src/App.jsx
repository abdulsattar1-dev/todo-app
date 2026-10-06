import { useState } from 'react'
import './App.css'

function App() {
  // The text in the input box
  const [task, setTask] = useState('')

  // The list of all tasks
  const [tasks, setTasks] = useState([])

  // Add a new task
  function addTask() {
    if (task.trim() === '') return
    setTasks([...tasks, { text: task, done: false }])
    setTask('')
  }

  // Mark a task as done or not done
  function toggleTask(index) {
    const newTasks = [...tasks]
    newTasks[index].done = !newTasks[index].done
    setTasks(newTasks)
  }

  // Delete a task
  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  // Count the tasks that are done
  const doneCount = tasks.filter((t) => t.done).length

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', padding: '20px' }}>
      <h1 style={{ fontSize: '40px', lineHeight: '1.2' }}>Abdul Sattar's Tasks</h1>
      <p>
        Done: {doneCount} / {tasks.length}
      </p>

      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          placeholder="Write a new task..."
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 0',
              borderBottom: '1px solid #ccc',
            }}
          >
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTask(index)}
            />
            <span
              style={{
                flex: 1,
                textDecoration: t.done ? 'line-through' : 'none',
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks yet. Add your first task! 🚀</p>}
    </div>
  )
}

export default App