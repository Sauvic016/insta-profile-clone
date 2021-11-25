import React, { useState } from "react";

import Loader from "react-loader-spinner";
import Modal from "../../components/Modal/Modal";

import "./Posts.scss";

const PostImg = ({ src, alt, loading, desc, lSrc, className }) => {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<>
			{loading && (
				<div className="loadSpinner">
					<Loader
						type="TailSpin"
						color="#00BFFF"
						height={100}
						width={100}
						timeout={3000}
						visible={loading}
					/>
				</div>
			)}
			{modalOpen && (
				<Modal
					setOpenModal={setModalOpen}
					lsrc={lSrc}
					desc={desc}
					isrc={src}
				/>
			)}
			<img
				src={src}
				alt={alt}
				className={className}
				onClick={() => {
					setModalOpen(true);
				}}
				// style={{ width: "12.43rem", height: "15.43rem" }}
			/>
		</>
	);
};

export default PostImg;
