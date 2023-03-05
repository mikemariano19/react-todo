import React from 'react'
import { PlusIcon } from '@heroicons/react/20/solid'

const InputForm = () => {
  return (
    
      <form className="text-xl grid grid-cols-6 gap-2 px-2 pb-2">
        <input type="text" placeholder="Add ToDo" className="border-solid bg-gray border border-slate-300 rounded-md  md:py-2 pl-4 shadow-sm col-span-5" />
        <button type="submit" className="btn btn-primary bg-blue-500 hover:bg-blue-600 p-4 rounded-md text-white flex justify-center" >
          <PlusIcon class="h-8 w-8" />
        </button>
      </form>
    
  )
}

export default InputForm