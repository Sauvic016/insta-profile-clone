import React from "react";
import UserNums from "./UserNums";

const UserInfo = ({ User }) => {
	return (
		<>
			<div className="textDisplay">
				<div className="profile-user-settings">
					<h2 className="profile-user-name">{User.Name}</h2>

					<button className="btn profile-edit-btn">
						Edit Profile
					</button>
					<button className=" btn profile-settings-btn">
						<i className="fas fa-cog" aria-hidden="true"></i>
					</button>
				</div>
				<br />
				<UserNums User={User} className="profile-stats" />
				<br />
				<div className="profile-bio ">
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
