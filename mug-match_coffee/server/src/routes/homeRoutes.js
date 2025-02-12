const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await json ('http://localhost:300/api/imagesAPI');
        const images = response.data;

        res.render ('home', {images});
    } catch (error) {
        console.error('Error fetching images', error);
        res.status(500).send('Error fetching images');
    }
});

module.exports = router;