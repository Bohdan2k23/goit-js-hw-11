function createLi({ title, value }) {
  return `<li class="flex-col flex-center">
            <span class="bold">${title}</span>
            <span>${value}</span>
        </li>`;
}

function createItem({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  let list = [
    { title: 'Likes', value: likes },
    { title: 'Views', value: views },
    { title: 'Comments', value: comments },
    { title: 'Downloads', value: downloads },
  ];

  return `
    <a href="${largeImageURL}"  class="b-1 bc-gray over-hidden r-10">
        <img alt="${tags}" src="${webformatURL}" class="h-200 w-full" alt="" />
        <ul class="flex-space p-4+20 fs-12" >
            ${list.map(e => createLi(e)).join('\n')}
        </ul>
    </a>`;
}

export function render(imagesList, gallery) {
  let html = '';
  gallery.innerHTML = '';
  for (const item of imagesList) {
    html += createItem(item);
  }

  gallery.insertAdjacentHTML('beforeend', html);
}
