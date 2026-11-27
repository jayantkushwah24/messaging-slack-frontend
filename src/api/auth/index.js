import axios from "@/config/axiosConfig";

export const signUpRequest = async ({ email, password, username }) => {
  try {
    const response = await axios.post("/users/signup", {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Unable to sign up";
    throw new Error(message, { cause: error });
  }
};

export const signInRequest = async ({ email, password }) => {
  try {
    const response = await axios.post("/users/signin", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Unable to sign in";
    throw new Error(message, { cause: error });
  }
};
