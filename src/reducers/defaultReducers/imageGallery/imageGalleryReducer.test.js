import reducer from './imageGalleryReducer'
import {FETCH_IMAGE_GALLERY_FAILURE, FETCH_IMAGE_GALLERY_SUCCESS, REMOVE_FAVOURITE} from "../../../actions/types";


const INITIAL_STATE={
    photos:[],
    favouriteImage:[],
    error:''
};


describe('post reducer', () => {
    it('test cases for FETCH_IMAGE_GALLERY_SUCCESS', () => {
        expect(reducer(undefined, {type:FETCH_IMAGE_GALLERY_SUCCESS})).toEqual({...INITIAL_STATE,photos:undefined });
    });
    it('test cases for FETCH_IMAGE_GALLERY_FAILURE', () => {
        expect(reducer(undefined, {type:FETCH_IMAGE_GALLERY_FAILURE})).toEqual({...INITIAL_STATE,error:undefined     });
    });
    it('test cases for REMOVE_FAVOURITE', () => {
        expect(reducer(undefined, {type:REMOVE_FAVOURITE})).toEqual({...INITIAL_STATE,favouriteImage:[] });
    });

});