// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

export const api = async () => {
	const apiUrl =
		"https://api.unsplash.com/photos/?client_id=85ZESkWrlgP929jIIegcOGSjVO3LVBFBbw2h2IVD554";
	const response = await fetch(apiUrl);
	const data = await response.json();

	const link = data.map((el) => {
		return el;
	});

	return link;
};
