import React from "react";
import ReactRoundedImage from "react-rounded-image";
import pic from "../../assets/profile.png";
import "./Intro.scss";

const Intro = () => {
	return (
		<div className="Intro">
			<div className="roundedImage">
				<ReactRoundedImage
					image={pic}
					roundedColor="#321124"
					imageWidth="160"
					imageHeight="160"
					roundedSize="13"
					hoverColor="#DD1144"
				/>
			</div>
			<div className="textDisplay">
				<div>
					<h2 className="heading">UserName_digit</h2>
					<span className="buttonsGroup">
						<button>Edit Profile</button>
						<button>...</button>
					</span>
				</div>
				<div className="postfollowersNums">
					<span>
						<b>163</b> posts
					</span>
					<span>
						<b>14k</b> followers
					</span>
					<span>
						<b>512</b> following
					</span>
				</div>
				<div>
					<b>Sauvic</b>
					<p>Hey!!! Im cloning Insta profile page with react</p>
					<p>Sorry, I forgot to ask how are you? </p>
					<p> some random Icons</p>
					<p>Follow me to see my journey</p>
				</div>
			</div>
		</div>
	);
};

export default Intro;
