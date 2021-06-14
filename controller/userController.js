const User = require("../model/User")

module.exports = {
  index: function (req, res) {
    User.get(req.con, function (err, rows) {
      res.render("layout", { data: rows, page: "pages/user/index" })
    })
  },

  create: function (req, res) {
    res.render("layout", { page: "pages/user/create" })
  },

  store: function (req, res) {
    User.create(req.con, req.body, function (err) {
      res.redirect("/users")
    })
  },

  edit: function (req, res) {
    User.getById(req.con, req.params.id, function (err, rows) {
      res.render("layout", { data: rows[0], page: "pages/user/edit" })
    })
  },

  update: function (req, res) {
    User.update(req.con, req.body, req.params.id, function (err) {
      res.redirect("/users")
    })
  },

  destroy: function (req, res) {
    User.destroy(req.con, req.params.id, function (err) {
      res.redirect("/users")
    })
  }
}
