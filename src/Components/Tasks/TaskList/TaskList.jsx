import { useState } from "react";
import Task from "../Task/Task";
import Modal from "../../Common/Modals/Modal";

const TaskList = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    let tasks = [
        { id: 1, text: 'I have to read' },
        { id: 2, text: 'I have to read' },
        { id: 3, text: 'I have to read' },
        { id: 4, text: 'I have to read' },
    ]
    return (
        <div>
            <div className="flex flex-row justify-between mb-3">
                <h1 className="text-3xl text-slate-300">Tasks</h1>
                <div>
                    <button onClick={() => (setIsOpenModal(true))} className="text-xl p-1 rounded-md bg-slate-300"><span className="inline text-2xl">+</span> Add Task</button>
                </div>
            </div>
            {isOpenModal && <div>
                <div className="p-2 bg-slate-500 rounded-lg">
                    <p className="text-xl">Add new task</p>
                    <textarea className="p-1 outline-none w-full bg-slate-500 text-xl" placeholder="Write task" name="" id="" rows="2"></textarea>
                    <div className="flex justify-end">

                    <button className="px-6 py-1 bg-slate-700 rounded-full">Add</button>
                    </div>
                </div>
            </div>}
            <section className="grid grid-cols-3 my-3 gap-2">
                {
                    tasks.map((task) => <Task key={task.id} task={task}></Task>)
                }
            </section>

        </div>
    )
}

export default TaskList;