import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_creditcard_list = createAsyncThunk(
  "creditCards/api_v1_creditcard_list",
  async payload => {
    const response = await apiService.api_v1_creditcard_list(payload)
    return response.data
  }
)
export const api_v1_creditcard_create = createAsyncThunk(
  "creditCards/api_v1_creditcard_create",
  async payload => {
    const response = await apiService.api_v1_creditcard_create(payload)
    return response.data
  }
)
export const api_v1_creditcard_retrieve = createAsyncThunk(
  "creditCards/api_v1_creditcard_retrieve",
  async payload => {
    const response = await apiService.api_v1_creditcard_retrieve(payload)
    return response.data
  }
)
export const api_v1_creditcard_update = createAsyncThunk(
  "creditCards/api_v1_creditcard_update",
  async payload => {
    const response = await apiService.api_v1_creditcard_update(payload)
    return response.data
  }
)
export const api_v1_creditcard_partial_update = createAsyncThunk(
  "creditCards/api_v1_creditcard_partial_update",
  async payload => {
    const response = await apiService.api_v1_creditcard_partial_update(payload)
    return response.data
  }
)
export const api_v1_creditcard_destroy = createAsyncThunk(
  "creditCards/api_v1_creditcard_destroy",
  async payload => {
    const response = await apiService.api_v1_creditcard_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const creditCardsSlice = createSlice({
  name: "creditCards",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_creditcard_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditcard_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditcard_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditcard_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditcard_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditcard_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creditcard_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creditcard_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_creditcard_list,
  api_v1_creditcard_create,
  api_v1_creditcard_retrieve,
  api_v1_creditcard_update,
  api_v1_creditcard_partial_update,
  api_v1_creditcard_destroy,
  slice: creditCardsSlice
}
