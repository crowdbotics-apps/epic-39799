import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_contactmessage_list = createAsyncThunk(
  "contactMessages/api_v1_contactmessage_list",
  async payload => {
    const response = await apiService.api_v1_contactmessage_list(payload)
    return response.data
  }
)
export const api_v1_contactmessage_create = createAsyncThunk(
  "contactMessages/api_v1_contactmessage_create",
  async payload => {
    const response = await apiService.api_v1_contactmessage_create(payload)
    return response.data
  }
)
export const api_v1_contactmessage_retrieve = createAsyncThunk(
  "contactMessages/api_v1_contactmessage_retrieve",
  async payload => {
    const response = await apiService.api_v1_contactmessage_retrieve(payload)
    return response.data
  }
)
export const api_v1_contactmessage_update = createAsyncThunk(
  "contactMessages/api_v1_contactmessage_update",
  async payload => {
    const response = await apiService.api_v1_contactmessage_update(payload)
    return response.data
  }
)
export const api_v1_contactmessage_partial_update = createAsyncThunk(
  "contactMessages/api_v1_contactmessage_partial_update",
  async payload => {
    const response = await apiService.api_v1_contactmessage_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_contactmessage_destroy = createAsyncThunk(
  "contactMessages/api_v1_contactmessage_destroy",
  async payload => {
    const response = await apiService.api_v1_contactmessage_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const contactMessagesSlice = createSlice({
  name: "contactMessages",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_contactmessage_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactmessage_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactmessage_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactmessage_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactmessage_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactmessage_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_contactmessage_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_contactmessage_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_contactmessage_list,
  api_v1_contactmessage_create,
  api_v1_contactmessage_retrieve,
  api_v1_contactmessage_update,
  api_v1_contactmessage_partial_update,
  api_v1_contactmessage_destroy,
  slice: contactMessagesSlice
}
