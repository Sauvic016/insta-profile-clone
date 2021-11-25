import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExploreIcon from "@mui/icons-material/Explore";
import TelegramIcon from "@mui/icons-material/Telegram";

import "./Modal.scss";
import ModalIconWrapper from "./ModalIconWrapper";
import ModalWrapper from "./ModalWrapper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

// const ModalImg = styled.img`
//   width: 100%;
//   height: 100%;
//   border-radius: 10px 0 0 10px;
//   background: #000;
// `;

// const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   line-height: 1.8;
//   color: #141414;
//   p {
//     margin-bottom: 1rem;
//   }
//   button {
//     padding: 10px 24px;
//     background: #141414;
//     color: #fff;
//     border: none;
//   }
// `;

const Modal = ({ setOpenModal, lsrc, desc, isrc }) => {
	const detailOfImage = { isrc: isrc, lsrc: lsrc, desc: desc };
	let saved = [];
	const details = JSON.parse(localStorage.getItem("filetoJson"));
	if (details) {
		saved = [...details, detailOfImage];
	} else {
		saved.push(detailOfImage);
	}
	const newJsonDetailImg = JSON.stringify(saved);

	const onSaveClick = () => {
		// const filetoJson = JSON.stringify(file);
		localStorage.setItem("filetoJson", newJsonDetailImg);
	};

	return (
		<ModalWrapper setModal={setOpenModal}>
			{/* <div className="infoandimg"> */}
			<img src={lsrc} alt="" className="modalImage" />
			<div className="description">
				<span
					className="closedButton"
					onClick={() => setOpenModal(false)}
				>
					X
				</span>
				<p>{desc}</p>

				<hr />
				<ModalIconWrapper>
					<TelegramIcon className="icon" />
					<ExploreIcon className="icon" />
					<FormControlLabel
						className="icon"
						control={
							<Checkbox
								icon={<FavoriteBorder />}
								checkedIcon={<Favorite />}
								name="checkedH"
							/>
						}
					/>

					<FormControlLabel
						className="icon "
						control={
							<Checkbox
								icon={<BookmarkBorderIcon />}
								checkedIcon={<BookmarkIcon />}
								color={"default"}
								onClick={() => onSaveClick()}
							/>
						}
					/>
				</ModalIconWrapper>
			</div>
			{/* </div> */}
		</ModalWrapper>
	);
};

export default Modal;
