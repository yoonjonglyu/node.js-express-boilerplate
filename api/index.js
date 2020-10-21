const router = require('express').Router();

router.get('/root', (req, res) => {
    res.send("Hello, world");
});

module.exports = router;