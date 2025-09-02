// lib/swrFetcher.js
import api from "./axios";

const fetcher = (url) => api.get(url).then((res) => res.data);

export default fetcher;
