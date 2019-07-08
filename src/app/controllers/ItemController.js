const List = require('../models/List')
const Item = require('../models/Item')

class ItemController {
  async store (req, resp) {
    let list = await List.findById(req.params.listId)
    if (!list) {
      return resp.json({ error: 'Lista não existe' })
    }

    const item = await Item.create(req.body)

    list.items.push(item)
    list.save()

    return resp.json(item)
  }

  async update (req, resp) {
    const list = await List.findById(req.params.listId)
    if (!list) {
      return resp.json({ error: 'Lista não existe' })
    }

    const exist = list.items.filter(item => String(item) === req.params.id)
    if (!exist || exist.length === 0) {
      return resp.json({ error: 'Item não existe na lista' })
    }

    await Item.updateOne({ _id: req.params.id }, { $set: req.body })
    return resp.send()
  }
}

module.exports = new ItemController()
