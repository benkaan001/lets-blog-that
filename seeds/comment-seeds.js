const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is so cool!',
    user_id: 1,
    post_id: 5
  },
  {
    comment_text: 'Totally agree!',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'Most certainly!',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Looking forward to seeing your next post!',
    user_id: 4,
    post_id: 3
  },
  {
    comment_text: 'Thank you for your comments!',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'Heck yeah!',
    user_id: 1,
    post_id: 6
  },
  {
    comment_text: 'Keep up the great work!',
    user_id: 2,
    post_id: 7
  },
  {
    comment_text: 'Well said!',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text: 'Nicely done!',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'Do you have twitter?',
    user_id: 5,
    post_id: 9
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;