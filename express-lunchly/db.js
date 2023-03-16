/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://alnamer:alnamer@localhost/lunchly");

db.connect();

module.exports = db;
