import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_terms_list = createAsyncThunk(
  "terms/api_v1_terms_list",
  async payload => {
    const response = await apiService.api_v1_terms_list(payload)
    return response.data
  }
)
export const api_v1_terms_create = createAsyncThunk(
  "terms/api_v1_terms_create",
  async payload => {
    const response = await apiService.api_v1_terms_create(payload)
    return response.data
  }
)
export const api_v1_terms_retrieve = createAsyncThunk(
  "terms/api_v1_terms_retrieve",
  async payload => {
    const response = await apiService.api_v1_terms_retrieve(payload)
    return response.data
  }
)
export const api_v1_terms_update = createAsyncThunk(
  "terms/api_v1_terms_update",
  async payload => {
    const response = await apiService.api_v1_terms_update(payload)
    return response.data
  }
)
export const api_v1_terms_partial_update = createAsyncThunk(
  "terms/api_v1_terms_partial_update",
  async payload => {
    const response = await apiService.api_v1_terms_partial_update(payload)
    return response.data
  }
)
export const api_v1_terms_destroy = createAsyncThunk(
  "terms/api_v1_terms_destroy",
  async payload => {
    const response = await apiService.api_v1_terms_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const termsSlice = createSlice({
  name: "terms",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_terms_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_terms_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_terms_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_terms_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_terms_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_terms_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_terms_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_terms_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_terms_list,
  api_v1_terms_create,
  api_v1_terms_retrieve,
  api_v1_terms_update,
  api_v1_terms_partial_update,
  api_v1_terms_destroy,
  slice: termsSlice
}
