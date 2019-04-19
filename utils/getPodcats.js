export const API_URL = 'https://listen-api.listennotes.com/api/v2/';
export const API_KEY = '05cafb22a4d44079bf7c3f7183646b00';

export const headers = {
  'X-ListenAPI-Key': API_KEY,
};

const getPodcasts = async name => {
  try {
    const url = `${API_URL}search`;
    const completeUrl = name ? `${url}?q=${name}&` : `${url}?`;
    const response = await fetch(`${completeUrl}`, {
      headers,
    });
    const {results = []} = await response.json();

    return results;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default getPodcasts;
