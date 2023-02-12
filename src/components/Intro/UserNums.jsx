import React from "react";

const UserNums = ({ User, className }) => {
	return (
		<ul className={className}>
			<li>
				<span className="profile-stat-count"> {User.Posts}</span> posts
			</li>
			<li>
				<span className="profile-stat-count"> {User.Followers}k </span>
				followers
			</li>
			<li>
				<span className="profile-stat-count"> {User.Following} </span>
				following
			</li>
		</ul>
	);
};

export default UserNums;
