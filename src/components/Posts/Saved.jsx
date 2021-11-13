import React from "react";
import Loader from "react-loader-spinner";
import PostImg from "./PostImg";
import PostWrapper from "./PostWrapper";

const SavedPosts = ({ userInfo, loading }) => {
	return (
		<>
			{loading && (
				<Loader
					type="Puff"
					color="#00BFFF"
					height={100}
					width={100}
					timeout={1000} //3 secs
				/>
			)}
			{userInfo.length !== 0 ? (
				<PostWrapper>
					{userInfo.map((el) => {
						if (el.likes > 10) {
							return (
								<PostImg
									key={el.id}
									src={el.urls.thumb}
									alt="img"
									className="postImage"
								/>
							);
						}
						return null;
					})}
				</PostWrapper>
			) : (
				<h1>
					Once you start saving the post you like , they'll appear
					here
				</h1>
			)}
		</>
	);
};

export default SavedPosts;
