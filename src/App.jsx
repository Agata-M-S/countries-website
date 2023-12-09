import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { Countries } from "./pages/Countries";

function App() {
  
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/countries" element={<Countries />} />
        <Route path="this will be cities path linking to the cities page" />
			</Routes>
		</>
	);
}

export default App;
