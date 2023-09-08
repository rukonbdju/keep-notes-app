
const Task = ({ task }) => {

    return (
        <div className="p-2 rounded-lg bg-slate-500 opacity-50">
            <div className="flex flex-col divide-y">
                <div>
                    <p className="text-xl">This is task Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt enim modi accusantium. {task?.id}</p> 
                </div>
                <div className="flex flex-row items-center justify-between">
                <input className="text-2xl" type="checkbox" name="task" id="task" />
                <div className="flex flex-row justify-end gap-2">
                    <span>Trash</span>
                    <span>Archive</span>
                    <span>Edit</span>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Task;