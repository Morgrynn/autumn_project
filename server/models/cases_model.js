const db = require('../database');

const cases = {
  get: function (callback) {
    return db.query(`select * from cases_table order by id asc`, callback);
  },
  getById: function (id, callback) {
    return db.query('select * from cases_table where id=$1', [id], callback);
  },
  add: function (cases, callback) {
    return db.query(
      'insert into cases_table(case_name, type, color, side_panel_window, internal_bays rating, price, image) values($1,$2,$3,$4,$5,$6,$7,$8,$8)',
      [
        cases.case_name,
        cases.type,
        cases.color,
        cases.side_panel_window,
        cases.internal_bays,
        cases.rating,
        cases.price,
        cases.image,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query('delete from cases_table where id=$1', [id], callback);
  },
  update: function (id, cases, callback) {
    return db.query(
      'update cases_table set case_name=$1, type=$2, color=$3, side_panel_window=$4, internal_bays=$5 rating=$6, price=$7 image=$8 where id=$19',
      [
        cases.case_name,
        cases.type,
        cases.color,
        cases.side_panel_window,
        cases.internal_bays,
        cases.rating,
        cases.price,
        cases.image,
        id,
      ],
      callback
    );
  },
  searchByName: function (value, callback) {
    var nameLike = '%' + value + '%';
    return db.query(
      'select * from cpu_table where cpu_name ILIKE $1 order by id desc',
      [nameLike],
      callback
    );
  },
};

module.exports = cases;
