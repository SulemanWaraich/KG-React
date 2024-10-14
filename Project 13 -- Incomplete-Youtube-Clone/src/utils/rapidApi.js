import axios from "axios";

const API_KEY = "AIzaSyAwXxhVegEuOkVVDahxzZ-QQrimv00f_To"; // Your Google API Key
const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}&key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error("Error fetching API data: ", error);
    throw error;
  }
};
