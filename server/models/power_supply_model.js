const db = require('../database');

const power_supply = {
  get: function (callback) {
    return db.query(
      `select * from power_supply_table order by id asc`,
      callback
    );
  },
  getById: function (id, callback) {
    return db.query(
      'select * from power_supply_table where id=$1',
      [id],
      callback
    );
  },
  add: function (power_supply, callback) {
    return db.query(
      'insert into power_supply_table(name, form_factor, efficiency_rating, wattage, modular, color, rating, price, image) values($1,$2,$3,$4,$5,$6,$7,$8,$8,$9)',
      [
        power_supply.name,
        power_supply.form_factor,
        power_supply.efficiency_rating,
        power_supply.wattage,
        power_supply.modular,
        power_supply.color,
        power_supply.rating,
        power_supply.price,
        power_supply.image,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query(
      'delete from power_supply_table where id=$1',
      [id],
      callback
    );
  },
  update: function (id, power_supply, callback) {
    return db.query(
      'update power_supply_table set name=$1, form_factor=$2, efficiency_rating=$3, wattage=$4, modular=$5, color=$6, rating=$7, price=$8 image=$9 where id=$10',
      [
        power_supply.name,
        power_supply.form_factor,
        power_supply.efficiency_rating,
        power_supply.wattage,
        power_supply.modular,
        power_supply.color,
        power_supply.rating,
        power_supply.price,
        power_supply.image,
        id,
      ],
      callback
    );
  },
  searchByName: function (value, callback) {
    var nameLike = '%' + value + '%';
    return db.query(
      'select * from power_supply_table where name ILIKE $1 order by id asc',
      [nameLike],
      callback
    );
  },
};

module.exports = power_supply;
