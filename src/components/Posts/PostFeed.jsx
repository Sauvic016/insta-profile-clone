import React from "react";
import Loader from "react-loader-spinner";
import PostImg from "./PostImg";
import PostWrapper from "./PostWrapper";
import "./Posts.scss";

const PostFeed = ({ userInfo, loading }) => {
	return (
		<>
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
			{userInfo.length !== 0 ? (
				<PostWrapper>
					{userInfo.map((el) => {
						return (
							<PostImg
								key={el.id}
								src={el.urls.thumb}
								alt="img"
								className="postImage"
							/>
						);
					})}
				</PostWrapper>
			) : null}
		</>
	);
};

export default PostFeed;
