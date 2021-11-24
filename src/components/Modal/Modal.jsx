import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExploreIcon from "@mui/icons-material/Explore";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Modal.scss";
import ModalIconWrapper from "./ModalIconWrapper";
import ModalWrapper from "./ModalWrapper";

const Modal = ({ setOpenModal, lsrc, desc, isrc }) => {
	const pink = "	#FF69B4	";
	const black = "#000";
	const blue = "#22CDF0";
	const [likeColor, setLikeColor] = useState(black);
	const [savedColor, setSavedColor] = useState(black);
	const [likeClick, setLikeClick] = useState("");

	const detailOfImage = [isrc, lsrc, desc];
	const newJsonDetailImg = JSON.stringify(detailOfImage);

	const onSaveClick = (file) => {
		const filetoJson = JSON.stringify(file);
		localStorage.setItem(filetoJson, newJsonDetailImg);
		// console.log(filetoJson);
		setSavedColor((newColor) => (newColor === black ? blue : black));
	};

	const onLikeClick = () => {
		setLikeClick((s) => (s === 1 ? "" : 1));
		setLikeColor((newColor) => (newColor === black ? pink : black));
	};

	return (
		<ModalWrapper>
			<button onClick={() => setOpenModal(false)}>X</button>

			<div className="infoandimg">
				<img src={lsrc} alt="" className="modalImage" />

				<div className="description">
					<p>{desc}</p>

					<hr />
					<ModalIconWrapper>
						<TelegramIcon className="icon" />
						<ExploreIcon className="icon" />
						<FavoriteIcon
							className="icon"
							onClick={onLikeClick}
							sx={{ color: likeColor }}
						/>
						<span className="iconx">{likeClick}</span>
						<BookmarkIcon
							onClick={() => onSaveClick(isrc)}
							className="lefticon"
							sx={{ color: savedColor }}
						/>
					</ModalIconWrapper>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default Modal;
