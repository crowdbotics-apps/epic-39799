import axios from "axios"
const epicAPI = axios.create({
  baseURL: "https://epic-39799-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_login_create(payload) {
  return epicAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_player_list(payload) {
  return epicAPI.get(`/api/v1/player/`)
}
function api_v1_player_create(payload) {
  return epicAPI.post(`/api/v1/player/`, payload.data)
}
function api_v1_signup_create(payload) {
  return epicAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return epicAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return epicAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return epicAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return epicAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function rest_auth_login_create(payload) {
  return epicAPI.post(`/rest-auth/login/`, payload.data)
}
function api_v1_character_list(payload) {
  return epicAPI.get(`/api/v1/character/`)
}
function api_v1_character_create(payload) {
  return epicAPI.post(`/api/v1/character/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return epicAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return epicAPI.post(`/rest-auth/logout/`)
}
function api_v1_player_retrieve(payload) {
  return epicAPI.get(`/api/v1/player/${payload.id}/`)
}
function api_v1_player_update(payload) {
  return epicAPI.put(`/api/v1/player/${payload.id}/`, payload.data)
}
function api_v1_player_partial_update(payload) {
  return epicAPI.patch(`/api/v1/player/${payload.id}/`, payload.data)
}
function api_v1_player_destroy(payload) {
  return epicAPI.delete(`/api/v1/player/${payload.id}/`)
}
function api_v1_character_retrieve(payload) {
  return epicAPI.get(`/api/v1/character/${payload.id}/`)
}
function api_v1_character_update(payload) {
  return epicAPI.put(`/api/v1/character/${payload.id}/`, payload.data)
}
function api_v1_character_partial_update(payload) {
  return epicAPI.patch(`/api/v1/character/${payload.id}/`, payload.data)
}
function api_v1_character_destroy(payload) {
  return epicAPI.delete(`/api/v1/character/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return epicAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return epicAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return epicAPI.post(`/rest-auth/password/change/`, payload.data)
}
function modules_terms_and_conditions_list(payload) {
  return epicAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return epicAPI.post(`/modules/terms-and-conditions/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return epicAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function modules_terms_and_conditions_retrieve(payload) {
  return epicAPI.get(`/modules/terms-and-conditions/${payload.id}/`)
}
function modules_terms_and_conditions_update(payload) {
  return epicAPI.put(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_partial_update(payload) {
  return epicAPI.patch(
    `/modules/terms-and-conditions/${payload.id}/`,
    payload.data
  )
}
function modules_terms_and_conditions_destroy(payload) {
  return epicAPI.delete(`/modules/terms-and-conditions/${payload.id}/`)
}
function rest_auth_registration_verify_email_create(payload) {
  return epicAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
export const apiService = {
  api_v1_login_create,
  api_v1_player_list,
  api_v1_player_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_character_list,
  api_v1_character_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_player_retrieve,
  api_v1_player_update,
  api_v1_player_partial_update,
  api_v1_player_destroy,
  api_v1_character_retrieve,
  api_v1_character_update,
  api_v1_character_partial_update,
  api_v1_character_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  rest_auth_password_reset_confirm_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_registration_verify_email_create
}
