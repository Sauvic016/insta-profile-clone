// import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav/Nav.jsx";
import Intro from "./components/Intro/Intro.jsx";
import Posts from "./components/Posts/Posts.jsx";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Intro />
				<Posts />
			</div>
		</Router>
	);
};

export default App;
