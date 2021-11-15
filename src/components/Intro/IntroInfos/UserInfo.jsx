import React from "react";
import UserNums from "./UserNums";

const UserInfo = ({ User }) => {
	return (
		<>
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
				<UserNums User={User} className="postfollowersNums" />
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
		</>
	);
};

export default UserInfo;
