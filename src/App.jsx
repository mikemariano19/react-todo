import { useState } from 'react'
import InputForm from './components/InputForm'
import EditForm from './components/EditForm'
import TaskList from './components/TaskList'

import './index.css'

function App() {

  const [tasks, setTasks] = useState([]);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditting, setIsEditting] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(false)



  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id !== id))
  }

  const toggleTasks = (id) => {
    setTasks(prevState => prevState.map(t => (
      t.id === id
      ? { ...t, checked: !t.checked}
      : t
    )))
  }

  const updateTask = (task) => {
    setTasks(prevState => prevState.map(t => (
      t.id === task.id
      ? { ...t, name: task.name}
      : t
    )))
    closeEditMode();
  }

  const closeEditMode = () => {
    setIsEditting(false);
    previousFocusEl.focus();
  }

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditting(true);
    setPreviousFocusEl(document.activeElement);
  }


  return (
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-center text-4xl py-4">Todo List</header>
        {
          isEditting && (
            <EditForm 
              editedTask={editedTask}
              updateTask={updateTask}
              closeEditMode={closeEditMode}
            />
          )
        }
        <InputForm addTask={addTask} />
        {tasks && (
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTasks={toggleTasks}
            enterEditMode={enterEditMode}
          />
        )}
      </div>
  )
}

export default App
