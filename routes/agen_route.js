const express = require('express');
const router = express.Router();
const agenController = require('../controllers/agen_controller');

router.get('/', agenController.getAllAgen);
router.get('/:id', agenController.getAgenById);
router.post('/', agenController.createAgen);
router.put('/:id', agenController.updateAgen);
router.delete('/:id', agenController.deleteAgen);

module.exports = router;