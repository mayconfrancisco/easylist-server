const Joi = require('joi')

module.exports = {
  addItem: {
    params: {
      listId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    },
    body: {
      name: Joi.string().required(),
      isFinished: Joi.boolean()
    }
  },

  updateItem: {
    params: {
      listId: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required(),
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    },
    body: {
      name: Joi.string(),
      isFinished: Joi.boolean()
    }
  }
}
