const Post = require('../model/PostModel')

module.exports = {
  async index(req, res) {

  },
  
  async store(req, res) {
    console.log(req.body)
    console.log(req.file)
    return res.json({ ok: true })
  }
}