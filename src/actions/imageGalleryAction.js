import { FETCH_IMAGE_GALLERY, ADD_FAVOURITE_IMAGE, REMOVE_FAVOURITE } from './types'

export const fetchImageGalleryAction = () => ({
  type: FETCH_IMAGE_GALLERY
});

export const addFavourites = id => ({
    type: ADD_FAVOURITE_IMAGE,
    payload: id
});

export const removeFavourite = id => ({
    type: REMOVE_FAVOURITE,
    payload: id
});