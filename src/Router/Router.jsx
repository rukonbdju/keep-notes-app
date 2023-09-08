import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import TaskList from "../Components/Tasks/TaskList/TaskList";
import Task from "../Components/Tasks/Task/Task";
import NoteList from "../Components/Notes/NoteList/NoteLIst";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"tasks",
                element:<TaskList></TaskList>
            },
            {
                path:"tasks/:id",
                element:<Task></Task>
            },
            {
                path:"notes",
                element:<NoteList></NoteList>
            },
            {
                path:"reminder",
                element:<h1>This is reminder</h1>
            },
            {
                path:"archive",
                element:<h1>This is archive</h1>
            },
            {
                path:"trash",
                element:<h1>This is Trash</h1>
            }
        ]
    },
    {
        path: "login",
        element: <h2>THis is  login</h2>,
    },
]);

export default router;