module.exports = {
  get: function (con, callback) {
    con.query("SELECT * FROM users", callback)
  },

  getById: function (con, id, callback) {
    con.query(`SELECT * FROM users WHERE id = ${id}`, callback)
  },

  create: function (con, data, callback) {
    con.query(
      `INSERT INTO users SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}'`,
      callback
    )
  },

  update: function (con, data, id, callback) {
    con.query(
      `UPDATE users SET 
      nama = '${data.nama}', 
      alamat = '${data.alamat}' 
      WHERE id = ${id}`,
      callback
    )
  },

  destroy: function (con, id, callback) {
    con.query(`DELETE FROM users WHERE id = ${id}`, callback)
  }
}
