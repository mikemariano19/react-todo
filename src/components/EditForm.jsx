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
      <div className='fixed inset-0 z-50 flex items-center bg-gray-800/50'
          role='dialog'
          aria-labelledby='editTask'
          onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
      >
          <div
          className='flex justify-center rounded items-center drop-shadow-2xl m-auto bg-[#1E293B]/75 w-[600px] h-[350px]'
          >
          <form 
          className="text-3xl px-4" 
          onSubmit={handleFormSubmit}
          >
          <div className='grid grid-cols-6 gap-2'>
          <label 
            htmlFor="editTask"
            className='text-gray-100 col-span-6'
            >
              Update Task
            </label>
            <input 
              type="text" 
              placeholder="Update Task" 
              id="editTask"
              className="border-solid bg-gray border border-slate-300 rounded-md h-20 w-full  md:py-2 pl-4 shadow-sm col-span-6 md:col-span-5 uppercase"
              value={updatedTaskName}
              onInput={(e) => setUpdatedTaskName(e.target.value)}
              required
              autoFocus
              maxLength={60}
            />
            
          
            <button 
              type="submit" 
              aria-label={`Confirm edited task to now read ${updatedTaskName}`} 
              className="bg-blue-500 w-full text-white hover:border-red-500 w-20 h-20 p-8 rounded-md flex justify-center col-span-6 md:col-span-1 flex items-center"
            >
              <CheckIcon class="h-8 w-8" />
            </button>
          </div>
          </form>
        </div>
      </div>
      
  )
}

export default EditForm