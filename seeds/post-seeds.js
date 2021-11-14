const { Post } = require('../models');

const postdata = [
  {
    title: 'Hello Word!',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'It is a beautiful day!',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 2
  },
  {
    title: 'If you have an idea, you should post it here! ',
    post_url: 'https://www.youtube.com',
    user_id: 3
  },
  {
    title: 'I can not believe 2021 is almost over! ',
    post_url: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'You can never learn enough!',
    post_url: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 5
  },
  {
    title: 'Sky is the limit!',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 1
  },
  {
    title: 'JS rules!',
    post_url: 'http://edublogs.org/non/ligula/pellentesque.js',
    user_id: 2
  },
  {
    title: 'Bootcamp!',
    post_url: 'http://ucla.edu/consequat/nulla.html',
    user_id: 3
  },
  {
    title: 'Happy Coding!',
    post_url: 'http://theguardian.com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 4
  },
  {
    title: 'Do not skip the leg day at the gym!',
    post_url: 'https://reverbnation.com/ligula/sit.jpg',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;