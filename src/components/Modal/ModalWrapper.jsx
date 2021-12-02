import React from "react";

const ModalWrapper = ({ children }) => {
	return (
		<div className="modalBackground">
			<div className="modalContainer">{children}</div>
		</div>
	);
};

export default ModalWrapper;
