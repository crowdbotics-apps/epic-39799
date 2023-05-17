import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_chessgame_list = createAsyncThunk(
  "chessGames/api_v1_chessgame_list",
  async payload => {
    const response = await apiService.api_v1_chessgame_list(payload)
    return response.data
  }
)
export const api_v1_chessgame_create = createAsyncThunk(
  "chessGames/api_v1_chessgame_create",
  async payload => {
    const response = await apiService.api_v1_chessgame_create(payload)
    return response.data
  }
)
export const api_v1_chessgame_retrieve = createAsyncThunk(
  "chessGames/api_v1_chessgame_retrieve",
  async payload => {
    const response = await apiService.api_v1_chessgame_retrieve(payload)
    return response.data
  }
)
export const api_v1_chessgame_update = createAsyncThunk(
  "chessGames/api_v1_chessgame_update",
  async payload => {
    const response = await apiService.api_v1_chessgame_update(payload)
    return response.data
  }
)
export const api_v1_chessgame_partial_update = createAsyncThunk(
  "chessGames/api_v1_chessgame_partial_update",
  async payload => {
    const response = await apiService.api_v1_chessgame_partial_update(payload)
    return response.data
  }
)
export const api_v1_chessgame_destroy = createAsyncThunk(
  "chessGames/api_v1_chessgame_destroy",
  async payload => {
    const response = await apiService.api_v1_chessgame_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const chessGamesSlice = createSlice({
  name: "chessGames",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_chessgame_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chessgame_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chessgame_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chessgame_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chessgame_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chessgame_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_chessgame_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_chessgame_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_chessgame_list,
  api_v1_chessgame_create,
  api_v1_chessgame_retrieve,
  api_v1_chessgame_update,
  api_v1_chessgame_partial_update,
  api_v1_chessgame_destroy,
  slice: chessGamesSlice
}
