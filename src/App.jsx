import { useState } from 'react'
import InputForm from './components/InputForm'
import TaskList from './components/TaskList'

import './index.css'

function App() {

  const [tasks, setTasks] = useState([]);



  const addTask = (task) => {
    setTasks(prevState => [...prevState, task])
  }




  return (
      <div className="max-w-3xl mx-auto">
        <header className="flex justify-center text-4xl py-4">Todo List</header>
        <InputForm addTask={addTask} />
        {tasks && (
          <TaskList
            tasks={tasks}
          />
        )}
      </div>
  )
}

export default App
