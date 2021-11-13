import React, { useState } from "react";
import logo from "../../assets/Instagram_logo.svg";
import home from "../../assets/home.PNG";
import messenger from "../../assets/messenger.PNG";
import add from "../../assets/add.PNG";
import explore from "../../assets/explore.PNG";
import like from "../../assets/like.PNG";
import pic from "../../assets/profile.png";
import "./Nav.scss";
import ProfileDropdown from "./Profile/ProfileDropdown";

const Nav = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<>
			<nav className="navbar">
				<div className="nav-wrapper">
					<img src={logo} className="brand-img" alt="img" />
					<input
						type="text"
						className="search-box"
						placeholder="search"
					/>
					<div className="nav-items">
						<img src={home} className="icon" alt="homeimg" />
						<img
							src={messenger}
							className="icon"
							alt="messengerimg"
						/>
						<img src={add} className="icon" alt="addimg" />
						<img src={explore} className="icon" alt="exploreimg" />
						<img src={like} className="icon" alt="likeimg" />
						<span>
							<img
								src={pic}
								alt="profilepic"
								className="icon userProfile "
								onClick={() => {
									setDropdown(!dropdown);
								}}
							/>
							{dropdown && <ProfileDropdown />}
						</span>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Nav;
