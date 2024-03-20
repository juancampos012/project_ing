const express = require('express');
const router = express.Router();
const superheroController = require('../controllers/superhero')

router.post('/new-superhero', superheroController.createSuperhero);
router.get('/', superheroController.getListSuperhero);
router.get('/:id', superheroController.getByIdSuperhero);
router.patch('/:id', superheroController.editSuperhero);
router.delete('/:id', superheroController.deleteSuperhero);

module.exports = router;