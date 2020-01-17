'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    g_id: DataTypes.STRING,
    g_name: DataTypes.STRING
  }, {});

  return users;
};