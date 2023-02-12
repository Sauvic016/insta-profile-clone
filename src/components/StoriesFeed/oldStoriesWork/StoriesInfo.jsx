/* eslint-disable no-unused-vars */

import { WithHeader } from "react-insta-stories";

const code = {
	background: "#eee",
	padding: "5px 10px",
	borderRadius: "4px",
	color: "#333",
};

const contentStyle = {
	background: "salmon",
	width: "100%",
	padding: 20,
	color: "white",
};

const CustomStoryContent = ({ story, config, isPaused }) => {
	return (
		<WithHeader story={story} globalHeader={config.header}>
			{console.log(config.header)}
			<div style={contentStyle}>
				<h1>The new version is here.</h1>
				<p>This is the new story.</p>
				<p>Now render React components right into your stories.</p>
				<p>
					Possibilities are endless, like here - here's a code block!
				</p>
				<pre>
					<code style={code}>console.log('Hello, world!')</code>
				</pre>
				<p>Or here, an image!</p>
				<br />
				<img
					alt="blt"
					style={image}
					src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
				></img>
				<h3>Perfect. But there's more! →</h3>
			</div>
		</WithHeader>
	);
};

const image = {
	display: "block",
	maxWidth: "100%",
	borderRadius: 4,
};

export const stories_ = [
	{
		header: {
			heading: "Sauvic",
			subheading: "Posted 30m ago",
			profileImage: "https://picsum.photos/100/100",
		},
		content: CustomStoryContent,
	},
	{
		header: {
			heading: "Sauvic",
			subheading: "Posted 30m ago",
			profileImage: "https://picsum.photos/100/100",
		},
		url: "https://picsum.photos/1080/1920",
		seeMore: ({ close }) => (
			<div
				style={{
					maxWidth: "100%",
					height: "100%",
					padding: 40,
					background: "white",
				}}
			>
				<h2>Just checking the see more feature.</h2>
				<p style={{ textDecoration: "underline" }} onClick={close}>
					Go on, close this popup.
				</p>
			</div>
		),
	},
	{
		header: {
			heading: "Sauvic",
			subheading: "Posted 30m ago",
			profileImage: "https://picsum.photos/100/100",
		},
		url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
		type: "video",
	},
];
