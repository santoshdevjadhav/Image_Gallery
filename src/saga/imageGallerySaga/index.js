import {
    FETCH_IMAGE_GALLERY_SUCCESS,
    FETCH_IMAGE_GALLERY_FAILURE,
    ADD_FAVOURITE_IMAGE,
    REMOVE_FAVOURITE
} from '../../actions/types';
import axios from 'axios';
import { put } from 'redux-saga/effects'

export function* fetchImageGallery() {
    let response
    try {
        response = yield axios.get(" https://jsonplaceholder.typicode.com/photos");
        yield put({
            type: FETCH_IMAGE_GALLERY_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: FETCH_IMAGE_GALLERY_FAILURE,
            payload: []
        });
    }
}

export function* addFavourites (id)  {
    yield put({
        type: ADD_FAVOURITE_IMAGE,
        payload: id
    })
}

export function* removeFavourite (id) {
    yield put({
        type: REMOVE_FAVOURITE,
        payload: id
    })
}