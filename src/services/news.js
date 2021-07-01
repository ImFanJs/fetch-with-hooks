export const fetchNews = (url = "") => fetch(`${process.env.API_URL}?${url}`);
