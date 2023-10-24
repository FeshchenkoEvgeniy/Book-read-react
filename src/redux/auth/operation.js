import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://bookread-backend.goit.global/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

/*
 * POST @ /auth/register
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPi) => {
    try {
      const res = await axios.post("/auth/register", credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /auth/login
 * body: { email, password }
 */
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPi) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      setAuthHeader(res.data.token);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /auth/logout
 * body: { email, password }
 */
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPi) => {
  try {
    await axios.post("/auth/login");
    clearAuthHeader();
  } catch (error) {
    return thunkAPi.rejectWithValue(error.message);
  }
});

/*
 * POST @ /auth/refresh
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get("/auth/refresh");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
