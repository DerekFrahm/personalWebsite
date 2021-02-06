const {Router} = require('express'), 
    router = Router(), 
    controller = require('../controllers/controller');

router.route('/')
    .get(controller.getHome)

module.exports = router