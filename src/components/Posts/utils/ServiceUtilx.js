const clientId = process.env.REACT_APP_SECRET_API_KEY;

export const api = async (page) => {
  const apiUrl = `https://api.unsplash.com/photos/?client_id=${clientId}&page=${page}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  return data;
};
