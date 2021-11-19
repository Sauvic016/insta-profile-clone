import React from "react";
import "./Modal.scss";

const ModalIconWrapper = ({ children }) => {
	return (
		<>
			<div className="Modalicon-wrapper">
				<div className="Modaliconitems">{children}</div>
			</div>
		</>
	);
};

export default ModalIconWrapper;
