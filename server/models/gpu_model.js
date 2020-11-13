const db = require('../database');

const gpu = {
  get: function (callback) {
    return db.query(`select * from gpu_table order by id asc`, callback);
  },
  getById: function (id, callback) {
    return db.query('select * from gpu_table where id=$1', [id], callback);
  },
  add: function (gpu, callback) {
    return db.query(
      'insert into gpu_table(gpu_name, chipset, memory, core_clock, boost_clock, color, length, rating, price, image) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
      [
        gpu.gpu_name,
        gpu.chipset,
        gpu.memory,
        gpu.core_clock,
        gpu.boost_clock,
        gpu.color,
        gpu.length,
        gpu.rating,
        gpu.price,
        gpu.image,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query('delete from gpu_table where id=$1', [id], callback);
  },
  update: function (id, gpu, callback) {
    return db.query(
      'update gpu_table set gpu_name=$1, chipset=$2, memory=$3, core_clock=$4, boost_clock=$5, color=$6, length=$7, rating=$8, price=$9 image=$10 where id=$11',
      [
        gpu.gpu_name,
        gpu.chipset,
        gpu.memory,
        gpu.core_clock,
        gpu.boost_clock,
        gpu.color,
        gpu.length,
        gpu.rating,
        gpu.price,
        gpu.image,
        id,
      ],
      callback
    );
  },
  searchByName: function (value, callback) {
    var nameLike = '%' + value + '%';
    return db.query(
      'select * from gpu_table where gpu_name ILIKE $1 order by id asc',
      [nameLike],
      callback
    );
  },
};

module.exports = gpu;
