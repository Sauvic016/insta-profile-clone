import React from "react";

const PostWrapper = (props) => {
	return (
		<div className="gallery">
			<div className="gallery-item" tabIndex="0">
				{props.children}
			</div>
		</div>
	);
};

export default PostWrapper;
