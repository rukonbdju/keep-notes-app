import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/Sidebar";

const MainLayout = () => {
    return (
        <>
            <div className="sticky top-0">
                <Navbar></Navbar>
            </div>
            <div className="flex">
                <aside className="sticky top-14 min-w-[250px] max-w-[300px]  h-[calc(100vh-56px)] bg-blue-500 bg-opacity-50">
                    <Sidebar></Sidebar>
                </aside>
                <main className="my-8 basis-full">
                    <div className="w-11/12 mx-auto">
                        <Outlet></Outlet>
                    </div>
                </main>
            </div>
        </>
    )
}
export default MainLayout;