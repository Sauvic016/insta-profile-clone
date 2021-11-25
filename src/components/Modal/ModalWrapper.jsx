import React from "react";

const ModalWrapper = ({ children, setModal }) => {
	return (
		<div className="modalBackground" onClick={() => setModal(false)}>
			<div className="modalContainer">{children}</div>
		</div>
	);
};

export default ModalWrapper;
