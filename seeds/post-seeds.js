const { Post } = require('../models');

const postdata = [
  {
    title: 'Hello Word!',
    post_url: 'https://freecodecamp.org',
    user_id: 1
  },
  {
    title: 'It is a beautiful day!',
    post_url: 'https://youtube.com',
    user_id: 2
  },
  {
    title: 'If you have an idea, you should post it here! ',
    post_url: 'https://www.youtube.com',
    user_id: 3
  },
  {
    title: 'I cannot believe 2021 is almost over! ',
    post_url: 'http://youtube.com',
    user_id: 4
  },
  {
    title: 'You can never learn enough!',
    post_url: 'http://google.com',
    user_id: 5
  },
  {
    title: 'Sky is the limit!',
    post_url: 'https://freecodecamp.org',
    user_id: 1
  },
  {
    title: 'JS rules!',
    post_url: 'http://w3schools.com',
    user_id: 2
  },
  {
    title: 'Bootcamp!',
    post_url: 'http://freecodecamp.org',
    user_id: 3
  },
  {
    title: 'Happy Coding!',
    post_url: 'http://freecodecamp.org',
    user_id: 4
  },
  {
    title: 'Do not skip the leg day at the gym!',
    post_url: 'https://youtube.com',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;