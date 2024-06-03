const express = require('express');
const router = express.Router();
const akunController = require('../controllers/akun_controller');

router.get('/', akunController.getAllAkun);
router.get('/:id', akunController.getAkunById);
router.get('/username/:username', akunController.getAkunByUsername);
router.post('/', akunController.createAkun);
router.put('/:id', akunController.updateAkun);
router.delete('/:id', akunController.deleteAkun);

module.exports = router;