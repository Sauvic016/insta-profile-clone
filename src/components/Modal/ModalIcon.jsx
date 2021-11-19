import React from "react";
import { Link } from "react-router-dom";

const ModalIcon = ({ Iconimg }) => {
	return Iconimg.map((i) => {
		return (
			<Link to={i.path} key={i._id}>
				<img
					src={i.value}
					className={i.className ? i.className : "icon"}
					alt="Iconimg"
				/>
			</Link>
		);
	});
};

export default ModalIcon;
