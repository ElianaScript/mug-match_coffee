const fetch = require('node-fetch');
const Auth = require('../utils/auth');

const retrievePlaces = async (req, res) => {
    try {
        const token = Auth.getToken(req);
        if (!token) {
            return res.status(401).json({ error: 'No authentication token found' });
        }

        const response = await fetch ('https://map.googleapis.com/maps/api/place/nearbysearch/json?location=latitude,longitude&radius=5000&type=cafe&key=API_KEY_HERE');

        if (!response.ok) {
            console.error(`Error ${response.status} - ${response.statusText}`);
            return res.status(response.status).json({error: 'Error retrieving map data, check network or API key!'});
        }

        const data = await response.json();
        return res.json(data);
    } catch (err) {
        console.error('Error retrieving map place', err);
        return res.status(500).json({ error: 'Error retrieving map place' });
    }
};

const searchCafes = async (req, res) => {
    try {
        const token = Auth.getToken(req);
        if (!token) {
            return res.status(401).json({error: 'No authentication token found' });
        }

        const response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=latitude,longitude&radius=5000&type=cafe&key=YOUR_GOOGLE_API_KEY');

        if(!response.ok) {
            console.error(`Error ${response.status} - ${response.statusText}`);
            return res.status(response.status).json({error: 'Error retrieving cafe data'});
        }

        const data = await response.json();
        return res.json(data);
    } catch (err) {
        console.error('Error retrieving cafes', err);
        return res.status(500).json({ error: 'Error retrieving cafes' });
    }
};

const postCafes = async(req, res) => {
    try {
        const token = Auth.getToken(req);
        if(!token) {
            return res.status(401).json({ error: 'No authentication token found' });
        } 

        const cafeData = req.body;
        if(!cafeData) {
            return res.status(400).json({ error: 'Cafe data is required' });
        }

        return res.status(201).json({message: 'Cafe data posted successfully', data: cafeData });
    } catch (err) {
        console.error('Error posting cafe data', err);
        return res.status(500).json({ error: 'Error posting cafe data' });
    }
}
            const newCafe = await Cafe.create(cafeData);
            try {
                res.json('INSERT INTO shops');
            } catch (err) {
                console.error('Error creating cafe', err);
                return res.status(response.status).json({error: 'Error creating cafe data'});
            };

module.exports = {
    retrievePlaces,
    searchCafes,
    postCafes,
    newCafe
};


