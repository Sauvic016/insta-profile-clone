import React, { useEffect, useState } from "react";
import { PostIcon, SavedIcon } from "../Icons/Icon";
import PostFeed from "./PostFeed";
import { api } from "./utils/Services.utils";
import Tab from "./Tabs";

import "./Posts.scss";

const Posts = () => {
	const tabList = [
		{
			__id: 1,
			tab: "POSTS",
			onClick: () => setTab("POSTS"),
			icon: <PostIcon />,
			label: "Post",
		},
		{
			__id: 2,
			tab: "SAVED",
			onClick: () => setTab("SAVED"),
			icon: <SavedIcon />,
			label: "Saved",
		},
	];

	const [userInfo, setUserInfo] = useState([]);
	const [savedInfo, setSavedInfo] = useState([]);
	const [tab, setTab] = useState("POSTS");
	const [loading, setLoading] = useState(true);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);
			setHasError(false);
			try {
				const [link1, link2] = await api();
				setUserInfo(link1);
				setSavedInfo(link2);
				setLoading(false);
			} catch (error) {
				console.log("error:", error);
				setHasError(true);
			}
		};
		fetchPosts();
	}, []);
	return (
		<>
			<hr />

			<div className="container">
				<div className="profile-tab">
					{tabList.map((el) => {
						return (
							<Tab
								key={el.__id}
								active={el.tab === tab}
								onClick={el.onClick}
								icon={el.icon}
								label={el.label}
							/>
						);
					})}
				</div>
				<br />
				{hasError && <p>Something went wrong.</p>}
				{tab === "POSTS" ? (
					<PostFeed page={userInfo} loading={loading} />
				) : (
					<PostFeed page={savedInfo} loading={loading} />
				)}
			</div>
		</>
	);
};

export default Posts;
