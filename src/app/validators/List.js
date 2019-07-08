const Joi = require('joi')

module.exports = {
  addList: {
    body: {
      name: Joi.string()
        .max(50)
        .required()
    }
  },

  listOne: {
    params: {
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    }
  },

  listMany: {
    query: {
      fat: Joi.string()
    }
  },

  updateList: {
    params: {
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    },
    body: {
      name: Joi.string()
        .max(50)
        .required()
    }
  },

  deleteList: {
    params: {
      id: Joi.string()
        .regex(/^[0-9a-fA-F]{24}$/)
        .required()
    }
  }
}
