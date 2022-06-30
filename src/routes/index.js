const { Router, json } = require("express");
const router = Router();

router.get('/test', (req, res) =>{
    const data = {
        "name": "Artorias",
        "Poder": "Mago"
    };
    res.json(data);
});

module.exports = router;