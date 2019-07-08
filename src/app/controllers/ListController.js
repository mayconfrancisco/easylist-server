const List = require('../models/List')

class ListController {
  async store (req, resp) {
    if (await List.findOne({ name: req.body.name })) {
      return resp.json({ error: 'Lista já existe com esse nome' })
    }

    const list = await List.create(req.body)
    return resp.json(list)
  }

  async listMany (req, resp) {
    let lists
    const { fat } = req.query

    if (fat && fat.toLowerCase() === 'y') {
      lists = await List.find({}, null, { sort: { name: 1 } }).populate('items')
    } else {
      lists = await List.find({}, null, { sort: { name: 1 } })
    }
    return resp.json(lists)
  }

  async listOne (req, resp) {
    const list = await List.findById(req.params.id)
    return resp.json(list)
  }

  async update (req, resp) {
    await List.updateOne({ _id: req.params.id }, { $set: req.body })
    return resp.send()
  }

  async delete (req, resp) {
    await List.deleteOne({ _id: req.params.id })
    return resp.send()
  }
}

module.exports = new ListController()
