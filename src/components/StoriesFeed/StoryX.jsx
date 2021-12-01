import React, { useEffect, useState, useRef } from "react";
import { ChevronRight } from "@material-ui/icons";
import { ChevronLeft } from "@material-ui/icons";
import "./StoryX.css";
import pic from "../../assets/profile.png";
import { storyData } from "./StoryXdata";

const Storezz = ({ setStories }) => {
	const [storyIndex, setStoryIndex] = useState(0);
	const videoRef = useRef();
	const [storyPaused, setStoryPaused] = useState(false);
	// const nextStory = () => {
	// 	if (storyIndex === storyData.length - 1) {
	// 		setStories(false);
	// 	} else {
	// 		setStoryIndex((value) => value + 1);
	// 		console.log("Im executing");
	// 	}
	// };

	// Transition to the nextstory
	useEffect(() => {
		const interval = setInterval(() => {
			if (storyIndex === storyData.length - 1) {
				setStories(false);
			} else {
				setStoryIndex((value) => value + 1);
			}
		}, storyData[storyIndex].duration * 1000);
		return () => clearInterval(interval);
	}, [storyIndex, setStories]);

	useEffect(() => {
		if (!storyPaused) {
			var isPlaying =
				videoRef.current.currentTime > 0 &&
				!videoRef.current.paused &&
				!videoRef.current.ended &&
				videoRef.current.readyState >
					videoRef.current.HAVE_CURRENT_DATA;
			// videoRef.current.pause().then(() => {
			if (!isPlaying) {
				videoRef.current.play();
			}

			// });
		} else {
			videoRef.current.pause();
		}
	}, [storyPaused]);

	const getProgressBarClassName = (index) => {
		if (index < storyIndex) {
			return "progress-bar progress-bar-finished";
		} else if (index === storyIndex) {
			return storyPaused
				? "progress-bar progress-bar-active progress-bar-paused"
				: "progress-bar progress-bar-active";
		} else {
			return "progress-bar";
		}
	};

	return (
		<>
			<div
				className="StoriesBackground"
				onClick={() => setStories(false)}
			></div>
			<div className="StoriesContainer">
				<div className="title">
					<img src={pic} alt="pic" />
					<div className="details">
						<span>UserName</span>
					</div>
				</div>
				<div className="progress-bars">
					{storyData.map((story, index) => (
						<div className="progress-bar-container">
							<div
								style={{
									animationDuration: `${story.duration}s`,
								}}
								className={getProgressBarClassName(index)}
							></div>
						</div>
					))}
				</div>

				<div className="video">
					<div></div>
					<video
						onMouseDown={() => {
							setStoryPaused(true);
						}}
						onMouseUp={() => {
							setStoryPaused(false);
						}}
						ref={videoRef}
						src={storyData[storyIndex].mediaUrl}
						autoPlay
						// onEnded={() => nextStory()}
					></video>

					{storyIndex !== 0 && (
						<ChevronLeft
							className="prev"
							onClick={() => setStoryIndex((value) => value - 1)}
						/>
					)}
					{storyIndex !== storyData.length - 1 && (
						<ChevronRight
							className="next"
							onClick={() => setStoryIndex((value) => value + 1)}
						/>
					)}
				</div>
			</div>
		</>
	);
};

export default Storezz;
