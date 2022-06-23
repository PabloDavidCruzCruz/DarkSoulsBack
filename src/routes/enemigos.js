const {Router} = require('express');
const router = Router();

const enemigos = require('../sample.json')

router.get('/',(req,res) => {
    res.json(enemigos)
});

module.exports = router;


