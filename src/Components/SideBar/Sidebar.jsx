import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="p-2 bg-slate-700  h-[calc(100vh-56px)]">
            <ul className="flex flex-col gap-2">
                <li className="px-2 py-1 bg-slate-500 bg-opacity-50 rounded-full">
                    <Link to={'/tasks'}>Tasks</Link>
                </li>
                <li className="px-2 py-1 bg-slate-500 bg-opacity-50 rounded-full">
                    <Link to={'/notes'}>Notes</Link>
                </li>
                <li className="px-2 py-1 bg-slate-500 bg-opacity-50 rounded-full">
                    <Link to={'/reminder'}>Reminder</Link>
                </li>
                <li className="px-2 py-1 bg-slate-500 bg-opacity-50 rounded-full">
                    <Link to={'/archive'}>Archive</Link>
                </li>
                <li className="px-2 py-1 bg-slate-500 bg-opacity-50 rounded-full">
                    <Link to={'/trash'}>Trash</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;