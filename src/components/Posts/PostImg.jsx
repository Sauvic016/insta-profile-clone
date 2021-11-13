import React from "react";

const PostImg = ({ src, alt, className }) => {
	return (
		<>
			<img src={src} alt={alt} className={className} />
		</>
	);
};

export default PostImg;
