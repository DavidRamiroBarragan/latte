const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  'X-AUTH-TOKEN': 'LIBRARIFY'
};

const Http = {
  get: async function(url) {
    const response = await fetch(url, {
      method: 'GET',
      headers
    });
    return response.json();
  },
  post: async function(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
    });
    return response.json();
  },
};

export default Http;