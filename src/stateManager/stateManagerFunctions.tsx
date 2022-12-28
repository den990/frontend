import {createPresentation, createSlide, removeSlide} from "../utils/functions";
import {dispatch} from "./stateManager";

export const addSlideHandler = () => {
    dispatch(createSlide, {});
}

export const removeSlideHandler = (slideIndex: number) => {
    dispatch(removeSlide, slideIndex);
}

export const createPresentationHandler = () => {
    dispatch(createPresentation, {});
}