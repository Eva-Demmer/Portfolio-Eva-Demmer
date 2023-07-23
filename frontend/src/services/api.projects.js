import axios from "axios";

const url = import.meta.env.VITE_BACKEND_URL;
const userRoute = "/projects";

const apiAllProjects = async () => {
  try {
    const response = await axios.get(`${url}${userRoute}`);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error(`Unexpected response status: ${response.status}`);
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Internal server error:", error);
    } else {
      console.error("Fetch error:", error);
    }
    throw error;
  }
};

const apiProjectById = async (id) => {
  try {
    const response = await axios.get(`${url}${userRoute}/${id}`);
    if (response.status === 200) {
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

export { apiAllProjects, apiProjectById };
