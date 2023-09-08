import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Common/Navbar/Navbar";
import Sidebar from "../../Components/SideBar/Sidebar";

const MainLayout = () => {
    return (
        <>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="flex flex-row">
                <aside className="sticky top-14 overflow-auto min-w-[250px] max-w-[300px] basis-1/4">
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