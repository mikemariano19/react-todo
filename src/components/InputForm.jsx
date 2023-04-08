import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'




const InputForm = ({ addTask }) => {
      const [task, setTask] = useState('');

      const handleFormSubmit = (e) => {
        e.preventDefault();
        addTask({
          name: task,
          checked: false,
          id: Date.now()
        })
        setTask('')
      }
  


  return (
      <form 
        className="text-xl grid grid-cols-6 gap-2 px-2 pb-2" 
        onSubmit={handleFormSubmit}
      >
        <input 
          type="text" 
          placeholder="Enter Task" 
          id="task"
          className="border-solid bg-gray border border-slate-300 rounded-md  md:py-2 pl-4 shadow-sm col-span-5"
          value={task}
          onInput={(e) => setTask(e.target.value)}
          required
          autoFocus
          maxLength={60}
        />
          <button 
            type="submit" 
            aria-label='Add Task' 
            className="border border-red-300 text-red-300 hover:border-red-500 p-4 rounded-md flex justify-center"
          >
          <PlusIcon class="h-8 w-8" />
        </button>
      </form>
    
  )
}

export default InputForm