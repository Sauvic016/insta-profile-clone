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
					// console.log(el.urls.regular);
					return (
						<PostImg
							key={el.id}
							src={el.urls.thumb}
							alt="img"
							loading={loading}
							desc={
								el.user.bio
									? el.user.bio
									: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint at fugit temporibus ducimus similique sapiente! Corrupti quam asperiores libero. Neque!`
							}
							lSrc={el.urls.regular}
							className="postImage"
						/>
					);
				})}
			</PostWrapper>
		</>
	);
};

export default PostFeed;
