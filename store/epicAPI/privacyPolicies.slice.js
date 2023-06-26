import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_privacypolicy_list = createAsyncThunk(
  "privacyPolicies/api_v1_privacypolicy_list",
  async payload => {
    const response = await apiService.api_v1_privacypolicy_list(payload)
    return response.data
  }
)
export const api_v1_privacypolicy_create = createAsyncThunk(
  "privacyPolicies/api_v1_privacypolicy_create",
  async payload => {
    const response = await apiService.api_v1_privacypolicy_create(payload)
    return response.data
  }
)
export const api_v1_privacypolicy_retrieve = createAsyncThunk(
  "privacyPolicies/api_v1_privacypolicy_retrieve",
  async payload => {
    const response = await apiService.api_v1_privacypolicy_retrieve(payload)
    return response.data
  }
)
export const api_v1_privacypolicy_update = createAsyncThunk(
  "privacyPolicies/api_v1_privacypolicy_update",
  async payload => {
    const response = await apiService.api_v1_privacypolicy_update(payload)
    return response.data
  }
)
export const api_v1_privacypolicy_partial_update = createAsyncThunk(
  "privacyPolicies/api_v1_privacypolicy_partial_update",
  async payload => {
    const response = await apiService.api_v1_privacypolicy_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_privacypolicy_destroy = createAsyncThunk(
  "privacyPolicies/api_v1_privacypolicy_destroy",
  async payload => {
    const response = await apiService.api_v1_privacypolicy_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const privacyPoliciesSlice = createSlice({
  name: "privacyPolicies",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_privacypolicy_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_privacypolicy_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_privacypolicy_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_privacypolicy_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_privacypolicy_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_privacypolicy_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_privacypolicy_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_privacypolicy_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_privacypolicy_list,
  api_v1_privacypolicy_create,
  api_v1_privacypolicy_retrieve,
  api_v1_privacypolicy_update,
  api_v1_privacypolicy_partial_update,
  api_v1_privacypolicy_destroy,
  slice: privacyPoliciesSlice
}
