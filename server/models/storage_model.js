const db = require('../database');

const storage = {
  get: function (callback) {
    return db.query(`select * from storage_table order by id asc`, callback);
  },
  getById: function (id, callback) {
    return db.query('select * from storage_table where id=$1', [id], callback);
  },
  add: function (storage, callback) {
    return db.query(
      'insert into storage_table(name, capacity, price_pergb, type, cache, form_factor, interface, rating, price, image) values($1,$2,$3,$4,$5,$6,$7,$8,$8,$9,$10)',
      [
        storage.name,
        storage.capacity,
        storage.price_pergb,
        storage.type,
        storage.cache,
        storage.form_factor,
        storage.interface,
        storage.rating,
        storage.price,
        storage.image,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query('delete from storage_table where id=$1', [id], callback);
  },
  update: function (id, storage, callback) {
    return db.query(
      'update storage_table set name=$1, capacity=$2, price_pergb=$3, type=$4, cache=$5, form_factor=$6, interface=$7, rating=$8, price=$9 image=$10 where id=$11',
      [
        storage.name,
        storage.capacity,
        storage.price_pergb,
        storage.type,
        storage.cache,
        storage.form_factor,
        storage.interface,
        storage.rating,
        storage.price,
        storage.image,
        id,
      ],
      callback
    );
  },
  searchByName: function (value, callback) {
    var nameLike = '%' + value + '%';
    return db.query(
      'select * from storage_table where name ILIKE $1 order by id asc',
      [nameLike],
      callback
    );
  },
};

module.exports = storage;
