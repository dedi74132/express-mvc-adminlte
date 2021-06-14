module.exports = {
  index: function (req, res) {
    res.render("layout", { page: "pages/dashboard" })
  },
}
