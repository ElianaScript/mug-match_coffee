import Auth from '../../../client/src/utils/auth';

const API_URL = '/api/coffeePics';

export const retrieveCoffeePics = async () => {
    try {
        const response = await fetch (
            '/api/coffeePics',
            { 
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Auth.getToken()}`
                }
            }
        );
        
        if(!response.ok) {
            throw new Error('Invalid API response, check network tab!');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error retrieving data', err);
        return [];
    }
};

export const postImage = async (body) => {
    try {
        const response = await fetch(
            'api/coffeePics', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${Auth.getToken()}`
                },
                body: JSON.stringify(body)
            }

        )
        
if(!response.ok) {
throw new Error ('Invalid Api response, check network tab!');
} 

const data = response.json();
return data;
} catch (err) {
console.error('Error posting images.', err) 

return Promise.reject('Could not produce image');
    }
};

export { retrieveCoffeePics, postImage };