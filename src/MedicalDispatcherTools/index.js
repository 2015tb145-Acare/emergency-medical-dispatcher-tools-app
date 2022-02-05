import axios from "axios";

const API_URL =
  process.env.NODE_ENV !== "development"
    ? "https://emergency-medical-dispatcher.herokuapp.com/api"
    : "http://localhost:8888/api";

export const signInWithUsernameAndPassword = async (
  username = null,
  password = null
) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/login`, {
      name: username,
      password: password,
    });
    const { token, refresh_token } = data;
    console.log({ token: token, refresh_token: refresh_token });
    return { token, refresh_token };
  } catch (error) {
    return error;
  }
};

export const signOut = async () => {
  const { data } = await axios.delete(`${API_URL}/auth/refreh_token`);
  const { error, message } = data;
  return { error, message };
};
