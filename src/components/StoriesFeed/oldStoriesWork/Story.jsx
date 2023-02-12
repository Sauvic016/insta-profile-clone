import React from "react";
import { useHistory } from "react-router-dom";
import Stories from "react-insta-stories";
import { stories_ } from "./StoriesInfo";
import "./Story.css";

const Story = () => {
	const history = useHistory();
	const goBacktoProfile = () => {
		history.push("/");
	};

	return (
		<div className="storyBackground">
			<div className="stories">
				<Stories
					loop={false}
					keyboardNavigation
					defaultInterval={13000}
					stories={stories_}
					onAllStoriesEnd={() => goBacktoProfile()}
				/>
			</div>
		</div>
	);
};

export default Story;
