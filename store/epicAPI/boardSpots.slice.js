import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_boardspot_list = createAsyncThunk(
  "boardSpots/api_v1_boardspot_list",
  async payload => {
    const response = await apiService.api_v1_boardspot_list(payload)
    return response.data
  }
)
export const api_v1_boardspot_create = createAsyncThunk(
  "boardSpots/api_v1_boardspot_create",
  async payload => {
    const response = await apiService.api_v1_boardspot_create(payload)
    return response.data
  }
)
export const api_v1_boardspot_retrieve = createAsyncThunk(
  "boardSpots/api_v1_boardspot_retrieve",
  async payload => {
    const response = await apiService.api_v1_boardspot_retrieve(payload)
    return response.data
  }
)
export const api_v1_boardspot_update = createAsyncThunk(
  "boardSpots/api_v1_boardspot_update",
  async payload => {
    const response = await apiService.api_v1_boardspot_update(payload)
    return response.data
  }
)
export const api_v1_boardspot_partial_update = createAsyncThunk(
  "boardSpots/api_v1_boardspot_partial_update",
  async payload => {
    const response = await apiService.api_v1_boardspot_partial_update(payload)
    return response.data
  }
)
export const api_v1_boardspot_destroy = createAsyncThunk(
  "boardSpots/api_v1_boardspot_destroy",
  async payload => {
    const response = await apiService.api_v1_boardspot_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const boardSpotsSlice = createSlice({
  name: "boardSpots",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_boardspot_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_boardspot_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_boardspot_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_boardspot_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_boardspot_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_boardspot_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_boardspot_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_boardspot_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_boardspot_list,
  api_v1_boardspot_create,
  api_v1_boardspot_retrieve,
  api_v1_boardspot_update,
  api_v1_boardspot_partial_update,
  api_v1_boardspot_destroy,
  slice: boardSpotsSlice
}
