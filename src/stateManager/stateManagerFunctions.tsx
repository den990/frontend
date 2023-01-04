import {
    createBlock,
    createPresentation,
    createSlide,
    editSlideBackground,
    removeSlides,
    selectSlide, selectSlides
} from "../utils/functions";
import {MouseEvent} from "react";
import {dispatch} from "./stateManager";

export const addSlideHandler = () => {
    dispatch(createSlide, {});
}

export const removeSlideHandler = (selectedSlides: Slide[]) => {
    let slideIndexes: number[] = [];
    for (let i = 0; i < selectedSlides.length; i++) {
        slideIndexes.push(selectedSlides[i].slideIndex);
    }
    dispatch(removeSlides, slideIndexes);
}

export const createPresentationHandler = () => {
    dispatch(createPresentation, {});
}

export const selectSlideHandler = (slideIndex: number, e: MouseEvent<HTMLDivElement>, selectedSlides: boolean) => {
    if (e.ctrlKey)
    {
        dispatch(selectSlides, slideIndex)
    }
    else {
        dispatch(selectSlide, slideIndex);
    }
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