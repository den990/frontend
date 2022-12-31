import {createBlock, createPresentation, createSlide, removeSlide, selectSlide} from "../utils/functions";
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

export const selectSlideHandler = (slideIndex: number) => {
    dispatch(selectSlide, slideIndex);
}

export const addBlockHandler = (slideIndex: number, inputContent: blockContent) => {
    dispatch(createBlock, {slideIndex, inputContent})
}