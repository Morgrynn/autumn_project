const db = require('../database');

const cooler = {
  get: function (callback) {
    return db.query(`select * from cooler_table order by id asc`, callback);
  },
  getById: function (id, callback) {
    return db.query('select * from cooler_table where id=$1', [id], callback);
  },
  add: function (cooler, callback) {
    return db.query(
      'insert into cooler_table(name, fan_rpm, noise_level, color, radiator_size, rating, price, image) values($1,$2,$3,$4,$5,$6,$7,$8)',
      [
        cooler.name,
        cooler.fan_rpm,
        cooler.noise_level,
        cooler.color,
        cooler.radiator_size,
        cooler.rating,
        cooler.price,
        cooler.image,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query('delete from cooler_table where id=$1', [id], callback);
  },
  update: function (id, cooler, callback) {
    return db.query(
      'update cooler_table set name=$1, fan_rpm=$2, noise_level=$3, color=$4, radiator_size=$5, rating=$6, price=$7, image=$8 where id=$9',
      [
        cooler.name,
        cooler.fan_rpm,
        cooler.noise_level,
        cooler.color,
        cooler.radiator_size,
        cooler.rating,
        cooler.price,
        cooler.image,
        id,
      ],
      callback
    );
  },
  searchByName: function (value, callback) {
    var nameLike = '%' + value + '%';
    return db.query(
      'select * from cooler_table where name ILIKE $1 order by id asc',
      [nameLike],
      callback
    );
  },
};

module.exports = cooler;
