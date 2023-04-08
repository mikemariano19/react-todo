import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckBoxChange = (e) => {
    setIsChecked(!isChecked)
    toggleTask(task.id)
  }


  return (
    <div className="p-2 mt-2 text-2xl">
        <div className="border-b-2 flex justify-between">
            <div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckBoxChange}
                name={task.name} 
                id={task.id} 
                className="ml-2 mr-4" 
              />
              <label
                htmlFor={task.id}
              >
                {task.name}
              </label>
            </div>
            <div className=""> 
              <button 
              aria-label={`Update ${task.name} Task`}
              onClick={() => enterEditMode(task)}
              className=" rounded p-1 text-blue-500"
              >
                <PencilIcon className='h-8 w-8'/>
              </button>

              <button 
              aria-label={`Delete ${task.name} Task`}
              onClick={()=> deleteTask(task.id)}
              className=" p-1 text-red-500 ml-1"
              >
                <TrashIcon className='h-8 w-8'/>
              </button>
            </div>
        </div>
        
    </div>
  )
}

export default TaskItem