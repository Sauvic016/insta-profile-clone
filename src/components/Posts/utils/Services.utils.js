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
// export const api = async () => {
// 	const apiUrl = `https://api.unsplash.com/photos/?client_id=${clientId}&page=1`;
// 	const response = await fetch(apiUrl);
// 	const data = await response.json();

// 	const link1 = data.map((el) => {
// 		return el;
// 	});
// 	const apiUrl2 = `https://api.unsplash.com/photos/?client_id=${clientId}&page=2`;
// 	const response2 = await fetch(apiUrl2);
// 	const data2 = await response2.json();

// 	const link2 = data2.map((el) => {
// 		return el;
// 	});

// 	return [link1, link2];
// };
