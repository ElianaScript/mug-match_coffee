export const retrieveCoffeePics = async () => {
  try {
    const response = await fetch('https://coffee.alexflipnote.dev/coffee');
    
 
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }

    const data = await response.json();
    console.log('Fetched Coffee Image:', data); 
    return [data];
  } catch (error) {
    console.error('Error retrieving coffee image:', error);
    return []; 
  }
};
