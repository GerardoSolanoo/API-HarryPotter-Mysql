const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('Welcome'))

router.post("/wizard", controllers.createWizard);
router.get("/wizard", controllers.getAllWizards);
module.exports = router