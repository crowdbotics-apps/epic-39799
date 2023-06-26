import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_advertisement_list = createAsyncThunk(
  "advertisements/api_v1_advertisement_list",
  async payload => {
    const response = await apiService.api_v1_advertisement_list(payload)
    return response.data
  }
)
export const api_v1_advertisement_create = createAsyncThunk(
  "advertisements/api_v1_advertisement_create",
  async payload => {
    const response = await apiService.api_v1_advertisement_create(payload)
    return response.data
  }
)
export const api_v1_advertisement_retrieve = createAsyncThunk(
  "advertisements/api_v1_advertisement_retrieve",
  async payload => {
    const response = await apiService.api_v1_advertisement_retrieve(payload)
    return response.data
  }
)
export const api_v1_advertisement_update = createAsyncThunk(
  "advertisements/api_v1_advertisement_update",
  async payload => {
    const response = await apiService.api_v1_advertisement_update(payload)
    return response.data
  }
)
export const api_v1_advertisement_partial_update = createAsyncThunk(
  "advertisements/api_v1_advertisement_partial_update",
  async payload => {
    const response = await apiService.api_v1_advertisement_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_advertisement_destroy = createAsyncThunk(
  "advertisements/api_v1_advertisement_destroy",
  async payload => {
    const response = await apiService.api_v1_advertisement_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const advertisementsSlice = createSlice({
  name: "advertisements",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_advertisement_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_advertisement_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_advertisement_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_advertisement_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_advertisement_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_advertisement_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_advertisement_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_advertisement_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_advertisement_list,
  api_v1_advertisement_create,
  api_v1_advertisement_retrieve,
  api_v1_advertisement_update,
  api_v1_advertisement_partial_update,
  api_v1_advertisement_destroy,
  slice: advertisementsSlice
}
