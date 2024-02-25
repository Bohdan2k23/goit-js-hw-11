import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { getImages } from './js/pixabay-api.js';

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import { render } from './js/render-functions.js';

const form = document.querySelector('form');
const gallery = document.querySelector('main');
const loader = document.querySelector('#loader');

form.addEventListener('submit', async ev => {
  ev.preventDefault();

  const value = form.elements.image.value;

  if (!value.trim()) return;

  loader.style.display = '';
  const images = await getImages(value);

  //показує загрузку бо не видно(
  // await new Promise(res => setTimeout(() => res(), 2000));

  loader.style.display = 'none';
  if (images.length == 0) {
    gallery.innerHTML = '';
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  }

  render(images, gallery);

  const lightbox = new SimpleLightbox('main a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  lightbox.refresh();
});
