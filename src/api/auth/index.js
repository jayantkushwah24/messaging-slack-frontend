import axios from "@/config/axiosConfig";

export const signUpRequest = async ({ email, password, username }) => {
  try {
    const response = await axios.post("/auth/signup", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};

export const signInRequest = async ({ email, password }) => {
  try {
    const response = await axios.post("/auth/signin", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
};
