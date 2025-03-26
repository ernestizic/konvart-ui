import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const DashboardLayout = () => {
	return (
		<div>
			<Sidebar />

			<div className="ml-[246px] h-screen">
				<Navbar />
				<div className="h-[calc(100vh-72px)] overflow-auto p-[32px]">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
