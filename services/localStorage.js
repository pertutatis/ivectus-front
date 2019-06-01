'use strict'

class Storage {
  constructor() {
    this.storage = false
  }

  getItem(itemID) {
    return window.localStorage.getItem(itemID)
  }

  getAll() {
    return window.localStorage
  }

  setItem(itemID, value) {
    window.localStorage.setItem(itemID, value)

    return window.localStorage.getItem(itemID)
  }

  removeItem(itemID) {
    window.localStorage.removeItem(itemID)
  }

  clearStorage() {
    window.localStorage.clear()
  }
}

export default new Storage()
