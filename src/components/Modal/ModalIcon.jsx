import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModalIcon = ({ Iconimg }) => {
	const [likeClick, setLikeClick] = useState("");

	const onLikeClick = () => {
		setLikeClick((s) => (s === 1 ? "" : 1));
	};

	return Iconimg.map((i) => {
		return (
			<Link to={i.path} key={i._id}>
				<img
					src={i.value}
					className={i.className ? i.className : "icon"}
					alt="Iconimg"
					onClick={i._id === 3 ? onLikeClick : undefined}
				/>
				{i._id === 3 ? (
					<span className="iconx">{likeClick}</span>
				) : null}
			</Link>
		);
	});
};

export default ModalIcon;
