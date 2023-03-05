import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const TodoItems = () => {
  return (
    <div className="p-2 mt-2 text-2xl ">
        <div className="border-b-2 flex justify-between">
            <div>
              <input type="checkbox" name="" id="" className="ml-2 mr-4" />
              <span>TodoItems</span>
            </div>
            <div className="">
              <button className=" rounded p-1 text-blue-500">
                <PencilIcon className='h-8 w-8'/>
              </button>
              <button className=" p-1 text-red-500 ml-1">
                <TrashIcon className='h-8 w-8'/>
              </button>
            </div>
        </div>
        
    </div>
  )
}

export default TodoItems