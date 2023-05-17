import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_gameinvitation_list = createAsyncThunk(
  "gameInvitations/api_v1_gameinvitation_list",
  async payload => {
    const response = await apiService.api_v1_gameinvitation_list(payload)
    return response.data
  }
)
export const api_v1_gameinvitation_create = createAsyncThunk(
  "gameInvitations/api_v1_gameinvitation_create",
  async payload => {
    const response = await apiService.api_v1_gameinvitation_create(payload)
    return response.data
  }
)
export const api_v1_gameinvitation_retrieve = createAsyncThunk(
  "gameInvitations/api_v1_gameinvitation_retrieve",
  async payload => {
    const response = await apiService.api_v1_gameinvitation_retrieve(payload)
    return response.data
  }
)
export const api_v1_gameinvitation_update = createAsyncThunk(
  "gameInvitations/api_v1_gameinvitation_update",
  async payload => {
    const response = await apiService.api_v1_gameinvitation_update(payload)
    return response.data
  }
)
export const api_v1_gameinvitation_partial_update = createAsyncThunk(
  "gameInvitations/api_v1_gameinvitation_partial_update",
  async payload => {
    const response = await apiService.api_v1_gameinvitation_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_gameinvitation_destroy = createAsyncThunk(
  "gameInvitations/api_v1_gameinvitation_destroy",
  async payload => {
    const response = await apiService.api_v1_gameinvitation_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const gameInvitationsSlice = createSlice({
  name: "gameInvitations",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_gameinvitation_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gameinvitation_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gameinvitation_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gameinvitation_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gameinvitation_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gameinvitation_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_gameinvitation_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_gameinvitation_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_gameinvitation_list,
  api_v1_gameinvitation_create,
  api_v1_gameinvitation_retrieve,
  api_v1_gameinvitation_update,
  api_v1_gameinvitation_partial_update,
  api_v1_gameinvitation_destroy,
  slice: gameInvitationsSlice
}
