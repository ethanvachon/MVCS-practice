import { ProxyState } from "../AppState.js"
import { itemService } from "../Services/ItemService.js"

function _drawFood(){
  let area = document.getElementById('app')
  let template = ""
  ProxyState.food.forEach(f => template += `<button class="col-3 btn btn-outline-primary" onclick="app.foodController.buy(${f.id})">
  <h3>${f.name}<h3>${f.quantity} left  <div>$${f.price}</div>
  </button>`)
  area.innerHTML = template
}
function _drawMoney(){
  let area = document.getElementById('money')
  area.innerText = ProxyState.money.toString()
}

export default class FoodController{
  constructor(){
    ProxyState.on("food", _drawFood)
    ProxyState.on("food", _drawMoney)
    _drawFood()
    _drawMoney()
  }

  buy(num){
    itemService.buy(num)
  }
}