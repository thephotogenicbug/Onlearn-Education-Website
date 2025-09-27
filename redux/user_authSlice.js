import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const API = import.meta.env.VITE_BACKEND_URL;

// Register user
export const userRegister = createAsyncThunk(
  "user/userRegister",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/user/user-register`, userData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      if (!res.data.success) throw new Error(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Login user
export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${API}/user/user-login`, userData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      if (!res.data.success) throw new Error(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Logout user
export const userLogout = createAsyncThunk(
  "user/userLogout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API}/user/user-logout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (!res.data.success) throw new Error(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// Get user info
export const getUser = createAsyncThunk(
  "user/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/user/get-user`, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      if (!res.data.success) throw new Error(res.data.message);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  user: null,
  token: Cookies.get("token") || null,
  loading: false,
  error: null,
};

const user_authSlice = createSlice({
  name: "user_auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token, {
          path: "/",
          sameSite: "Lax",
        });
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        Cookies.set("token", action.payload.token, {
          path: "/",
          sameSite: "Lax",
        });
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Logout
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        Cookies.remove("token", { path: "/" });
      })
      .addCase(userLogout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })

      // Get user
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default user_authSlice.reducer;
