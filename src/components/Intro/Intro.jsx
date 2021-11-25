import React from "react";
// import ReactRoundedImage from "react-rounded-image";
import pic from "../../assets/profile.png";
import "./Intro.css";
import UserInfo from "./IntroInfos/UserInfo";

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
	return (
		<div className="Intro">
			<div className="profile">
				<div className="profile-image">
					{/* <ReactRoundedImage
						image={pic}
						roundedColor="#200a9c"
						imageWidth="160"
						imageHeight="160"
						roundedSize="13"
						hoverColor="#0fc2e2"
					/> */}
					<img src={pic} alt="profilepic" />
				</div>
				<UserInfo User={User} />
			</div>
		</div>
	);
};

export default Intro;
