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
} from "./components";

function App() {
	return (
		<div>
			<Router>
				<div>
					<Navigation />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/properties" element={<Properties />}>
							<Route path="" element={<CreateEstate />} />
							<Route path="" element={<Estates />} />
							<Route path=":postSlug" element={<Estate />} />
						</Route>
						<Route path="/messages" element={<Messages />}>
							<Route path="" element={<Chats />} />
							<Route path=":chatSlug" element={<Chat />} />
						</Route>
					</Routes>
					{/* <Footer /> */}
				</div>
			</Router>
		</div>
	);
}

export default App;
