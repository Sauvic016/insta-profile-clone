import React, { useState } from "react";
import { Link } from "react-router-dom";
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
					<Link to="/home">
						<img src={logo} className="brand-img" alt="img" />
					</Link>
					<input
						type="text"
						className="search-box"
						placeholder="search"
					/>
					<div className="nav-items">
						<Link to="/home">
							{" "}
							<img src={home} className="icon" alt="homeimg" />
						</Link>
						<Link to="/messages">
							<img
								src={messenger}
								className="icon"
								alt="messengerimg"
							/>
						</Link>
						<img src={add} className="icon" alt="addimg" />
						<Link to="/explore">
							<img
								src={explore}
								className="icon"
								alt="exploreimg"
							/>
						</Link>
						<Link to="/liked">
							<img src={like} className="icon" alt="likeimg" />
						</Link>
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
