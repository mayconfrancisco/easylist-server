const express = require('express')
const routes = express.Router()
const handle = require('express-async-handler')
const validate = require('express-validation')

const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.post(
  '/list',
  validate(validators.List.addList),
  handle(controllers.ListController.store)
)
routes.get(
  '/list',
  validate(validators.List.listMany),
  handle(controllers.ListController.listMany)
)
routes.get(
  '/list/:id',
  validate(validators.List.listOne),
  handle(controllers.ListController.listOne)
)
routes.put(
  '/list/:id',
  validate(validators.List.updateList),
  handle(controllers.ListController.update)
)
routes.delete(
  '/list/:id',
  validate(validators.List.deleteList),
  handle(controllers.ListController.delete)
)

routes.post(
  '/list/:listId/item',
  validate(validators.Item.addItem),
  handle(controllers.ItemController.store)
)
routes.put(
  '/list/:listId/item/:id',
  validate(validators.Item.updateItem),
  handle(controllers.ItemController.update)
)

module.exports = routes
