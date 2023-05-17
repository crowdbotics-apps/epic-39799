import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_subscriptionfeature_list = createAsyncThunk(
  "subscriptionFeatures/api_v1_subscriptionfeature_list",
  async payload => {
    const response = await apiService.api_v1_subscriptionfeature_list(payload)
    return response.data
  }
)
export const api_v1_subscriptionfeature_create = createAsyncThunk(
  "subscriptionFeatures/api_v1_subscriptionfeature_create",
  async payload => {
    const response = await apiService.api_v1_subscriptionfeature_create(payload)
    return response.data
  }
)
export const api_v1_subscriptionfeature_retrieve = createAsyncThunk(
  "subscriptionFeatures/api_v1_subscriptionfeature_retrieve",
  async payload => {
    const response = await apiService.api_v1_subscriptionfeature_retrieve(
      payload
    )
    return response.data
  }
)
export const api_v1_subscriptionfeature_update = createAsyncThunk(
  "subscriptionFeatures/api_v1_subscriptionfeature_update",
  async payload => {
    const response = await apiService.api_v1_subscriptionfeature_update(payload)
    return response.data
  }
)
export const api_v1_subscriptionfeature_partial_update = createAsyncThunk(
  "subscriptionFeatures/api_v1_subscriptionfeature_partial_update",
  async payload => {
    const response = await apiService.api_v1_subscriptionfeature_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_subscriptionfeature_destroy = createAsyncThunk(
  "subscriptionFeatures/api_v1_subscriptionfeature_destroy",
  async payload => {
    const response = await apiService.api_v1_subscriptionfeature_destroy(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const subscriptionFeaturesSlice = createSlice({
  name: "subscriptionFeatures",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_subscriptionfeature_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscriptionfeature_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscriptionfeature_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscriptionfeature_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscriptionfeature_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscriptionfeature_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_subscriptionfeature_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_subscriptionfeature_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_subscriptionfeature_list,
  api_v1_subscriptionfeature_create,
  api_v1_subscriptionfeature_retrieve,
  api_v1_subscriptionfeature_update,
  api_v1_subscriptionfeature_partial_update,
  api_v1_subscriptionfeature_destroy,
  slice: subscriptionFeaturesSlice
}
