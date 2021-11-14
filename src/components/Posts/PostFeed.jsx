import React from "react";
// import Loader from "react-loader-spinner";
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
						visible={loading} //3 secs
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
			{/* {console.log(
				userInfos.map((el) => {
					return el.url;
				})
			)} */}
			{/* <>
				{loading && <h1>Loading...</h1>}
				{page.length !== 0 ? (
					<PostWrapper>
						{page.map((el) => {
							return (
								<PostImg
									key={el.id}
									src={el.download_url}
									alt="img"
									className="postImage"
								/>
							);
						})}
					</PostWrapper>
				) : (
					<div>
						Once you start making new posts, they'll appear here
					</div>
				)}
			</> */}
		</>
	);
};

export default PostFeed;
