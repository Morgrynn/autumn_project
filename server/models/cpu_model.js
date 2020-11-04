const db = require('../database');

const cpu = {
  get: function (callback) {
    return db.query(`select * from cpu_table order by id desc`, callback);
  },
  getById: function (id, callback) {
    return db.query('select * from cpu_table where id=$1', [id], callback);
  },
  add: function (cpu, callback) {
    return db.query(
      'insert into cpu_table(cpu_name, core_count, core_clock, boost_clock, tdp, integrated_graphics, smt, rating, price) values($1,$2,$3,$4,$5,$6,$7,$8,$9)',
      [
        cpu.cpu_name,
        cpu.core_count,
        cpu.core_clock,
        cpu.boost_clock,
        cpu.tdp,
        cpu.integrated_graphics,
        cpu.smt,
        cpu.rating,
        cpu.price,
      ],
      callback
    );
  },
  delete: function (id, callback) {
    return db.query('delete from cpu_table where id=$1', [id], callback);
  },
  update: function (id, cpu, callback) {
    return db.query(
      'update cpu_table set cpu_name=$1, core_count=$2, core_clock=$3, boost_clock=$4, tdp=$5, integrated_graphics=$6, smt=$7, rating=$8, price=$9 where id=$10',
      [
        cpu.cpu_name,
        cpu.core_count,
        cpu.core_clock,
        cpu.boost_clock,
        cpu.tdp,
        cpu.integrated_graphics,
        cpu.smt,
        cpu.rating,
        cpu.price,
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

module.exports = cpu;
