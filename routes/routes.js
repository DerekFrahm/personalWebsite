const {Router} = require('express'), 
    router = Router(), 
    controller = require('../controllers/controller');

router.route('/')
    .get(controller.getHome)
router.route('/resume')
    .get(controller.getResume)

module.exports = router