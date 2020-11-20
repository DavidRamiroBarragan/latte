const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  'X-AUTH-TOKEN': 'LIBRARIFY'
};

function generateResult({json, response}) {
  return {json, isResponseOk: response.ok, statusCode: response.status};
}

const Http = {
  get: async function(url) {
    const response = await fetch(url, {
      method: 'GET',
      headers
    });
    const json = await response.json();
    return generateResult({json, response});
  },
  post: async function(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
    });
    const json = await response.json();
    return generateResult({json, response});
  },
};

export default Http;