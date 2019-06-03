'use strict'

const USER_ID = 'user'

class UserRegistration {
  getUser(itemID) {
    const user = window.localStorage.getItem(itemID)

    return JSON.parse(user)
  }

  loginUser(user) {
    window.localStorage.setItem(USER_ID, JSON.stringify(user))
    const registeredUser = window.localStorage.getItem(USER_ID)

    return JSON.parse(registeredUser)
  }

  removeUser() {
    window.localStorage.removeItem(USER_ID)
  }
}

export default new UserRegistration()
