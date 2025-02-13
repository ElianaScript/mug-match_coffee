import Auth from '../utils/auth';

const API_URL = 'https://www.google.com/maps/@35.021534,-80.688171,2845m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D'

const fetchWithAuth = async (method, body = null) => {
    try {
        const token = import.meta.env.VITE_TOKEN;
        if (!token) {
            throw new Error('No authentication token found');
        }

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, 
        };

        const response = await fetch(API_URL, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
            if (response.status === 401) {
                console.warn("Unauthorized request. Check if your token is valid.");
                return null;
            }
            console.error(`Error: ${response.status} - ${response.statusText}`);
            throw new Error(`Invalid map API response (Status: ${response.status})`);
        }

        return await response.json();
    } catch (err) {
        console.error(`Error with ${method} request:`, err.message);
        throw err; 
    }
};

const retrievePlaces = async () => fetchWithAuth('GET');
const searchCafes = async () => fetchWithAuth('GET');
const postCafes = async (cafeData) => fetchWithAuth('POST', cafeData);

export { retrievePlaces, searchCafes, postCafes };
