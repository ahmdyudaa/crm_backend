const express = require('express');
const router = express.Router();
const prospekController = require('../controllers/prospek_controller');

router.get('/', prospekController.getAllProspek);
router.get('/:id', prospekController.getProspekById);
router.post('/', prospekController.createProspek);
router.put('/:id', prospekController.updateProspek);
router.delete('/:id', prospekController.deleteProspek);

module.exports = router;