import { all, takeLatest } from 'redux-saga/effects'
import {
    FETCH_IMAGE_GALLERY,
    ADD_FAVOURITE_IMAGE_SAGA,
    REMOVE_FAVOURITE_SAGA
} from '../actions/types'
import { removeFavourite, addFavourites, fetchImageGallery } from './imageGallerySaga'

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}

function* actionWatcher() {
    yield takeLatest(FETCH_IMAGE_GALLERY, fetchImageGallery)
    yield takeLatest(ADD_FAVOURITE_IMAGE_SAGA, addFavourites)
    yield takeLatest(REMOVE_FAVOURITE_SAGA, removeFavourite)
}