import React from "react";
import Loader from "react-loader-spinner";

const PostImg = ({ src, alt, className, loading }) => {
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
						visible={loading} //3 secs
					/>
				</div>
			)}
			<img src={src} alt={alt} className={className} />
		</>
	);
};

export default PostImg;
