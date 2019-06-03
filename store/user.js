import UserRegistration from '../services/user-registration'

export const state = () => ({
  user: false
})

export const actions = {
  loginUser({ commit }, user) {
    UserRegistration.loginUser(user)

    commit('saveUser', user)
  },

  removeUser({ commit }) {
    UserRegistration.removeUser()

    commit('saveUser', false)
  }
}

export const mutations = {
  saveUser(state, user) {
    state.user = user
  }
}
