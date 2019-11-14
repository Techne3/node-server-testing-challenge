const router = require('express').Router()

const Dogs = require('../helpers-dogs/dogsModel')

router.get('/', (req,res)=> {
    Dogs.find()
    .then(doggos => {
        res.json(doggos)
    })
    .catch(err => res.send(err))
})

router.get('/:id/doggos', (req,res)=> {
    Dogs.find(req.params.id)
    .then(doggos => {
        res.json(doggos)
    })
    .catch(err => res.send(err))
})

router.post('/', (req,res) => {
    Dogs.add(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(error =>{
            res.status(500).json({message: 'nope'})
        })
})


module.exports =router