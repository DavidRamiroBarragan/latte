export const Http = {
  get: getBooks
};

async function getBooks() {
  try {
    const response = await fetch('http://18.130.120.189/api/books', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-AUTH-TOKEN': 'LIBRARIFY'
      }
    });
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
