import React, { useState, useEffect } from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'




const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
      const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

      useEffect(() => {
        const closeModalIfEscaped = (e) => {
          e.key === 'Escape' && closeEditMode();
        }

        window.addEventListener('keydown', closeModalIfEscaped)

        return () => {
          window.removeEventListener('keydown', closeModalIfEscaped)
        }
      }, [closeEditMode])

      const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName})
      }


  return (
      <div
        role='dialog'
        aria-labelledby='editTask'
        onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
        className=''
      >
        <form 
        className="text-xl grid grid-cols-6 gap-2 px-2 pb-2 bg-red-300" 
        onSubmit={handleFormSubmit}
        >
        <div>
          <input 
            type="text" 
            placeholder="Update Task" 
            id="editTask"
            className="border-solid bg-gray border border-slate-300 rounded-md  md:py-2 pl-4 shadow-sm col-span-5"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
          />
          <label 
          htmlFor="editTask"
          >
            Update Task
          </label>
        </div>
          <button 
            type="submit" 
            aria-label={`Confirm edited task to now read ${updatedTaskName}`} 
            className="border border-red-300 text-red-300 hover:border-red-500 p-1 rounded-md flex justify-center"
          >
          <CheckIcon class="h-8 w-8" />
         </button>
        </form>
      </div>
  )
}

export default EditForm