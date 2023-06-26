import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_friendrequest_list = createAsyncThunk(
  "friendRequests/api_v1_friendrequest_list",
  async payload => {
    const response = await apiService.api_v1_friendrequest_list(payload)
    return response.data
  }
)
export const api_v1_friendrequest_create = createAsyncThunk(
  "friendRequests/api_v1_friendrequest_create",
  async payload => {
    const response = await apiService.api_v1_friendrequest_create(payload)
    return response.data
  }
)
export const api_v1_friendrequest_retrieve = createAsyncThunk(
  "friendRequests/api_v1_friendrequest_retrieve",
  async payload => {
    const response = await apiService.api_v1_friendrequest_retrieve(payload)
    return response.data
  }
)
export const api_v1_friendrequest_update = createAsyncThunk(
  "friendRequests/api_v1_friendrequest_update",
  async payload => {
    const response = await apiService.api_v1_friendrequest_update(payload)
    return response.data
  }
)
export const api_v1_friendrequest_partial_update = createAsyncThunk(
  "friendRequests/api_v1_friendrequest_partial_update",
  async payload => {
    const response = await apiService.api_v1_friendrequest_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_friendrequest_destroy = createAsyncThunk(
  "friendRequests/api_v1_friendrequest_destroy",
  async payload => {
    const response = await apiService.api_v1_friendrequest_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const friendRequestsSlice = createSlice({
  name: "friendRequests",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_friendrequest_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_friendrequest_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_friendrequest_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_friendrequest_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_friendrequest_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_friendrequest_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_friendrequest_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_friendrequest_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_friendrequest_list,
  api_v1_friendrequest_create,
  api_v1_friendrequest_retrieve,
  api_v1_friendrequest_update,
  api_v1_friendrequest_partial_update,
  api_v1_friendrequest_destroy,
  slice: friendRequestsSlice
}
