const clientId = "AM5xAaKNdFbYDiL8bSol9uklmoZO1yj7IizDA1SHlw8";

export const api = async (page) => {
	const apiUrl = `https://api.unsplash.com/photos/?client_id=${clientId}&page=${page}`;
	const response = await fetch(apiUrl);
	const data = await response.json();

	return data;
};
