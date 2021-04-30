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
    await models.space.bulkCreate([
      {
        name: '01',
        description: 'Bench desk work spaces suited for individual work.',
        capacity: '1',
        image: 'https://officesnapshots.com/wp-content/uploads/2018/12/argo-group-offices-new-york-city-17.jpg',
        type: 'Work'
      },
      {
        name: '02',
        description: 'Bench desk work spaces suited for individual work.',
        capacity: '1',
        image: 'https://officesnapshots.com/wp-content/uploads/2020/02/booking-com-offices-new-york-city-9.jpg',
        type: 'Work'
      },
      {
        name: '03',
        description: 'Long work tables suited for individual work.',
        capacity: '1',
        image: 'https://officesnapshots.com/wp-content/uploads/2011/02/J70G7DL.jpg',
        type: 'Learn'
      },
      {
        name: '04',
        description: 'An enclosed focus room suited for individual work.',
        capacity: '1',
        image: 'https://officesnapshots.com/wp-content/uploads/2020/10/lufthansa-offices-sao-paulo-10.jpg',
        type: 'Focus'
      },
      {
        name: '05',
        description: 'An enclosed focus room suited for individual work.',
        capacity: '1',
        image: 'https://officesnapshots.com/wp-content/uploads/2020/02/booking-com-offices-new-york-city-11.jpg',
        type: 'Focus'
      },
      {
        name: '06',
        description: 'An open work area with meeting tables and collaborative equipment.',
        capacity: '2-4',
        image: 'https://officesnapshots.com/wp-content/uploads/2020/02/booking-com-offices-new-york-city-21.jpg',
        type: 'Break'
      },
      {
        name: '07',
        description: 'An open work area with meeting tables and collaborative equipment.',
        capacity: '2-4',
        image: 'https://officesnapshots.com/wp-content/uploads/2019/01/booking-com-bloomhouse-offices-amsterdam-12.jpg',
        type: 'Break'
      },
      {
        name: '08',
        description: 'An open work area with soft seating to support mobility and fluidity.',
        capacity: '2-8',
        image: 'https://officesnapshots.com/wp-content/uploads/2019/07/slack-headquarters-san-francisco-28.jpg',
        type: 'Gather'
      },
      {
        name: '09',
        description: 'An open work area with soft seating to support mobility and fluidity.',
        capacity: '2-8',
        image: 'https://officesnapshots.com/wp-content/uploads/2019/07/slack-headquarters-san-francisco-31.jpg',
        type: 'Gather'
      },
      {
        name: '10',
        description: 'An enclosed meeting room with soft seating to support collaboration and brainstorms.',
        capacity: '2-8',
        image: 'https://officesnapshots.com/wp-content/uploads/2018/09/BSE-global-hq-new-york-city-12.jpg',
        type: 'Create'
      },
      {
        name: '11',
        description: 'An enclosed meeting room with soft seating to support collaboration and brainstorms.',
        capacity: '2-8',
        image: 'https://officesnapshots.com/wp-content/uploads/2021/01/lyft-headquarters-san-francisco-20.jpg',
        type: 'Create'
      },
      {
        name: '12',
        description: 'An enclosed meeting room to support multiple private discussions and meetings.',
        capacity: '2-8',
        image: 'https://officesnapshots.com/wp-content/uploads/2018/12/argo-group-offices-new-york-city-24.jpg',
        type: 'Meet'
      },
      {
        name: '13',
        description: 'An enclosed meeting room to support multiple private discussions and meetings.',
        capacity: '2-8',
        image: 'https://officesnapshots.com/wp-content/uploads/2020/02/booking-com-offices-new-york-city-22.jpg',
        type: 'Meet'
      },
      {
        name: '14',
        description: 'A cafe experience designed to support refreshments, collaboration, and community.',
        capacity: '>10',
        image: 'https://officesnapshots.com/wp-content/uploads/2019/09/gunung-sewu-group-offices-jakarta-7.jpg',
        type: 'Sustain'
      },
      {
        name: '15',
        description: 'A reception experience designed to support introductions, presentations, and collaboration.',
        capacity: '>10',
        image: 'https://officesnapshots.com/wp-content/uploads/2019/07/slack-headquarters-san-francisco-52.jpg',
        type: 'Arrive'
      },
      {
        name: '16',
        description: 'A town hall experience designed to support trainings, presentations, and all-hands meetings.',
        capacity: '>10',
        image: 'https://officesnapshots.com/wp-content/uploads/2018/07/associated-press-global-hq-new-york-city-4.jpg',
        type: 'Assemble'
      },
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
