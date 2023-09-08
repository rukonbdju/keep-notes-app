import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="p-2">
            <div className="flex flex-col gap-2">
                <Link to={'/tasks'}>
                    <button className="px-2 w-full py-1 bg-slate-700 bg-opacity-50 rounded-full active:scale-75 transition-all">
                        Tasks</button>
                </Link>

                <Link to={'/notes'}>
                    <button className="px-2 w-full py-1 bg-slate-700 bg-opacity-50 rounded-full active:scale-75 transition-all">
                        Notes</button>
                </Link>

                <Link to={'/reminder'}>
                    <button className="px-2 w-full py-1 bg-slate-700 bg-opacity-50 rounded-full active:scale-75 transition-all">
                        Reminder</button>
                </Link>

                <Link to={'/archive'}>
                    <button className="px-2 w-full py-1 bg-slate-700 bg-opacity-50 rounded-full active:scale-75 transition-all">
                        Archive</button>
                </Link>

                <Link to={'/trash'}>
                    <button className="px-2 w-full py-1 bg-slate-700 bg-opacity-50 rounded-full active:scale-75 transition-all">
                        Trash</button>
                </Link>

            </div>
        </div>
    )
}

export default Sidebar;