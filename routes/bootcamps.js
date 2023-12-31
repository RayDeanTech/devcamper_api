const express = require('express');
const {
    getBootcamps,
    getBootcamp,
    createBootcamp,
    updateBootcamps,
    deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamps)
    .delete(deleteBootcamp);

module.exports = router;