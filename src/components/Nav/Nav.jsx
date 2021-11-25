import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Instagram_logo.svg";

import HomeIcon from "@mui/icons-material/Home";
import InboxIcon from "@mui/icons-material/Inbox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteIcon from "@mui/icons-material/Favorite";
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
							{/* <img src={home} className="icon" alt="homeimg" /> */}
							<HomeIcon sx={{ color: "#000" }} className="icon" />
						</Link>
						<Link to="/messages">
							{/* <img
								src={messenger}
								className="icon"
								alt="messengerimg"
							/> */}
							<InboxIcon
								sx={{ color: "#000" }}
								className="icon"
								fontSize="large"
							/>
						</Link>
						<AddBoxIcon
							sx={{ color: "#000" }}
							className="icon"
							fontSize="large"
						/>
						<Link to="/explore">
							{/* <img
								src={explore}
								className="icon"
								alt="exploreimg"
							/> */}
							<ExploreIcon
								sx={{ color: "#000" }}
								className="icon"
								fontSize="large"
							/>
						</Link>
						<Link to="/liked">
							<FavoriteIcon
								sx={{ color: "#000" }}
								className="icon"
								fontSize="large"
							/>
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
