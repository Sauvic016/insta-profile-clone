import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Stories from "./components/StoriesFeed/Story.jsx";
import Profile from "./pages/Profile.js";

const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Profile />
					</Route>
					{/* <Route path="/stories">
						<Stories />
					</Route> */}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
