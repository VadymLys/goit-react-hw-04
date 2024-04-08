import axios from "axios";

async function searchImages(query, pageNum) {
  try {
    const API_KEY = "X0sJ3fvNEVUnxb5PR6m8WyW7rOdzAD8SMCSzxAiJtgY";
    const params = {
      client_id: API_KEY,
      query: query,
      orientation: "landscape",
      page: pageNum,
      per_page: 12,
    };

    const response = await axios.get(
      `https://api.unsplash.com/search/photos/`,
      {
        params: params,
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return error.status;
  }
}
export { searchImages };
