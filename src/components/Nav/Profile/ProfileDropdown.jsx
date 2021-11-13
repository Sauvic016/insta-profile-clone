import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProfileDropdown.scss";

const dropdownOptions = [
	{ id: 1, value: "Profile", path: "./profile" },
	{ id: 2, value: "Saved", path: "./saved" },
	{ id: 3, value: "settings", path: "./settings" },
	{ id: 4, value: "Log Out", path: "./logout" },
];

const ProfileDropdown = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<ul
				className={
					dropdown ? "DropdownSubmenu clicked" : "DropdownSubmenu"
				}
				onClick={() => {
					setDropdown(!dropdown);
				}}
			>
				{dropdownOptions.map((el) => {
					return (
						<li key={el.id}>
							<Link
								to={el.path}
								className="SubmenuItem"
								onClick={() => {
									setDropdown(false);
								}}
							>
								{el.value}
							</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
};
export default ProfileDropdown;
