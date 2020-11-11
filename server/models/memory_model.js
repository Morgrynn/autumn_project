const db = require('../database');

const memory = {
  get: function (callback) {
    return db.query(`select * from memory_table order by id asc`, callback);
  },
  getById: function (id, callback) {
    return db.query('select * from memory_table where id=$1', [id], callback);
  },
  add: function (memory, callback) {
    return db.query(
      'insert into memory_table(memory_name, speed, modules, price_pergb, color, first_word_latency, cas_latency, rating, price, image) values($1,$2,$3,$4,$5,$6,$7,$8,$8,$9,$10)',
      [
        memory.memory_name,
        memory.speed,
        memory.modules,
        memory.price_pergb,
        memory.color,
        memory.first_word_latency,
        memory.cas_latency,
        memory.rating,
        memory.price,
        memory.image,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query('delete from memory_table where id=$1', [id], callback);
  },
  update: function (id, memory, callback) {
    return db.query(
      'update memory_table set memory_name=$1, speed=$2, modules=$3, price_pergb=$4, color=$5, first_word_latency=$6, cas_latency=$7, rating=$8, price=$9 image=$10 where id=$11',
      [
        memory.memory_name,
        memory.speed,
        memory.modules,
        memory.price_pergb,
        memory.color,
        memory.first_word_latency,
        memory.cas_latency,
        memory.rating,
        memory.price,
        memory.image,
        id,
      ],
      callback
    );
  },
  searchByName: function (value, callback) {
    var nameLike = '%' + value + '%';
    return db.query(
      'select * from memory_table where memory_name ILIKE $1 order by id asc',
      [nameLike],
      callback
    );
  },
};

module.exports = memory;
