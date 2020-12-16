import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Food from "./Models/items.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  money = 10
  food = [new Food('chips', 4, 0, '1.00'),new Food ('candy', 6, 1, '0.50'), new Food('cookies', 5, 2, '1.50'), new Food('pop tart', 10, 3, '1.50')]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
