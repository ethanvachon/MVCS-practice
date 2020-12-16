import { ProxyState } from "../AppState.js"

class ItemService{
  buy(num){
    let food = ProxyState.food
    food[num].quantity--
    ProxyState.money -= food[num].price
    ProxyState.food = food
  }
}


export const itemService = new ItemService()