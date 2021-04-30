'use strict';

const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await models.workstyle.bulkCreate([
      {name: 'The Thinker', description: 'You get your best focus work done in work spaces that offer quiet and the ability to focus.'},
      {name: 'The Builder', description: 'You get your best focus work done in work spaces that offer a mix of quiet and dynamic atmospheres.'},
      {name: 'The Designer', description: 'You get your best work done in quiet work spaces that support both focus and interactive work modes.'},
      {name: 'The Developer', description: 'You get your best work done in dynamic work spaces that support both focus and interactive work modes.'},
      {name: 'The Counselor', description: 'You get your best work done in quiet work spaces that support interactive work modes.'},
      {name: 'The Connector', description: 'You get your best work done in dynamic work spaces that support interactive work modes.'}
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
