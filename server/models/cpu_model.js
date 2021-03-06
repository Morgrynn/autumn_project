const db = require('../database');

const cpu = {
  get: function (callback) {
    return db.query(`select * from cpu_table order by id asc`, callback);
  },
  getById: function (id, callback) {
    return db.query('select * from cpu_table where id=$1', [id], callback);
  },
  add: function (cpu, callback) {
    return db.query(
      'insert into cpu_table(name, core_count, core_clock, boost_clock, tdp, integrated_graphics, smt, rating, price, image) values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
      [
        cpu.name,
        cpu.core_count,
        cpu.core_clock,
        cpu.boost_clock,
        cpu.tdp,
        cpu.integrated_graphics,
        cpu.smt,
        cpu.rating,
        cpu.price,
        cpu.image,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query('delete from cpu_table where id=$1', [id], callback);
  },
  update: function (id, cpu, callback) {
    return db.query(
      'update cpu_table set name=$1, core_count=$2, core_clock=$3, boost_clock=$4, tdp=$5, integrated_graphics=$6, smt=$7, rating=$8, price=$9, image=$10 where id=$11',
      [
        cpu.name,
        cpu.core_count,
        cpu.core_clock,
        cpu.boost_clock,
        cpu.tdp,
        cpu.integrated_graphics,
        cpu.smt,
        cpu.rating,
        cpu.price,
        cpu.image,
        id,
      ],
      callback
    );
  },
  searchByName: function (value, callback) {
    var nameLike = '%' + value + '%';
    return db.query(
      'select * from cpu_table where name ILIKE $1 order by id asc',
      [nameLike],
      callback
    );
  },
};

module.exports = cpu;
