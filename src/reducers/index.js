import {combineReducers} from "redux";
import imageGalleryReducer from './defaultReducers/imageGallery/imageGalleryReducer';

export const rootReducer=combineReducers({
   imageGallery:imageGalleryReducer
});