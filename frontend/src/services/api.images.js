import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const userRoute = "/projects";

const apiImagesByProjectId = async (projectId) => {
  try {
    const response = await axios.get(`${url}${userRoute}/${projectId}/images`);
    if (response.status === 200) {
      console.info("response:", response.data);
      return response.data;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Internal server error:", error);
    } else {
      console.error("Fetch  error:", error);
    }
    throw error;
  }
};

export default apiImagesByProjectId;
