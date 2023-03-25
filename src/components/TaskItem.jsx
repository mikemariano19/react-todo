import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ task }) => {
  return (
    <div className="p-2 mt-2 text-2xl ">
        <div className="border-b-2 flex justify-between">
            <div>
              <input type="checkbox" name={task.name} id={task.id} className="ml-2 mr-4" />
              <label 
                htmlFor={task.id}
                className={styles.label}
                >
                {task.name}
                <p className={styles.checkmark}>
                  <CheckIcon strokeWidth={2} width={24} height={24} />
                </p>
              </label>
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

export default TaskItem