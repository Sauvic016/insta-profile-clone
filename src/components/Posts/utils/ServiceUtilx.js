const clientId = "85ZESkWrlgP929jIIegcOGSjVO3LVBFBbw2h2IVD554";

export const api = async () => {
	const apiUrl = `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=12`;
	const response = await fetch(apiUrl);
	const data = await response.json();

	return data;
};
