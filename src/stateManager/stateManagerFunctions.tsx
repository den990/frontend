import {
    createBlock,
    createPresentation,
    createSlide,
    editSlideBackground,
    removeSlide,
    selectSlide
} from "../utils/functions";
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

export const editSlideBackgroundHandler = (slideIndex: number, value: string) => {
    const newColor: color = {
        code: value
    }
    const newBackground: color | pictureBackground = newColor;
    dispatch(editSlideBackground, {slideIndex, newBackground});
}