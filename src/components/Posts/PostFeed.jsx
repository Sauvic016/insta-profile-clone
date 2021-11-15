import React from "react";
import PostImg from "./PostImg";
import PostWrapper from "./PostWrapper";
import "./Posts.scss";
import Loader from "react-loader-spinner";

const PostFeed = ({ page, loading }) => {
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
			<PostWrapper>
				{page.map((el) => {
					return (
						<PostImg
							key={el.id}
							src={el.urls.thumb}
							alt="img"
							className="postImage"
							loading={loading}
						/>
					);
				})}
			</PostWrapper>
		</>
	);
};

export default PostFeed;
