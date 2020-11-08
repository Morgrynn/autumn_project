const db = require('../database');

const motherboards = {
  get: function (callback) {
    return db.query(
      `select * from motherboards_table order by id asc`,
      callback
    );
  },
  getById: function (id, callback) {
    return db.query(
      'select * from motherboards_table where id=$1',
      [id],
      callback
    );
  },
  add: function (motherboards, callback) {
    return db.query(
      'insert into motherboards_table(motherboards_name, socket_cpu, form_factor, memory_max, memory_slots, color, rating, price) values($1,$2,$3,$4,$5,$6,$7,$8)',
      [
        motherboards.motherboards_name,
        motherboards.socket_cpu,
        motherboards.form_factor,
        motherboards.memory_max,
        motherboards.memory_slots,
        motherboards.color,
        motherboards.rating,
        motherboards.price,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query(
      'delete from motherboards_table where id=$1',
      [id],
      callback
    );
  },
  update: function (id, motherboards, callback) {
    return db.query(
      'update motherboards_table set motherboards_name=$1, socket_cpu=$2, form_factor=$3, memory_max=$4, memory_slots=$5, color=$6, rating=$7, price=$8 where id=$9',
      [
        motherboards.motherboards_name,
        motherboards.socket_cpu,
        motherboards.form_factor,
        motherboards.memory_max,
        motherboards.memory_slots,
        motherboards.color,
        motherboards.rating,
        motherboards.price,
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

module.exports = motherboards;
