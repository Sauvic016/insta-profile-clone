// https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const clientId = "85ZESkWrlgP929jIIegcOGSjVO3LVBFBbw2h2IVD554";
const arr = [{ id: 1 }, { id: 2 }];
const newUrlarr = arr.map((el) => {
	const Urls = `https://api.unsplash.com/photos/?client_id=${clientId}&page=${el.id}`;
	return Urls;
});

export const api = async () => {
	const res = await Promise.all(
		newUrlarr.map((el) => fetch(el).then((response) => response.json()))
	);
	return res;
};
