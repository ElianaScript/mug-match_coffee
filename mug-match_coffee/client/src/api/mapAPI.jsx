const API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

const PLACES_API_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";

const fetchWithAuth = async (lat, lng) => {
    try {
        if (!API_KEY) {
            throw new Error('No Google Maps API key found');
        }

        const url = `${PLACES_API_URL}?location=${lat},${lng}&radius=1500&type=cafe&key=${API_KEY}`;
        
        console.log("Fetching URL:", url); 

        const response = await fetch(url);

        if (!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            throw new Error(`Invalid map API response (Status: ${response.status})`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error fetching places:`, err.message);
        throw err; 
    }
};

const retrievePlaces = async (lat, lng) => {
    if (!lat || !lng) {
        console.error("Latitude and Longitude are required.");
        return;
    }
    return fetchWithAuth(lat, lng);
};

navigator.geolocation.getCurrentPosition(
    (position) => {
        const { latitude, longitude } = position.coords;
        console.log("User's Location:", latitude, longitude);
        retrievePlaces(latitude, longitude);
    },
    (error) => {
        console.error("Geolocation error:", error.message);
    }
);

export { retrievePlaces };
