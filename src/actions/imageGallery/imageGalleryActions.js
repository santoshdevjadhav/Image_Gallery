import {
    FETCH_IMAGE_GALLERY_SUCCESS,
    FETCH_IMAGE_GALLERY_FAILURE,
    ADD_FAVOURITE_IMAGE,
    ADD_FAVOURITE_IMAGEID,
    REMOVE_FAVOURITE
} from '../types';
import axios from 'axios';

export const fetchImageGallery=()=>{
    return(dispatch,getState)=>{
        return new Promise((resolve,reject)=>{
            axios.get(" https://jsonplaceholder.typicode.com/photos")
                .then((res)=>{
                    if(res.status===200){
                        dispatch({
                            type:FETCH_IMAGE_GALLERY_SUCCESS,
                            payload:res.data
                        });
                        return resolve(res.data);
                    }
                })
                .catch((err)=>{
                    if(err){
                        dispatch({
                            type:FETCH_IMAGE_GALLERY_FAILURE,
                            payload:err.response.data
                        })
                    }
                    return reject(err.response.data);
                })
        })
    }
};

export const addFavourites = (id) => dispatch => {
    dispatch({
        type: ADD_FAVOURITE_IMAGE,
        payload: id
    });
};

export const removeFavourite = (id) => dispatch => {
    dispatch({
        type: REMOVE_FAVOURITE,
        payload: id
    })
};