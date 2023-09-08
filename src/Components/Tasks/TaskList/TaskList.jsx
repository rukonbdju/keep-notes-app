import { useState } from "react";
import Task from "../Task/Task";
import TextInput from "../../Common/TextInput/TextInput";

const TaskList = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    let tasks = [
        { id: 1, text: 'I have to read' },
        { id: 2, text: 'I have to read' },
        { id: 3, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
    ]
    return (
        <div>
            <div className="flex flex-row justify-between mb-3">
                <h1 className="text-3xl">Tasks</h1>
                <div>
                    <button onClick={() => (setIsOpenModal(!isOpenModal))} className="text-xl p-1 rounded-md bg-slate-300"><span className="inline text-2xl">+</span> Add Task</button>
                </div>
            </div>
            {isOpenModal && <TextInput label={'Add new task'} buttonText={'Add'} placeholder={'Write task'}></TextInput>}
            <section className="grid grid-cols-3 my-3 gap-2">
                {
                    tasks.map((task) => <Task key={task.id} task={task}></Task>)
                }
            </section>

        </div>
    )
}

export default TaskList;