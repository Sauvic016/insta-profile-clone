import React from "react";

const UserNums = ({ User, className }) => {
	return (
		<div className={className}>
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
	);
};

export default UserNums;
