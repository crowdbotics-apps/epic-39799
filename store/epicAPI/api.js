import axios from "axios"
const epicAPI = axios.create({
  baseURL: "https://epic-39799.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return epicAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_advertisement_list(payload) {
  return epicAPI.get(`/api/v1/advertisement/`)
}
function api_v1_advertisement_create(payload) {
  return epicAPI.post(`/api/v1/advertisement/`, payload.data)
}
function api_v1_advertisement_retrieve(payload) {
  return epicAPI.get(`/api/v1/advertisement/${payload.id}/`)
}
function api_v1_advertisement_update(payload) {
  return epicAPI.put(`/api/v1/advertisement/${payload.id}/`, payload.data)
}
function api_v1_advertisement_partial_update(payload) {
  return epicAPI.patch(`/api/v1/advertisement/${payload.id}/`, payload.data)
}
function api_v1_advertisement_destroy(payload) {
  return epicAPI.delete(`/api/v1/advertisement/${payload.id}/`)
}
function api_v1_board_list(payload) {
  return epicAPI.get(`/api/v1/board/`)
}
function api_v1_board_create(payload) {
  return epicAPI.post(`/api/v1/board/`, payload.data)
}
function api_v1_board_retrieve(payload) {
  return epicAPI.get(`/api/v1/board/${payload.id}/`)
}
function api_v1_board_update(payload) {
  return epicAPI.put(`/api/v1/board/${payload.id}/`, payload.data)
}
function api_v1_board_partial_update(payload) {
  return epicAPI.patch(`/api/v1/board/${payload.id}/`, payload.data)
}
function api_v1_board_destroy(payload) {
  return epicAPI.delete(`/api/v1/board/${payload.id}/`)
}
function api_v1_boardspot_list(payload) {
  return epicAPI.get(`/api/v1/boardspot/`)
}
function api_v1_boardspot_create(payload) {
  return epicAPI.post(`/api/v1/boardspot/`, payload.data)
}
function api_v1_boardspot_retrieve(payload) {
  return epicAPI.get(`/api/v1/boardspot/${payload.id}/`)
}
function api_v1_boardspot_update(payload) {
  return epicAPI.put(`/api/v1/boardspot/${payload.id}/`, payload.data)
}
function api_v1_boardspot_partial_update(payload) {
  return epicAPI.patch(`/api/v1/boardspot/${payload.id}/`, payload.data)
}
function api_v1_boardspot_destroy(payload) {
  return epicAPI.delete(`/api/v1/boardspot/${payload.id}/`)
}
function api_v1_character_list(payload) {
  return epicAPI.get(`/api/v1/character/`)
}
function api_v1_character_create(payload) {
  return epicAPI.post(`/api/v1/character/`, payload.data)
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
function api_v1_characterrule_list(payload) {
  return epicAPI.get(`/api/v1/characterrule/`)
}
function api_v1_characterrule_create(payload) {
  return epicAPI.post(`/api/v1/characterrule/`, payload.data)
}
function api_v1_characterrule_retrieve(payload) {
  return epicAPI.get(`/api/v1/characterrule/${payload.id}/`)
}
function api_v1_characterrule_update(payload) {
  return epicAPI.put(`/api/v1/characterrule/${payload.id}/`, payload.data)
}
function api_v1_characterrule_partial_update(payload) {
  return epicAPI.patch(`/api/v1/characterrule/${payload.id}/`, payload.data)
}
function api_v1_characterrule_destroy(payload) {
  return epicAPI.delete(`/api/v1/characterrule/${payload.id}/`)
}
function api_v1_chat_list(payload) {
  return epicAPI.get(`/api/v1/chat/`)
}
function api_v1_chat_create(payload) {
  return epicAPI.post(`/api/v1/chat/`, payload.data)
}
function api_v1_chat_retrieve(payload) {
  return epicAPI.get(`/api/v1/chat/${payload.id}/`)
}
function api_v1_chat_update(payload) {
  return epicAPI.put(`/api/v1/chat/${payload.id}/`, payload.data)
}
function api_v1_chat_partial_update(payload) {
  return epicAPI.patch(`/api/v1/chat/${payload.id}/`, payload.data)
}
function api_v1_chat_destroy(payload) {
  return epicAPI.delete(`/api/v1/chat/${payload.id}/`)
}
function api_v1_chatmessage_list(payload) {
  return epicAPI.get(`/api/v1/chatmessage/`)
}
function api_v1_chatmessage_create(payload) {
  return epicAPI.post(`/api/v1/chatmessage/`, payload.data)
}
function api_v1_chatmessage_retrieve(payload) {
  return epicAPI.get(`/api/v1/chatmessage/${payload.id}/`)
}
function api_v1_chatmessage_update(payload) {
  return epicAPI.put(`/api/v1/chatmessage/${payload.id}/`, payload.data)
}
function api_v1_chatmessage_partial_update(payload) {
  return epicAPI.patch(`/api/v1/chatmessage/${payload.id}/`, payload.data)
}
function api_v1_chatmessage_destroy(payload) {
  return epicAPI.delete(`/api/v1/chatmessage/${payload.id}/`)
}
function api_v1_chessgame_list(payload) {
  return epicAPI.get(`/api/v1/chessgame/`)
}
function api_v1_chessgame_create(payload) {
  return epicAPI.post(`/api/v1/chessgame/`, payload.data)
}
function api_v1_chessgame_retrieve(payload) {
  return epicAPI.get(`/api/v1/chessgame/${payload.id}/`)
}
function api_v1_chessgame_update(payload) {
  return epicAPI.put(`/api/v1/chessgame/${payload.id}/`, payload.data)
}
function api_v1_chessgame_partial_update(payload) {
  return epicAPI.patch(`/api/v1/chessgame/${payload.id}/`, payload.data)
}
function api_v1_chessgame_destroy(payload) {
  return epicAPI.delete(`/api/v1/chessgame/${payload.id}/`)
}
function api_v1_contactmessage_list(payload) {
  return epicAPI.get(`/api/v1/contactmessage/`)
}
function api_v1_contactmessage_create(payload) {
  return epicAPI.post(`/api/v1/contactmessage/`, payload.data)
}
function api_v1_contactmessage_retrieve(payload) {
  return epicAPI.get(`/api/v1/contactmessage/${payload.id}/`)
}
function api_v1_contactmessage_update(payload) {
  return epicAPI.put(`/api/v1/contactmessage/${payload.id}/`, payload.data)
}
function api_v1_contactmessage_partial_update(payload) {
  return epicAPI.patch(`/api/v1/contactmessage/${payload.id}/`, payload.data)
}
function api_v1_contactmessage_destroy(payload) {
  return epicAPI.delete(`/api/v1/contactmessage/${payload.id}/`)
}
function api_v1_creditcard_list(payload) {
  return epicAPI.get(`/api/v1/creditcard/`)
}
function api_v1_creditcard_create(payload) {
  return epicAPI.post(`/api/v1/creditcard/`, payload.data)
}
function api_v1_creditcard_retrieve(payload) {
  return epicAPI.get(`/api/v1/creditcard/${payload.id}/`)
}
function api_v1_creditcard_update(payload) {
  return epicAPI.put(`/api/v1/creditcard/${payload.id}/`, payload.data)
}
function api_v1_creditcard_partial_update(payload) {
  return epicAPI.patch(`/api/v1/creditcard/${payload.id}/`, payload.data)
}
function api_v1_creditcard_destroy(payload) {
  return epicAPI.delete(`/api/v1/creditcard/${payload.id}/`)
}
function api_v1_feedbackmessage_list(payload) {
  return epicAPI.get(`/api/v1/feedbackmessage/`)
}
function api_v1_feedbackmessage_create(payload) {
  return epicAPI.post(`/api/v1/feedbackmessage/`, payload.data)
}
function api_v1_feedbackmessage_retrieve(payload) {
  return epicAPI.get(`/api/v1/feedbackmessage/${payload.id}/`)
}
function api_v1_feedbackmessage_update(payload) {
  return epicAPI.put(`/api/v1/feedbackmessage/${payload.id}/`, payload.data)
}
function api_v1_feedbackmessage_partial_update(payload) {
  return epicAPI.patch(`/api/v1/feedbackmessage/${payload.id}/`, payload.data)
}
function api_v1_feedbackmessage_destroy(payload) {
  return epicAPI.delete(`/api/v1/feedbackmessage/${payload.id}/`)
}
function api_v1_friendrequest_list(payload) {
  return epicAPI.get(`/api/v1/friendrequest/`)
}
function api_v1_friendrequest_create(payload) {
  return epicAPI.post(`/api/v1/friendrequest/`, payload.data)
}
function api_v1_friendrequest_retrieve(payload) {
  return epicAPI.get(`/api/v1/friendrequest/${payload.id}/`)
}
function api_v1_friendrequest_update(payload) {
  return epicAPI.put(`/api/v1/friendrequest/${payload.id}/`, payload.data)
}
function api_v1_friendrequest_partial_update(payload) {
  return epicAPI.patch(`/api/v1/friendrequest/${payload.id}/`, payload.data)
}
function api_v1_friendrequest_destroy(payload) {
  return epicAPI.delete(`/api/v1/friendrequest/${payload.id}/`)
}
function api_v1_gameinvitation_list(payload) {
  return epicAPI.get(`/api/v1/gameinvitation/`)
}
function api_v1_gameinvitation_create(payload) {
  return epicAPI.post(`/api/v1/gameinvitation/`, payload.data)
}
function api_v1_gameinvitation_retrieve(payload) {
  return epicAPI.get(`/api/v1/gameinvitation/${payload.id}/`)
}
function api_v1_gameinvitation_update(payload) {
  return epicAPI.put(`/api/v1/gameinvitation/${payload.id}/`, payload.data)
}
function api_v1_gameinvitation_partial_update(payload) {
  return epicAPI.patch(`/api/v1/gameinvitation/${payload.id}/`, payload.data)
}
function api_v1_gameinvitation_destroy(payload) {
  return epicAPI.delete(`/api/v1/gameinvitation/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return epicAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_notification_list(payload) {
  return epicAPI.get(`/api/v1/notification/`)
}
function api_v1_notification_create(payload) {
  return epicAPI.post(`/api/v1/notification/`, payload.data)
}
function api_v1_notification_retrieve(payload) {
  return epicAPI.get(`/api/v1/notification/${payload.id}/`)
}
function api_v1_notification_update(payload) {
  return epicAPI.put(`/api/v1/notification/${payload.id}/`, payload.data)
}
function api_v1_notification_partial_update(payload) {
  return epicAPI.patch(`/api/v1/notification/${payload.id}/`, payload.data)
}
function api_v1_notification_destroy(payload) {
  return epicAPI.delete(`/api/v1/notification/${payload.id}/`)
}
function api_v1_payment_list(payload) {
  return epicAPI.get(`/api/v1/payment/`)
}
function api_v1_payment_create(payload) {
  return epicAPI.post(`/api/v1/payment/`, payload.data)
}
function api_v1_payment_retrieve(payload) {
  return epicAPI.get(`/api/v1/payment/${payload.id}/`)
}
function api_v1_payment_update(payload) {
  return epicAPI.put(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_partial_update(payload) {
  return epicAPI.patch(`/api/v1/payment/${payload.id}/`, payload.data)
}
function api_v1_payment_destroy(payload) {
  return epicAPI.delete(`/api/v1/payment/${payload.id}/`)
}
function api_v1_privacypolicy_list(payload) {
  return epicAPI.get(`/api/v1/privacypolicy/`)
}
function api_v1_privacypolicy_create(payload) {
  return epicAPI.post(`/api/v1/privacypolicy/`, payload.data)
}
function api_v1_privacypolicy_retrieve(payload) {
  return epicAPI.get(`/api/v1/privacypolicy/${payload.id}/`)
}
function api_v1_privacypolicy_update(payload) {
  return epicAPI.put(`/api/v1/privacypolicy/${payload.id}/`, payload.data)
}
function api_v1_privacypolicy_partial_update(payload) {
  return epicAPI.patch(`/api/v1/privacypolicy/${payload.id}/`, payload.data)
}
function api_v1_privacypolicy_destroy(payload) {
  return epicAPI.delete(`/api/v1/privacypolicy/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return epicAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_subscription_list(payload) {
  return epicAPI.get(`/api/v1/subscription/`)
}
function api_v1_subscription_create(payload) {
  return epicAPI.post(`/api/v1/subscription/`, payload.data)
}
function api_v1_subscription_retrieve(payload) {
  return epicAPI.get(`/api/v1/subscription/${payload.id}/`)
}
function api_v1_subscription_update(payload) {
  return epicAPI.put(`/api/v1/subscription/${payload.id}/`, payload.data)
}
function api_v1_subscription_partial_update(payload) {
  return epicAPI.patch(`/api/v1/subscription/${payload.id}/`, payload.data)
}
function api_v1_subscription_destroy(payload) {
  return epicAPI.delete(`/api/v1/subscription/${payload.id}/`)
}
function api_v1_subscriptionfeature_list(payload) {
  return epicAPI.get(`/api/v1/subscriptionfeature/`)
}
function api_v1_subscriptionfeature_create(payload) {
  return epicAPI.post(`/api/v1/subscriptionfeature/`, payload.data)
}
function api_v1_subscriptionfeature_retrieve(payload) {
  return epicAPI.get(`/api/v1/subscriptionfeature/${payload.id}/`)
}
function api_v1_subscriptionfeature_update(payload) {
  return epicAPI.put(`/api/v1/subscriptionfeature/${payload.id}/`, payload.data)
}
function api_v1_subscriptionfeature_partial_update(payload) {
  return epicAPI.patch(
    `/api/v1/subscriptionfeature/${payload.id}/`,
    payload.data
  )
}
function api_v1_subscriptionfeature_destroy(payload) {
  return epicAPI.delete(`/api/v1/subscriptionfeature/${payload.id}/`)
}
function api_v1_subscriptionplan_list(payload) {
  return epicAPI.get(`/api/v1/subscriptionplan/`)
}
function api_v1_subscriptionplan_create(payload) {
  return epicAPI.post(`/api/v1/subscriptionplan/`, payload.data)
}
function api_v1_subscriptionplan_retrieve(payload) {
  return epicAPI.get(`/api/v1/subscriptionplan/${payload.id}/`)
}
function api_v1_subscriptionplan_update(payload) {
  return epicAPI.put(`/api/v1/subscriptionplan/${payload.id}/`, payload.data)
}
function api_v1_subscriptionplan_partial_update(payload) {
  return epicAPI.patch(`/api/v1/subscriptionplan/${payload.id}/`, payload.data)
}
function api_v1_subscriptionplan_destroy(payload) {
  return epicAPI.delete(`/api/v1/subscriptionplan/${payload.id}/`)
}
function api_v1_terms_list(payload) {
  return epicAPI.get(`/api/v1/terms/`)
}
function api_v1_terms_create(payload) {
  return epicAPI.post(`/api/v1/terms/`, payload.data)
}
function api_v1_terms_retrieve(payload) {
  return epicAPI.get(`/api/v1/terms/${payload.id}/`)
}
function api_v1_terms_update(payload) {
  return epicAPI.put(`/api/v1/terms/${payload.id}/`, payload.data)
}
function api_v1_terms_partial_update(payload) {
  return epicAPI.patch(`/api/v1/terms/${payload.id}/`, payload.data)
}
function api_v1_terms_destroy(payload) {
  return epicAPI.delete(`/api/v1/terms/${payload.id}/`)
}
function modules_terms_and_conditions_list(payload) {
  return epicAPI.get(`/modules/terms-and-conditions/`)
}
function modules_terms_and_conditions_create(payload) {
  return epicAPI.post(`/modules/terms-and-conditions/`, payload.data)
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
function rest_auth_login_create(payload) {
  return epicAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return epicAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return epicAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return epicAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return epicAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return epicAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return epicAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return epicAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
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
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_advertisement_list,
  api_v1_advertisement_create,
  api_v1_advertisement_retrieve,
  api_v1_advertisement_update,
  api_v1_advertisement_partial_update,
  api_v1_advertisement_destroy,
  api_v1_board_list,
  api_v1_board_create,
  api_v1_board_retrieve,
  api_v1_board_update,
  api_v1_board_partial_update,
  api_v1_board_destroy,
  api_v1_boardspot_list,
  api_v1_boardspot_create,
  api_v1_boardspot_retrieve,
  api_v1_boardspot_update,
  api_v1_boardspot_partial_update,
  api_v1_boardspot_destroy,
  api_v1_character_list,
  api_v1_character_create,
  api_v1_character_retrieve,
  api_v1_character_update,
  api_v1_character_partial_update,
  api_v1_character_destroy,
  api_v1_characterrule_list,
  api_v1_characterrule_create,
  api_v1_characterrule_retrieve,
  api_v1_characterrule_update,
  api_v1_characterrule_partial_update,
  api_v1_characterrule_destroy,
  api_v1_chat_list,
  api_v1_chat_create,
  api_v1_chat_retrieve,
  api_v1_chat_update,
  api_v1_chat_partial_update,
  api_v1_chat_destroy,
  api_v1_chatmessage_list,
  api_v1_chatmessage_create,
  api_v1_chatmessage_retrieve,
  api_v1_chatmessage_update,
  api_v1_chatmessage_partial_update,
  api_v1_chatmessage_destroy,
  api_v1_chessgame_list,
  api_v1_chessgame_create,
  api_v1_chessgame_retrieve,
  api_v1_chessgame_update,
  api_v1_chessgame_partial_update,
  api_v1_chessgame_destroy,
  api_v1_contactmessage_list,
  api_v1_contactmessage_create,
  api_v1_contactmessage_retrieve,
  api_v1_contactmessage_update,
  api_v1_contactmessage_partial_update,
  api_v1_contactmessage_destroy,
  api_v1_creditcard_list,
  api_v1_creditcard_create,
  api_v1_creditcard_retrieve,
  api_v1_creditcard_update,
  api_v1_creditcard_partial_update,
  api_v1_creditcard_destroy,
  api_v1_feedbackmessage_list,
  api_v1_feedbackmessage_create,
  api_v1_feedbackmessage_retrieve,
  api_v1_feedbackmessage_update,
  api_v1_feedbackmessage_partial_update,
  api_v1_feedbackmessage_destroy,
  api_v1_friendrequest_list,
  api_v1_friendrequest_create,
  api_v1_friendrequest_retrieve,
  api_v1_friendrequest_update,
  api_v1_friendrequest_partial_update,
  api_v1_friendrequest_destroy,
  api_v1_gameinvitation_list,
  api_v1_gameinvitation_create,
  api_v1_gameinvitation_retrieve,
  api_v1_gameinvitation_update,
  api_v1_gameinvitation_partial_update,
  api_v1_gameinvitation_destroy,
  api_v1_login_create,
  api_v1_notification_list,
  api_v1_notification_create,
  api_v1_notification_retrieve,
  api_v1_notification_update,
  api_v1_notification_partial_update,
  api_v1_notification_destroy,
  api_v1_payment_list,
  api_v1_payment_create,
  api_v1_payment_retrieve,
  api_v1_payment_update,
  api_v1_payment_partial_update,
  api_v1_payment_destroy,
  api_v1_privacypolicy_list,
  api_v1_privacypolicy_create,
  api_v1_privacypolicy_retrieve,
  api_v1_privacypolicy_update,
  api_v1_privacypolicy_partial_update,
  api_v1_privacypolicy_destroy,
  api_v1_signup_create,
  api_v1_subscription_list,
  api_v1_subscription_create,
  api_v1_subscription_retrieve,
  api_v1_subscription_update,
  api_v1_subscription_partial_update,
  api_v1_subscription_destroy,
  api_v1_subscriptionfeature_list,
  api_v1_subscriptionfeature_create,
  api_v1_subscriptionfeature_retrieve,
  api_v1_subscriptionfeature_update,
  api_v1_subscriptionfeature_partial_update,
  api_v1_subscriptionfeature_destroy,
  api_v1_subscriptionplan_list,
  api_v1_subscriptionplan_create,
  api_v1_subscriptionplan_retrieve,
  api_v1_subscriptionplan_update,
  api_v1_subscriptionplan_partial_update,
  api_v1_subscriptionplan_destroy,
  api_v1_terms_list,
  api_v1_terms_create,
  api_v1_terms_retrieve,
  api_v1_terms_update,
  api_v1_terms_partial_update,
  api_v1_terms_destroy,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
