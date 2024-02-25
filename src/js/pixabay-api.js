const url = 'https://pixabay.com/api/';

export async function getImages(keyword) {
  const params = new URLSearchParams({
    key: '42543975-3eca36a47ffade116cf6655c4',
    q: keyword,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const promise = await fetch(url + '?' + params.toString());
  const data = await promise.json();

  return data.hits;
}

// const data = fetch(url + '?' + params.toString()).then(e => e.json());
