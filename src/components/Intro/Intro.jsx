import React from "react";
import ReactRoundedImage from "react-rounded-image";
import pic from "../../assets/profile.png";
import "./Intro.scss";

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
			<div className="roundedImage">
				<ReactRoundedImage
					image={pic}
					roundedColor="#200a9c"
					imageWidth="160"
					imageHeight="160"
					roundedSize="13"
					hoverColor="#0fc2e2"
				/>
			</div>
			<div className="textDisplay">
				<div>
					<h2 className="heading">{User.Name}</h2>
					<span className="buttonsGroup">
						<button className="btn profile-edit-btn">
							Edit Profile
						</button>
						<button className="btn">
							<i className="fas fa-cog" aria-hidden="true"></i>
						</button>
					</span>
				</div>
				<br />
				<div className="postfollowersNums">
					<span>
						<b> {User.Posts}</b> posts
					</span>
					<span>
						<b> {User.Followers}k</b> followers
					</span>
					<span>
						<b> {User.Following}</b> following
					</span>
				</div>
				<br />
				<div>
					{User.Description.map((el) => {
						return (
							<div key={el.id}>
								<p>{el.value}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Intro;
