const express = require("express")
const app = express()
const router = express.Router()
const postsController = require("../controllers/postsController")
const checkApiKey = require("../middleware/checkApiKey")


router.get('/', postsController.index);

router.get('/:id', postsController.show);

router.delete('/:id',checkApiKey, postsController.destroy);

router.post('/',checkApiKey, postsController.store);

router.put('/:id',checkApiKey, postsController.update);


module.exports = router