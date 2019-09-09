import {
    FETCH_IMAGE_GALLERY_SUCCESS,
    FETCH_IMAGE_GALLERY_FAILURE,
    ADD_FAVOURITE_IMAGE,
    REMOVE_FAVOURITE
} from '../../../actions/types';

const INITIAL_STATE={
    photos:[],
    favouriteImage:[],
    error:''
};

const reducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case FETCH_IMAGE_GALLERY_SUCCESS:{
            return {
                ...state,
                photos:action.payload
            }
        }
        case FETCH_IMAGE_GALLERY_FAILURE:{
            return {
                ...state,
                error:action.payload
            }
        }
        case ADD_FAVOURITE_IMAGE:{
            const image = state.photos.find(o => o.id === action.payload);
            return {
                ...state,
                favouriteImage: [...state.favouriteImage, image]
            }
        }
        case REMOVE_FAVOURITE:
            const { favouriteImage } = state;
            let imgs = [...favouriteImage];
            const index = imgs.findIndex(o => o.id === action.payload);
            imgs.splice(index, 1);
            return {
                ...state,
                favouriteImage: imgs
            };
        default:
            return state;
    }
};

export default reducer;