import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home"

const RoutesComponent = () => (
	<BrowserRouter>
		<Routes>
			<Route path={"/"}
				element={<Home></Home>}/>
			<Route path={"/home"}
				element={<Home></Home>}/>
			<Route path={"/economy"}
				element={<Home></Home>}/>
			<Route path={"/science"}
				element={<Home></Home>}/>
			<Route path={"/education"}
				element={<Home></Home>}/>
		</Routes>
			
	</BrowserRouter>
) 
export default RoutesComponent;

