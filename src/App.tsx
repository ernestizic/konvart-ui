import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Overview from "@/pages/keywordOverview/Overview";
import ContentPage from "@/pages/content/Content";

function App() {

  return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<DashboardLayout />}>
					<Route index element={<Navigate to="/keyword-research/keyword-overview" />} />
					<Route path="/keyword-research" element={<Navigate to="/keyword-research/keyword-overview" />} />
					<Route path="/keyword-research/keyword-overview" element={<Overview />} />
					<Route path="/keyword-research/keyword-ideas" element={<ContentPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export default App
