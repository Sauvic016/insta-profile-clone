import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../components/Nav/Nav.jsx";
import Intro from "../components/Intro/Intro.jsx";
import Posts from "../components/Posts/PostX.jsx";
const Profile = () => {
	return (
		<>
			<Nav />
			<Intro />
			<Posts />
		</>
	);
};

export default Profile;
