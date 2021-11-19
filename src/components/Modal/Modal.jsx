import React from "react";
import messenger from "../../assets/messenger.PNG";
import bookmark from "../../assets/bookmark.svg";
import explore from "../../assets/explore.PNG";
import like from "../../assets/like.PNG";

import "./Modal.scss";
import ModalIcon from "./ModalIcon";
import ModalIconWrapper from "./ModalIconWrapper";
import ModalWrapper from "./ModalWrapper";

const Modal = ({ setOpenModal, lsrc, desc }) => {
	const Iconimg = [
		{ _id: 1, value: messenger, path: "/messages" },
		{ _id: 2, value: explore, path: "/explore" },
		{ _id: 3, value: like, path: "/likes" },
		{
			_id: 4,
			value: bookmark,
			path: "/bookmarks",
			className: "lefticon",
		},
	];

	return (
		<ModalWrapper>
			<button onClick={() => setOpenModal(false)}>X</button>

			<div className="infoandimg">
				<img src={lsrc} alt="" className="modalImage" />

				<div className="description">
					<p>{desc}</p>

					<hr />
					<ModalIconWrapper>
						<ModalIcon Iconimg={Iconimg} />
					</ModalIconWrapper>
				</div>
			</div>
		</ModalWrapper>
	);
};

export default Modal;
