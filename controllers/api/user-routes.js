const router = require('express').Router();
const { User } = require('../../models');

const bcrypt = require('bcrypt');

// GET /api /users

router.get('/', (req,res) => {

    User.findAll({
        attributes: { exclude: ['password']}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// GET /api/users/1

router.get('/:id', (req,res) => {

    User.findOne( {
        where: {
            id: req.params.id
        },
        attributes: { exclude: ['password']}
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({ message: 'No user found with this ID!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// POST /api/users

router.post('/', (req,res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.post('/login', (req,res) => {
    // expects {email: 'admin@test.com', password: 'admin1234'}

    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbUserData => {
        if(!dbUserData){
            res.status(400).json({ message: 'No user found with this ID!'});
            return;
        }
        //add comment syntax in front of this line in the .then()
        // res.json({ user: dbUserData });

        // Verify user
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword){
            res.status(404).json({message: 'Incorrect password!'});
            return;
        }
        res.json({ user: dbUserData, message: 'You are now logged in!'});
    });


});

// PUT /api/users/1

router.put('/:id', (req,res) => {
    User.update(req.body,{
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData[0]){
            res.status(404).json({ message: 'No user found with this ID!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

// DELETE /api/users/1

router.delete('/:id', (req,res) => {
    User.destroy({
        where: {
            id:req.params.id
        }
    })
    .then(dbUserData => {
        if(!dbUserData){
            res.status(404).json({message: 'No user found with this ID!'});
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });


});

module.exports = router;