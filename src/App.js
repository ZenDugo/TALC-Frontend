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
} from "./components";

function App() {
	return (
		<div>
			<Router>
				<Navigation />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/properties" element={<Properties />}>
						<Route path="" element={<Estates />} />
						<Route path=":postSlug" element={<Estate />} />
					</Route>
					<Route path="/messages" element={<Messages />}>
						<Route path="" element={<Chats />} />
						<Route path=":chatSlug" element={<Chat />} />
					</Route>
				</Routes>

				<Footer />
			</Router>
		</div>
	);
}

export default App;
