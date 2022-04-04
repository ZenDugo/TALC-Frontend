import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
	Navigation,
	Footer,
	Dashboard,
	Properties,
	Estate,
	Estates,
	Chat,
	Chats,
	Messages,
	CreateEstate,
	Login,
	Register,
	Reset,
} from "./components";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/reset" element={<Reset />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/properties" element={<Properties />}>
						<Route path="" element={<Estates />} />
						<Route path=":postSlug" element={<Estate />} />
					</Route>
					<Route path="/properties/create" element={<CreateEstate />} />
					<Route path="/messages" element={<Messages />}>
						<Route path="" element={<Chats />} />
						<Route path=":chatSlug" element={<Chat />} />
					</Route>
				</Routes>
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
