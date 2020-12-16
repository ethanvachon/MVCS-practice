import ValuesController from "./Controllers/ValuesController.js";

import FoodController from "./Controllers/ItemController.js"

class App {
  valuesController = new ValuesController();

  foodController = new FoodController()
}

window["app"] = new App();
