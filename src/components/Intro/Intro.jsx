import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import pic from "../../assets/profile.png";
import "./Intro.css";
import UserInfo from "./IntroInfos/UserInfo";
import Stories from "../StoriesFeed/StoryX";
const User = {
	Name: "UserName_digit",
	Posts: 163,
	Followers: 14,
	Following: 512,
	Description: [
		{ id: 1, value: `Sauvic` },
		{ id: 2, value: `Hey!!! Im cloning Insta profile page with react` },
		{ id: 3, value: `Sorry, I forgot to ask, How are you?` },
		{ id: 4, value: `Follow me to see my journey` },
	],
};

const Intro = () => {
	const [storiesOpen, setStoriesOpen] = useState(false);

	// const history = useHistory();
	// const redirectTostories = () => {
	// 	history.push("/stories");
	// };
	return (
		<div className="Intro">
			<div className="profile">
				<div className="profile-image">
					<div className="profileBackground">
						<img
							src={pic}
							alt="profilepic"
							onClick={() => {
								setStoriesOpen(true);
							}}
						/>
					</div>
				</div>
				<UserInfo User={User} />
			</div>
			{storiesOpen && <Stories setStories={setStoriesOpen} />}
		</div>
	);
};

export default Intro;
