const { Router } = require('express');
const router = Router();

const {
  getAsteroids,
  postAsteroids,
  putAsteroids,
  patchAsteroids,
  deleteAsteroids,
} = require('../controllers/asteroids.controllers');

router.get('/', getAsteroids);

router.post('/', postAsteroids);

router.put('/:id', putAsteroids);

router.patch('/:id', patchAsteroids);

router.delete('/:id', deleteAsteroids);

module.exports = router;
