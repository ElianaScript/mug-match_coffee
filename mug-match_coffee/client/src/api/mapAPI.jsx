import Auth from '../utils/auth';

const retrievePlaces = async () => {
    try {
        const token = Auth.getToken();
        if (!token) {
            throw new Error ('No authentication token found')
        }
        const response = await fetch('/api/mapAPI', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${VITE_TOKEN}`
            },
        });
        
        if(!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            throw new Error ('Invalid map api response, check network tab!');
        }
        
    return await response.json();
    } catch (err) {
        console.error('Error retrieving map place', err);
        return null;
    }
}

const searchCafes = async () => {
    try {
        const token = Auth.getToken();
        if(!token) {
            throw new Error ('No authentication token found')
        }

        const response = await fetch ('/api/mapAPI', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${VITE_TOKEN}`
            },
        });

        if(!response.ok) {
            console.error(`Error: ${response.status} - ${response.statusText}`);
            throw new Error ('Invalid map api response, check network tab!');
        }

        return await response.json();
    } catch (err) {
        console.error('Error retrieving cafe', err);
        return null;
    }
}

const postCafes = async (cafeData) => {
    try {
        const token = Auth.getToken();
        if(!token) {
            throw new Error ('No authentication token found');
        }
        const response = await fetch('/api/mapAPI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${tVITE_TOKEN}`
            },
            body: JSON.stringify(cafeData || {}),
        });

        if(!response.ok) {
            console.error(`Error ${response.status} - ${response.statusText}`);
            throw new Error ('Invalid map api response, check network tab!');
        }

        
        return await response.json();
    } catch (err) {
        console.error('Error posting cafe', err);
        return null;
    }
}

export { retrievePlaces, searchCafes, postCafes}