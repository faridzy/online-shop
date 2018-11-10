'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin', config.saltRounds),
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'farid',
        email: 'user@user.com',
        password: bcrypt.hashSync('user', config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
